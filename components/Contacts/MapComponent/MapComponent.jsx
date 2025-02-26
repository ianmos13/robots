"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import styles from "./MapComponent.module.scss";
import GeoIcon from "@/public/images/icons/geo.svg";

const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });
const useMap = dynamic(() => import("react-leaflet").then((mod) => mod.useMap), { ssr: false });

function CustomMarker({ position }) {
  const [L, setL] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("leaflet").then((leaflet) => {
        setL(leaflet);
      });
    }
  }, []);

  if (!L) return null; 

  const customIcon = new L.DivIcon({
    className: styles.customMarker,
    html: `
      <div class="custom-marker">
        <img src="${GeoIcon.src}" alt="Гео-иконка" width="30" height="40" />
        <p>Офис и демозал г.Москва</p>
      </div>`,
    iconSize: [30, 40],
    iconAnchor: [15, 40],
  });

  return (
    <Marker position={position} icon={customIcon}>
      {/* <Popup>Офис и демозал г.Санкт-Петербург</Popup> */}
    </Marker>
  );
}

function MapComponent() {
  return (
    <div className={styles.container}>
      <MapContainer center={[55.255829, 37.427627]} zoom={10} className={styles.map}>
      <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution="&copy; OpenStreetMap contributors &copy; CARTO"
        />
        <CustomMarker position={[55.159640, 37.421847]} />
      </MapContainer>
    </div>
  );
}

export default dynamic(() => Promise.resolve(MapComponent), { ssr: false });
