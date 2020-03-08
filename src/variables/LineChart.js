import React, { Component } from 'react';
import JSONdata from "../data.json";
import Chart from "react-apexcharts";


var labels= JSONdata.US_Week_time.xlabel;
var series= JSONdata.US_Week_time.series;
var legend_name=JSONdata.US_Week_time.series_label;

var allData = [];
legend_name.forEach(function(name, i){
  var dataset={};
  dataset["name"]=name;
  var data=series[i]
  dataset["data"]=data;
  allData.push(dataset);
}); 

class ApexChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: allData,
        options: {
          chart: {
            width: '200%',
            height: '200%',
            type: 'line',
            dropShadow: {
              enabled: true,
              color: '#000',
              top: 18,
              left: 7,
              blur: 10,
              opacity: 0.2
            },
            toolbar: {
              show: false
            }
          },
          colors: ['#77B6EA', '#545454'],
          dataLabels: {
            enabled: true,
          },
          stroke: {
            curve: 'smooth'
          },
          grid: {
            borderColor: '#e7e7e7',
            row: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          markers: {
            size: 1
          },
          xaxis: {
            categories: labels,
            title: {
              text: 'Day'
            }
          },
          yaxis: {
            title: {
              text: 'Number of Cases'
            }
          },
          legend: {
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
          },
          animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 800,
            animateGradually: {
                enabled: true,
                delay: 150
            },
            dynamicAnimation: {
                enabled: true,
                speed: 350
            }
        }
        },
      
      
      };
    }

  

    render() {
        console.log(allData)
      return (
        <div>
             <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="500"
            />
        </div>
      );
    }
  }
  export default ApexChart;