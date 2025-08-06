// MarkerPopupMap.js
import { toStringHDMS } from "ol/coordinate.js"
import Feature from "ol/Feature.js"
import Point from "ol/geom/Point.js"
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer.js"
import Map from "ol/Map"
import "ol/ol.css"
import Overlay from "ol/Overlay"
import { toLonLat } from "ol/proj.js"
import { Vector as VectorSource } from "ol/source.js"
import OSM from "ol/source/OSM.js"
import { Icon, Style } from "ol/style.js"
import View from "ol/View"
import { useEffect, useRef } from "react"
import styled from "styled-components"


const Popup = styled.div`
  background-color: var(--content-bg);
  padding: var(--space-sm);
`

const MarkerPopupMap = () => {
  const mapRef = useRef()
  const popupRef = useRef()

  const osm = new TileLayer({
      preload: Infinity,
      source: new OSM(),
    })

  const iconFeature = new Feature({
    geometry: new Point([0, 0]),
    name: "Null Island",
    population: 4000,
    rainfall: 500,
  })

  const iconStyle = new Style({
    image: new Icon({
      anchor: [0.5, 46],
      anchorXUnits: "fraction",
      anchorYUnits: "pixels",
      src: "https://openlayers.org/en/latest/examples/data/icon.png",
    }),
  })

  iconFeature.setStyle(iconStyle)

  const vectorSource = new VectorSource({
    features: [iconFeature],
  })

  const vectorLayer = new VectorLayer({
    source: vectorSource,
  })

  useEffect(() => {
    const overlay = new Overlay({
      element: popupRef.current,
      autoPan: {
        animation: {
          duration: 250,
        },
      },
    })

    const map = new Map({
      target: mapRef.current,
      layers: [osm, vectorLayer],
      view: new View({
        center: [0, 0],
        zoom: 3,
      }),
      overlays: [overlay],
    })

    /**
     * Add a click handler to the map to render the popup.
     */

    map.on("singleclick", function (evt) {
      // Get Coordinates of click
      // usar para guardar um novo ponto 
      // e uma modificada para pegar um ponto salvo
      const coordinate = evt.coordinate;
      const hdms = toStringHDMS(toLonLat(coordinate));
      
      console.log("coordenadas", coordinate)
      // Show popup at clicked position
      overlay.setPosition(coordinate);

      if (popupRef.current) {
        popupRef.current.innerHTML = `<p>You clicked here:</p><code>` + hdms + `</code>`;
      }
      
      overlay.setPosition(coordinate)
    })

    return () => map.setTarget(undefined)
  }, [])

  return (
    <div>
      <div ref={mapRef} style={{ width: "100%", height: "88vh" }} />
      <div ref={popupRef} className="ol-popup" style={popupStyle} />
    </div>
  )
}

const popupStyle = {
  position: "absolute",
  backgroundColor: "white",
  padding: "5px",
  borderRadius: "5px",
  border: "1px solid black",
  transform: "translate(-50%, -100%)",
  pointerEvents: "none",
  width: "220px",
  color: "black"
};

export default MarkerPopupMap
