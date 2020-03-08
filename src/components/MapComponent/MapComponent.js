import JSONdata from "../../data.json";
import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { Card } from "components/Card/Card.jsx";

var US_location = JSONdata.US_location;

export class MapComponent extends Component {

  displayMarkers = () => {
    return US_location.map((location, index) => {
      return <Marker key={index} id={index} position={{
       lat: location.center.lat,
       lng: location.center.lng
     }} />
    })
  }


  render() {
    const coords = { lat: 37.09, lng: -95.712 };
    var dataCollectTime=JSONdata.Date;
    return (
      <Card
      statsIcon="fa fa-history"
      id="chartHours"
      title="Confirmed Cases in US"
      category={"Updated by "+dataCollectTime}
      content={
        <div className="ct-chart">
          <Map 
            initialCenter={coords}
            google={this.props.google} 
            zoom={4}
            style={{width: "100%", height: "100%", position: "relative"}}
          >
            {this.displayMarkers()}
          </Map>
        </div>
      }
    />

    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCD66iXvfQg8hp7BPTdsXxIgG1S_6EK998")
})(MapComponent)