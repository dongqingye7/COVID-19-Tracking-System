import JSONdata from "../../data.json";
import React, { Component } from "react";
import { Card } from "components/Card/Card.jsx";
import Map from './Map.js';

var US_location = JSONdata.US_location;

export class MapComponent extends Component {
  render() {
    const coords = { lat: 37.09, lng: -95.712 };
    var dataCollectTime = JSONdata.Date;
    return (
      <Card
        statsIcon="fa fa-history"
        id="chartHours"
        title="Confirmed Cases in US"
        category={"Updated by " + dataCollectTime}
        content={
          <div className="ct-chart">
            <Map
              center={coords}
              zoom={4}
              places={US_location}
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCD66iXvfQg8hp7BPTdsXxIgG1S_6EK998"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `800px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            >
            </Map>
          </div>
        }
      />
    );
  }
}

export default (MapComponent);
