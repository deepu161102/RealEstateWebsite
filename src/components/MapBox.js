import React from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, {
  Marker,
  NavigationControl,
  Popup,
  FullscreenControl,
  GeolocateControl,
 
} from "react-map-gl";

import {Fade} from 'react-awesome-reveal'
import { useState, useEffect, useRef } from "react";
import PopupCard from "./PopupCard";





function MapBox({properties}) {
  console.log({properties});

  const [lng, setLng] = useState(null);
  const [lat, setLat] = useState(null);
  const [viewport, setViewport] = useState({});
  const [popupInfo, setPopupInfo] = useState(null)
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setViewport({
        ...viewport,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
        zoom: 4,
      });
    });
  }, []);
  console.log({viewport});
  return (

    <Fade delay={600} triggerOnce >

      <div className=" rounded-3xl px-8 h-[40vh] lg:h-[70vh] mt-8">
        {/* <div  id="map" className="map-container h-[80vh] rounded-3xl pl-8" /> */}
        {viewport.latitude && viewport.longitude && (
          <Map
          mapboxAccessToken={"pk.eyJ1Ijoic2hheWFuY3liZXIiLCJhIjoiY2thYnpkbzZoMWJvZjJzbWs1NTF1ZWdjYiJ9.xgAjG8iToZXzqPPHLiD9Kg"}
          style={{
            
            
            width:"100%"
            
            // border: "2px solid red",
          }}
          initialViewState={viewport}
          
          
          mapStyle="mapbox://styles/mapbox/light-v11"
        > 
          {properties.map((item, key)=>{
  
            return <Marker longitude={item.lng} latitude={item.lat} key={key} onClick={e =>{
              e.originalEvent.stopPropagation();
              setPopupInfo(item)
              
            }}/>
          })}

          {popupInfo && (
            <Popup closeButton={false} maxWidth="1200px" longitude={Number(popupInfo.lng)}
            latitude={Number(popupInfo.lat)}
            onClose={() => setPopupInfo(null)}>
              <PopupCard item={popupInfo}>

              </PopupCard>

            </Popup>
          )}
          <NavigationControl position="bottom-right" />
          <FullscreenControl />
  
          <GeolocateControl />
        </Map>
        )}
      
      </div>
    </Fade>
  );
}

export default MapBox;
