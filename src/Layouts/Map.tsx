import GoogleMapReact from "google-map-react"
import { FaMapMarkerAlt } from "react-icons/fa";
interface MapMarkerProps {
    lat: number;
    lng: number;
    
}

interface MapProp{
    lat:number,
    lng:number
}
const MapMarker: React.FC<MapMarkerProps> = ({ lat, lng }) => (
    <div
        data-lat={lat}
        data-lng={lng}
        style={{
            position: 'absolute',
            transform: 'translate(-50%, -50%)', // Center the marker

        }}

    >
        <p> <FaMapMarkerAlt size={40} color="red" /> </p>
    </div>
);
const Map = ({lat,lng}:MapProp) => {
    const location = {
        
        center: {
            lat: lat,
            lng: lng
        },
        zoom: 11
    }
    return (
        <>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={location.center}
                defaultZoom={location.zoom}

            >


                <MapMarker
                    lat={lat}
                    lng={lng}
                  
                />

            </GoogleMapReact>
        </>
    )
}

export default Map;
