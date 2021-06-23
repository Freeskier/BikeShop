import React, { useEffect, useRef, useState } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import Geocode from 'react-geocode'
import 'date-fns'
import { Marker } from '@react-google-maps/api';
import { InfoWindow } from '@react-google-maps/api';
import AddShopDialog from '../Dialogs/AddShopDialog'

Geocode.setApiKey("AIzaSyDv86ky4oE787NbsoVLyiw2pfLlkrawmwg")
Geocode.setLanguage('pl')
Geocode.setRegion("pl")
Geocode.setLocationType("ROOFTOP");


const containerStyle = {
  height: '600px',
};

const center = {
  lat: 52.229676,
  lng: 21.012229
};


const ShopMap = ({addShopMode, setAddShopMode}) => {

  

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDv86ky4oE787NbsoVLyiw2pfLlkrawmwg"
  })
  const [showAddShopDialog, setShowAddShopDialog] = useState(false);

  const[markers, setMarkers] = React.useState([]);
  const[actualMarker, setActualMarkers] = React.useState(0);
  const[showInfo, setShowInfo] = React.useState(false);
  const[address, setAddress] = React.useState("")
  const [map, setMap] = React.useState(null)
  const [position, setPosition] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  
  return isLoaded ? (
    <>
      <AddShopDialog open={showAddShopDialog} onClose={()=>setShowAddShopDialog(false)} adress={address} position={position}/>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{
          lat: 52.229676,
          lng: 21.012229
        }}
        zoom={12}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={(event) =>{
          if(!addShopMode)
          {
            setShowInfo(true)
            setMarkers(current => [...current,{
              lat: event.latLng.lat(),
              lng: event.latLng.lng(),
              time: new Date().toISOString()
            }
            ])
            setPosition({
              lat: event.latLng.lat(),
              lng: event.latLng.lng()})
            setShowAddShopDialog(true);
            Geocode.fromLatLng( event.latLng.lat(), event.latLng.lng()).then(
              (response) => {
                const address1 = response.results[0].formatted_address;
                setAddress(address1)
              })
            }
        }}
      >
        
         
        {markers.map((marker, index) => (
          <Marker
            key={`${marker.lat}-${marker.lng}`}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={()=>setShowInfo(index)}
            onRightClick={(event) =>{
                setActualMarkers(event.marker)
                setMarkers(current => [...current,{
                  lat: event.latLng.lat(),
                  lng: event.latLng.lng(),
                  time: new Date().toISOString()
                }
                ])
              }}
            >
              {(showInfo === index) &&
              <InfoWindow
                key={`${marker.lat}-${marker.lng}`}
                visible={true}>
                <div>asdasd</div>
            </InfoWindow>}
            </Marker>

        ))}
        <></>
      </GoogleMap>
  </>) : <></>
  
}

export default ShopMap;