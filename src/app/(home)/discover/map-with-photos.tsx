"use client";

// Internal dependencies - UI Components
import Mapbox from "@/components/map";
import { Blurhash } from "react-blurhash";
import BlurImage from "@/components/blur-image";
import CameraLoader from "@/components/camera-loader";

// Hooks & Types
import type { MapboxProps } from "@/components/map";
import { useRouter } from "next/navigation";
import { photoMetadata1, photoMetadata2 } from "@/lib/helper";
import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from '@react-google-maps/api'
import { useCallback, useEffect, useState } from "react";

interface MarkerData {
  id: number;
  lat: number;
  lng: number;
  // Add other properties as needed (e.g., label, imageUrl)
  imageUrl?: string;
}

const containerStyle = {
  width: "100vw",
  height: "100vh",
};

const center = {
  lat: 19.3003555,
  lng: 75.0220445,
};

const MapWithPhotos = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: '', // Use environment variable
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [markers, setMarkers] = useState<MarkerData[]>([]); // Initialize as empty array
  const [bounds, setBounds] = useState<google.maps.LatLngBounds | null>(null);

  useEffect(() => {
    // Fetch or set your marker data here.  This is just an example:
    const fetchedMarkers: MarkerData[] = [
      { id: 1, lat: 34.658875, lng: 135.50586, imageUrl: 'https://photograph.ecarry.uk/cdn-cgi/image/width=1920/https://photograph.ecarry.uk/photos/IMG_0183_title.jpg' },
      { id: 2, lat: 40.712776, lng: -74.005974, imageUrl: 'https://photograph.ecarry.uk/cdn-cgi/image/width=1920/https://photograph.ecarry.uk/photos/IMG_0183_title.jpg' },
      // ... more markers
    ];
    setMarkers(fetchedMarkers)
  }, [])

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback() {
    setMap(null);
  }, []);

  useEffect(() => {
    if (isLoaded && map && markers.length > 0) {
      const newBounds = new window.google.maps.LatLngBounds();
      markers.forEach((marker) => {
        newBounds.extend({ lat: marker.lat, lng: marker.lng });
      });
      setBounds(newBounds);
      map.fitBounds(newBounds);
    }
  }, [isLoaded, map, markers]);

  const mapOptions = {
    clickableIcons: false,
    minZoom: 0,
  };

  const markerIcon = (imageUrl: string) => {
    return {
      url: "", // Important: leave url empty for custom markers
      anchor: new window.google.maps.Point(25, 25), // Center the marker (adjust if needed)
      // The createMarker function is where the magic happens
      createMarker: (marker: any) => {
        const div = document.createElement('div');
        div.style.width = '50px'; // Set marker width
        div.style.height = '50px'; // Set marker height
        div.style.borderRadius = '50%'; // Make it circular
        div.style.overflow = 'hidden'; // Hide image overflow
        div.style.border = '2px solid white'; // Add white border (optional)
        div.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)'; // Add shadow (optional)


        const img = document.createElement('img');
        img.src = imageUrl;
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover'; // Ensure image covers the circle

        div.appendChild(img);
        marker.setIcon({ // Set the icon properties
          url: div.toDataURL(), // Use a blank url
          scaledSize: new window.google.maps.Size(50, 50),
        });
        return marker;
      }
    };
  };
  const [infoWindowOpen, setInfoWindowOpen] = useState(false);


  const [selectedMarker, setSelectedMarker] = useState<MarkerData | null>(null);

  const handleMarkerClick = (marker: MarkerData) => {
    setSelectedMarker(marker);
    setInfoWindowOpen(true);
  };

  const closeInfoWindow = () => {
    setInfoWindowOpen(false);
    setSelectedMarker(null);
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center} // You might not need this
      options={mapOptions}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {markers.map((marker) => (
        <Marker
          key={marker.id}
          position={{ lat: marker.lat, lng: marker.lng }}
          icon={{
            url: marker.imageUrl || 'default_marker_url', // Use marker's imageUrl or a default
            scaledSize: new window.google.maps.Size(50, 50),
          }}
          onClick={() => handleMarkerClick(marker)}
        >
          {selectedMarker === marker && infoWindowOpen && (
            <InfoWindow onCloseClick={closeInfoWindow} position={{ lat: marker.lat, lng: marker.lng }}>
              <div>
               {/*  <BlurImage
     

                  src={marker.imageUrl || ''}
                  blurhash={photoMetadata1.blurData}
                  height={100}
                  width={100}
                  alt="test" /> */}
              </div>
            </InfoWindow>
          )}
        </Marker>
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default MapWithPhotos;
