import React, {Component } from 'react';
import JSONdata from "../data.json";
import { Card } from "components/Card/Card.jsx";
import Chart from "react-apexcharts";

var labels= JSONdata.US_Month_time.xlabel;
var series= JSONdata.US_Month_time.series;  
var dataCollectTime=JSONdata.Date;
var legend_name=JSONdata.US_Month_time.series_label;
var allData = [];
legend_name.forEach(function(name, i){
  var dataset={};
  dataset["name"]=name;
  var data=series[i]
  dataset["data"]=data;
  allData.push(dataset);
});  


class Bar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          series: allData,
          options: {
            chart: {
              type: 'bar',
              height: 350,
              stacked: true,
              toolbar: {
                show: true
              },
              zoom: {
                enabled: true
              }
            },
            colors: ['#1E90FF', '#B22222', '#FFA500'],
            responsive: [{
              breakpoint: 480,
              options: {
                legend: {
                  position: 'bottom',
                  offsetX: -10,
                  offsetY: 0
                }
              }
            }],
            plotOptions: {
              bar: {
                horizontal: false,
                
              },
            },
            xaxis: {
              type: 'datetime',
              categories: labels
            },
            legend: {
              position: 'right',
              offsetY: 40
            },
            fill: {
              opacity: 1
            }
          },
        
        
        };
    }
    render() { 

        return (
            <Card
            statsIcon="fa fa-history"
            title="New Reported Cases in US"
            category={"Updated by "+dataCollectTime}
            content={
              <div id="chart">
              <Chart options={this.state.options} series={this.state.series} type="bar" height={350} />
              </div>
            }
          />
        );
    }
}
 
export default Bar;

