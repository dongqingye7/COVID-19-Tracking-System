import React, {Component } from 'react';
import JSONdata from "../data.json";
import ChartistGraph from "react-chartist";
import { Card } from "components/Card/Card.jsx";

class Bar extends Component {
    createLegend(json) {
      var legend = [];
      for (var i = 0; i < json["legend_name"].length; i++) {
        var type = "fa fa-circle text-" + json["types"][i];
        legend.push(<i className={type} key={i} />);
        legend.push(" ");
        legend.push(json["legend_name"][i]);
      }
      return legend;
    }
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        var labels= JSONdata.US_Month_time.xlabel;
        var series= JSONdata.US_Month_time.series;  
        var data={labels, series};
        var dataCollectTime=JSONdata.Date;
        var types= ["info", "danger", "warning"];
        var legend_name=JSONdata.US_Month_time.series_label;
        var legend={legend_name, types};
        console.log(legend);
        return (
            <Card
            statsIcon="fa fa-history"
            //id="chartHours"
            title="Daily Reported Cases in US"
            category="Daliy updates"
            stats={"Updated by "+dataCollectTime}
            content={
              <div className="ct-chart">
                <ChartistGraph
                  data={data}
                  type="Bar"
                  plugins="tooltip"
                />
              </div>
            }
            legend={
              <div className="legend">{this.createLegend(legend)}</div>
            }
          />
        );
    }
}
 
export default Bar;
