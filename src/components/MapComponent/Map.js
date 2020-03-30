import React, {Fragment} from "react";
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  Circle
} from "react-google-maps";

const Map = props => {
    var options1={
        strokeColor: 'orange',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
    }
    var options2={
        strokeColor: 'red',
        strokeOpacity: 1,
        strokeWeight: 1,
        fillColor: '#A52A2A',
        fillOpacity: 0.5,
    }
    var options3={
      strokeColor: '#B22222',
      strokeOpacity: 1,
      strokeWeight: 2,
      fillColor: '#A52A2A',
      fillOpacity: 0.5,
  }
  var options4={
    strokeColor: '#800000',
    strokeOpacity: 1,
    strokeWeight: 3,
    fillColor: '#A52A2A',
    fillOpacity: 0.5,
}
    var places=props.places;
    places = places.filter((place) => place.Confirmed>0);
    
    return (
      <GoogleMap
        defaultZoom={props.zoom}
        defaultCenter={props.center}
      >
        
        
        {places.map((place,index) => {
            place.radius=place.Confirmed;
            place.options=options1;
            if(place.Confirmed>1000){
              place.options=options2;
            }

            if(place.Confirmed>5000){
                place.radius=place.Confirmed/10;
                place.options=options3;
            } 
            if(place.Confirmed>10000){
              place.radius=place.Confirmed/100;
              place.options=options4;
          }  
          return (
            <Fragment key={index}>
              
              <Circle
                defaultCenter={{
                  lat: parseFloat(place.center.lat),
                  lng: parseFloat(place.center.lng)
                }}
                radius={place.radius*125}
                options={place.options}
              />
            </Fragment>
          );
        })}
      </GoogleMap>
    );
}

export default withScriptjs(withGoogleMap(Map));
