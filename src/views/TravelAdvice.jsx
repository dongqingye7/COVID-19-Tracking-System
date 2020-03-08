import React, { Component } from "react";
import {
    Row,
    Col,
  } from "react-bootstrap";
import Card from "components/Card/Card.jsx";

class TravelAdvice extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Row>
            <Col md={12} style={{paddingLeft: "2"}}>
            
                <h4><b>&nbsp;&nbsp;Widespread sustained (ongoing) transmission and restrictions on entry to the United States</b></h4>
                <Card
                //title="About Coronavirus Disease 2019 (COVID-19)"
                //category="Content source: "
                content={
                  <div>
                    <div className="typo-line">
                        <div class="card-header h4 bg-danger"><b>Widespread sustained (ongoing) transmission and restrictions on entry to the United States</b></div>
                        <p>CDC recommends that travelers avoid all nonessential travel to the following destinations. Entry of foreign nationals from these destinations has been suspended.</p>
                        <ul>
                        <li>China (<a href="https://wwwnc.cdc.gov/travel/notices/watch/novel-coronavirus-china">Level 3 Travel Health Notice</a>)</li>
                        <li>Iran (<a href="https://wwwnc.cdc.gov/travel/notices/watch/coronavirus-iran">Level 3 Travel Health Notice</a>)</li>
                        </ul>
                    </div>

                    <div className="typo-line">
                        <div class="card-header h4 bg-warning"><b>Widespread sustained (ongoing) transmission</b></div>
                            <div class="card-body ">
                                <p>CDC recommends that travelers avoid all nonessential travel to the following destinations:</p>
                            <ul>
                                <li>South Korea (<a href="https://wwwnc.cdc.gov/travel/notices/alert/coronavirus-south-korea">Level 3 Travel Health Notice</a>)</li>
                                <li>Italy (<a href="https://wwwnc.cdc.gov/travel/notices/watch/coronavirus-italy">Level 3 Travel Health Notice</a>)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="typo-line">
                        <div class="card-header h4 bg-info"><b>Sustained (ongoing) community transmission</b></div>
                            <div class="card-body ">
                                <p>CDC recommends that older adults or those who have chronic medical conditions consider postponing travel to the following destinations:</p>
                            <ul>
                               <li>Japan (<a href="https://wwwnc.cdc.gov/travel/notices/watch/coronavirus-japan">Level 2 Travel Health Notice</a>)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="typo-line">
                        <div class="card-header h4 bg-dark"><b>Risk of limited community transmission</b></div>
                            <div class="card-body ">
                                <p>Travelers should practice usual precautions at the following destination:</p>
                            <ul>
                            <li>Hong Kong (<a href="https://wwwnc.cdc.gov/travel/notices/watch/coronavirus-hong-kong">Level 1 Travel Health Notice</a>)</li>                            </ul>
                        </div>
                    </div>

                    <div className="typo-line">
                      
                      <p className="text-muted">
                      Content source: <a href="https://www.cdc.gov/coronavirus/2019-ncov/travelers/index.html">Centers for Disease Control and Prevention (CDC)</a>
                      </p>
                    </div>

                  </div>
                }
              />
          </Col>
        </Row>
        <div class="row ">
          <div class="col-md-12">
            <div class="row-fluid">
              <div class="vc_empty_space col-12 pt-3 pb-1">
                <span class="vc_empty_space_inner"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TravelAdvice;
