import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import mapStyles from '../../controller/mapstyle';
const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: -12.120926,
    lng: -77.029679,
};

export default function Maps() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ''
    })

    const [map, setMap] = React.useState<google.maps.Map | null>(null);

    const onLoad = React.useCallback(function callback(map: google.maps.Map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map: google.maps.Map) {
        setMap(null)
    }, [])
    return isLoaded ? (

        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={{ styles: mapStyles }} 
        >
            <></>
        </GoogleMap>
    ) : <></>
}
