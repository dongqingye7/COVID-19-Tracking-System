import React, {Component } from 'react';
import JSONdata from "../data.json";
import { Card } from "components/Card/Card.jsx";
import { ColumnChart } from 'react-chartkick'

class Bar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        var labels= JSONdata.US_Month_time.xlabel;
        var series= JSONdata.US_Month_time.series;  
        var dataCollectTime=JSONdata.Date;
        var legend_name=JSONdata.US_Month_time.series_label;
        var allData = [];
        legend_name.forEach(function(name, i){
          var dataset={};
          dataset["name"]=name;
          var data={};
          labels.forEach((label, j) => data[label] = series[i][j]);
          dataset["data"]=data;
          allData.push(dataset);
        });   
        return (
            <Card
            statsIcon="fa fa-history"
            title="New Reported Cases in US"
            category={"Updated by "+dataCollectTime}
            content={
              <div className="ct-chart">
                <ColumnChart data={allData} />
              </div>
            }
          />
        );
    }
}
 
export default Bar;
