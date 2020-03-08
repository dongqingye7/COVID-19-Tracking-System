import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import DatePicker from 'react-date-picker';
import Moment from 'moment';
import { Document, Page } from 'react-pdf';

class WHOReport extends Component {
    constructor(props) {
      super(props);
      this.state = {
        date: new Date(),
        year: new Date().getFullYear(),
        month: new Date().getMonth()+1,
        day: new Date().getDate(),
        numPages: null,
        pageNumber: 1,
      }
    }
  
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  onChange = date => this.setState({
    date: date,
    year: date.getFullYear(),
    month: date.getMonth()+1,
    day: date.getDate()
  })
    
  render() {
    const { pageNumber, numPages } = this.state;
    Moment.locale('en');
    var str=Moment(this.state.date).format('YYYYMMDD');
    var url="https://www.who.int/docs/default-source/coronaviruse/situation-reports/"+str+"-sitrep-47-covid-19.pdf"
    return (
      <div className="content">
        {console.log(url)}
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                content={
                  <div>
                    <Document
                      file={url}
                      onLoadSuccess={this.onDocumentLoadSuccess}
                    >
                      <Page pageNumber={pageNumber} />
                    </Document>
                    <p>Page {pageNumber} of {numPages}</p>
                  </div>
                }
              />
            </Col>
            <Col md={4}>
              <label>Please select the date:<br></br>
                <DatePicker
                  onChange = {this.onChange}
                  value={this.state.date}
                />
              </label>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default WHOReport;
