import React, {useRef, useEffect, useState} from 'react';
import mapboxgl from 'mapbox-gl';
import './styles.css';

function Map(events) {
  const mapContainer = useRef(null);

  useEffect(()=>{
    mapboxgl.accessToken = "pk.eyJ1IjoiYWxpbWJvIiwiYSI6ImNsYXgwZXczZzAwaHozd29lbTk4YmpidXUifQ.YxDwR_YlD-eL9sb9klagUQ";
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [30.3056504, 59.9429126],
      zoom: 10,
    })


    return ()=>{
      map.remove();
    }
  },[])


  return (<>
    <div className="Map">
      <div className="Map-app" ref={mapContainer}></div>
    </div>
  </>);
}

export default Map;
