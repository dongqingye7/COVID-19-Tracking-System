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
import { Grid, Row, Col, Image } from "react-bootstrap";
import Card from "components/Card/Card.jsx";

class AboutVirus extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                //title="About Coronavirus Disease 2019 (COVID-19)"
                //category="Content source: "
                content={
                  <div>
                    <div className="typo-line">
                       <Image src="https://dshs.texas.gov/uploadedImages/Content/Consumer_and_External_Affairs/coronavirus/banner.png" responsive/>
                      <h3><b>What is a Coronavirus (COVID-19)?</b></h3>
                      <br></br>
                      <p>Coronavirus disease 2019 (COVID-19) is a respiratory illness
that can spread from person to person. The virus that causes
COVID-19 is a novel coronavirus that was first identified during
an investigation into an outbreak in Wuhan, China.</p>
                      <p>On February 11, 2020 the World Health Organization announced an official name for the disease that is causing the 2019 novel coronavirus outbreak, first identified in Wuhan China. The new name of this disease is coronavirus disease 2019, abbreviated as COVID-19. In COVID-19, ‘CO’ stands for ‘corona,’ ‘VI’ for ‘virus,’ and ‘D’ for disease. Formerly, this disease was referred to as “2019 novel coronavirus” or “2019-nCoV”.</p>
                      <p>There are many types of human coronaviruses including some that commonly cause mild upper-respiratory tract illnesses. COVID-19 is a new disease, caused be a novel (or new) coronavirus that has not previously been seen in humans. The name of this disease was selected following the World Health Organization (WHO) best practiceexternal icon for naming of new human infectious diseases.</p>
                    
                    </div>

                    <div className="typo-line">
                      <h3><b>Source and Spread of the Virus</b></h3>
                      <br></br>
                      <p>Coronaviruses are a large family of viruses that are common in people and many different species of animals, including camels, cattle, cats, and bats. Rarely, animal coronaviruses can infect people and then spread between people such as with MERS-CoV, SARS-CoV, and now with this new virus (named SARS-CoV-2). </p>
                      <p>The SARS-CoV-2 virus is a betacoronavirus, like MERS-CoV and SARS-CoV.  All three of these viruses have their origins in bats. The sequences from U.S. patients are similar to the one that China initially posted, suggesting a likely single, recent emergence of this virus from an animal reservoir.</p>                      
                      <p>Early on, many of the patients at the epicenter of the outbreak in Wuhan, Hubei Province, China had some link to a large seafood and live animal market, suggesting animal-to-person spread. Later, a growing number of patients reportedly did not have exposure to animal markets, indicating person-to-person spread. Person-to-person spread was subsequently reported outside Hubei and in countries outside China, including in the United States. Some international destinations now have apparent community spread with the virus that causes COVID-19, as do some parts of the United States. Community spread means some people have been infected and it is not known how or where they became exposed. Learn what is known about the spread of this newly emerged coronaviruses.</p>
                    </div>


                    <div className="typo-line">
                      
                      <p className="text-muted">
                      Content source: <a href="https://www.cdc.gov/coronavirus/2019-ncov/summary.html">Centers for Disease Control and Prevention (CDC)</a>
                      </p>
                    </div>

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

export default AboutVirus;
