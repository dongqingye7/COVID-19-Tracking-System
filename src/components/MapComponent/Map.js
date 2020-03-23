import React, {Fragment} from "react";
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  Circle
} from "react-google-maps";

const Map = props => {
    var options1={
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
    }
    var options2={
        strokeColor: '#A52A2A',
        strokeOpacity: 1,
        strokeWeight: 4,
        fillColor: '#A52A2A',
        fillOpacity: 0.5,
    }

    return (
      <GoogleMap
        defaultZoom={props.zoom}
        defaultCenter={props.center}
      >
        {props.places.map((place,index) => {
            place.radius=place.Confirmed;
            place.options=options1;
            if(place.Confirmed>10000){
                place.radius=place.Confirmed/10;
                place.options=options2;
            }  
          return (
            <Fragment key={index}>
              
              <Circle
                defaultCenter={{
                  lat: parseFloat(place.center.lat),
                  lng: parseFloat(place.center.lng)
                }}
                radius={place.radius*200}
                options={place.options}
              />
            </Fragment>
          );
        })}
      </GoogleMap>
    );
}

export default withScriptjs(withGoogleMap(Map));
