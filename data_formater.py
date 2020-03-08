#!/usr/bin/env python
# coding: utf-8



import json
import pandas



from datetime import date, timedelta
import requests



today = date.today()
# mm-dd-y
date1 = today.strftime("%m-%d-%Y")
# mm/dd/y
date2 = today.strftime("%m/%d/%Y")


csv_file_name = date1+'.csv'

par_url = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/'
url = par_url + csv_file_name

request = requests.get(url)
if request.status_code == 200:
    pass
else:
    yesterday = today - timedelta(days=1)
    yest1 = yesterday.strftime("%m-%d-%Y")
    yest2 = yesterday.strftime("%m/%d/%y")
    csv_file_name = yest1 + '.csv'
    url = par_url + csv_file_name
    

## Total US data

Today_data = pandas.read_csv(url, index_col='Country/Region')
Total_US_data = Today_data.loc[ ['US'] , ['Confirmed','Deaths', 'Recovered'] ]
US_Total_Confirmed = int(Total_US_data['Confirmed'].sum())
US_Total_Deaths = int(Total_US_data['Deaths'].sum())
US_Total_Recovered = int(Total_US_data['Recovered'].sum())



Today_US_Location = Today_data.loc[ ['US'] , ['Province/State','Confirmed','Deaths', 'Recovered','Latitude','Longitude'] ]
US_location = Today_US_Location.to_dict('records')



valid_states = ['AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA','GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT','VT','VI','VA','WA','WV','WI','WY']
comfirmed_state_dic = {}
for index,province in enumerate(US_location):
    name = province['Province/State']
    if '(From Diamond Princess)' in name:
        name = name[:-24]
    else:
        pass
    if name[-2:] not in valid_states:
        State = 'Unknwon'
        US_location[index]['State'] = State
        County = 'Unknwon'
        US_location[index]['County'] = County
    else:
        State = name[-2:]
        US_location[index]['State'] = State
        County = name[:-4]
        US_location[index]['County'] = County
        if State == 'ip':
            print(province['Province/State'])
       
    lat = province['Latitude']
    lng = province['Longitude']
    US_location[index]['center'] = {}
    US_location[index]['center']['lat'] = lat
    US_location[index]['center']['lng'] = lng
    del US_location[index]['Latitude']
    del US_location[index]['Longitude']
    del US_location[index]['Province/State']
    
    if State not in comfirmed_state_dic.keys():
        comfirmed_state_dic[State] = []
        comfirmed_state_dic[State].append(US_location[index])
    else:
        comfirmed_state_dic[State].append(US_location[index])
    



## US Time series data


#  Confirmed
url_Confirmed = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv'
US_Confirmed_time = pandas.read_csv(url_Confirmed, index_col='Country/Region')
rowData = US_Confirmed_time.loc[ ['US'] , :]
columnsData = rowData.iloc[ :, 3:]


Confirmed_time_series = columnsData.sum(axis = 0, skipna = True)
Confirmed_week = Confirmed_time_series[-7:]
week_label = list(Confirmed_week.keys())
Confirmed_week = list(Confirmed_week)

Confirmed_month = Confirmed_time_series[-30:]

month_label = list(Confirmed_month.keys())
for index,date in enumerate(month_label):
    month_label[index] = date[:-3]
    
Confirmed_month = list(Confirmed_month)




temp = int(Confirmed_time_series[-31])

new_Confirmed_month = [0]*30

for index,value in enumerate(Confirmed_month):
    if index ==0 :
        new_Confirmed_month[0] = value- temp
    else:
        new_Confirmed_month[index] = value - Confirmed_month[index-1]



#  Deaths
url_Deaths = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Deaths.csv'
US_Deaths_time = pandas.read_csv(url_Deaths, index_col='Country/Region')
rowData = US_Deaths_time.loc[ ['US'] , :]
columnsData = rowData.iloc[ :, 3:]

Deaths_time_series = columnsData.sum(axis = 0, skipna = True)
Deaths_week = list(Deaths_time_series[-7:])
Deaths_month = list(Deaths_time_series[-30:])



temp = int(Deaths_time_series[-31])

new_Deaths_month = [0]*30

for index,value in enumerate(Deaths_month):
    if index ==0 :
        new_Deaths_month[0] = value- temp
    else:
        new_Deaths_month[index] = value - Deaths_month[index-1]




#  Recovered
url_Recovered = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Recovered.csv'
US_Recovered_time = pandas.read_csv(url_Recovered, index_col='Country/Region')

rowData = US_Recovered_time.loc[ ['US'] , :]
columnsData = rowData.iloc[ :, 3:]

Recovered_time_series = columnsData.sum(axis = 0, skipna = True)
Recovered_week = list(Recovered_time_series[-7:])
Recovered_month = list(Recovered_time_series[-30:])




temp = int(Recovered_time_series[-31])

new_Recovered_month = [0]*30

for index,value in enumerate(Recovered_month):
    if index ==0 :
        new_Recovered_month[0] = value - temp
    else:
        new_Recovered_month[index] = value - Recovered_month[index-1]




data = {}

data['Date'] = date1

data['Total_US_data'] = {}
data['Total_US_data']['US_Total_Confirmed'] = US_Total_Confirmed
data['Total_US_data']['US_Total_Deaths'] = US_Total_Deaths
data['Total_US_data']['US_Total_Recovered'] = US_Total_Recovered

data['US_Week_time'] = {}
data['US_Week_time']['xlabel'] = week_label
data['US_Week_time']['series_label']=['Confirmed','Deaths','Recovered']
data['US_Week_time']['series']=[]
data['US_Week_time']['series'].append(Confirmed_week)
data['US_Week_time']['series'].append(Deaths_week)
data['US_Week_time']['series'].append(Recovered_week)

data['US_Month_time'] = {}
data['US_Month_time']['xlabel'] = month_label
data['US_Month_time']['series_label']=['Confirmed','Deaths','Recovered']
data['US_Month_time']['series']=[]
data['US_Month_time']['series'].append(new_Confirmed_month)
data['US_Month_time']['series'].append(new_Deaths_month)
data['US_Month_time']['series'].append(new_Recovered_month)

data['US_location'] = US_location

data['comfirmed_state_list'] = sorted(comfirmed_state_dic.keys())
data['comfirmed_state_dic'] = comfirmed_state_dic


with open('data.json', 'w') as outfile:
    json.dump(data, outfile)





