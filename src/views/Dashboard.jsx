/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { Tasks } from "components/Tasks/Tasks.jsx";
import {
  dataPie,
  legendPie,
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales,
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar
} from "variables/Variables.jsx";
import Chart from '../variables/Chart.js';
import JSONdata from "../data.json";


class Dashboard extends Component {
  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }
  render() {
    var dataCollectTime=JSONdata.Date;
    var Comfirmed=JSONdata.Total_US_data.US_Total_Confirmed;
    var Deaths=JSONdata.Total_US_data.US_Total_Deaths;
    var Recovered=JSONdata.Total_US_data.US_Total_Recovered;

    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col lg={4} sm={4}>
              <StatsCard
                bigIcon={<i className="pe-7s-user text-danger" />}
                statsText="Comfirmed"
                statsValue={Comfirmed}
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText={"Updated by "+dataCollectTime}
              />
            </Col>
            <Col lg={4} sm={4}>
              <StatsCard
                bigIcon={<i className="pe-7s-delete-user text-secondary" />}
                statsText="Deaths"
                statsValue={Deaths}
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText={"Updated by "+dataCollectTime}
              />
            </Col>
            <Col lg={4} sm={4}>
              <StatsCard
                bigIcon={<i className="pe-7s-check text-success" />}
                statsText="Recovered"
                statsValue={Recovered}
                statsIcon={<i className="fa fa-clock-o" />}
                statsIconText={"Updated by "+dataCollectTime}
              />
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <Chart />
            </Col>
            <Col md={4}>
              
            </Col>
          </Row>
          <Row>
          </Row>
          <Row>
            <Col md={6}>
              
              <Card
                id="chartActivity"
                title="2014 Sales"
                category="All products including Taxes"
                stats="Data information certified"
                statsIcon="fa fa-check"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataBar}
                      type="Bar"
                      options={optionsBar}
                      responsiveOptions={responsiveBar}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendBar)}</div>
                }
              />
            </Col>

            <Col md={6}>
              <Card
                title="Tasks"
                category="Backend development"
                stats="Updated 3 minutes ago"
                statsIcon="fa fa-history"
                content={
                  <div className="table-full-width">
                    <table className="table">
                      <Tasks />
                    </table>
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
