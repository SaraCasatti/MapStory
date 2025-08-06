// MapComponent.js
import { Map, View } from "ol"
import TileLayer from "ol/layer/Tile"
import "ol/ol.css"
import OSM from "ol/source/OSM"
import { useEffect, useRef } from "react"
import NavBar from "./Navbar"

function MapComponent() {
  const mapRef = useRef()

  useEffect(() => {
    const osmLayer = new TileLayer({
      preload: Infinity,
      source: new OSM(),
    })

    const map = new Map({
      target: mapRef.current,
      layers: [osmLayer],
      view: new View({
        center: [0, 0],
        zoom: 0,
      }),
    })
    return () => map.setTarget(null)
  }, [])

  return (
    <>
    <div
      style={{ height: "88vh", width: "100%"}}
      ref={mapRef}
      className="map-container"
    />
    </>
  )
}

export default MapComponent

