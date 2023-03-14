import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";
// import mapboxgl from "mapbox-gl";
import React, { useRef, useEffect, useState } from "react";
import * as WalkService from "../../services/WalkService";
// import "./mapbox-gl/dist/mapbox-gl.css";

//mapboxgl.accessToken = process.env.local.MAPBOX_KEY;

const formuser = () => {
  const router = useRouter();
  const { _id } = router.query;
  const [walkRecord, setWalkRecord] = useState({});

  useEffect(() => {
    WalkService.getWalk(_id).then((walk) => setWalkRecord(walk));
  }, []);

  // /**fetch location */
  // const [coordinates, setCoordinates] = useState({});

  // useEffect(() => {
  //   const getCoordinates = async () => {
  //     const coordinatesServer = await fetchCoordinates();
  //     setCoordinates(coordinatesServer);
  //   };
  //   getCoordinates();
  // }, []);

  // const fetchCoordinates = async () => {
  //   console.log("before fetch coords: " + _id);
  //   const res = await fetch(`http://localhost:3001/locations/${_id}`);
  //   const data = await res.json();
  //   console.log("coordinates " + JSON.stringify(data));
  //   return data;
  // };

  // const mapContainer = useRef(null);
  // const map = useRef(null);
  // const [lng, setLng] = useState(0);
  // const [lat, setLat] = useState(51.4774);
  // const [zoom, setZoom] = useState(14);

  // useEffect(() => {
  //   if (map.current) return; // initialize map only once
  //   map.current = new mapboxgl.Map({
  //     container: mapContainer.current,
  //     style: "mapbox://styles/mapbox/streets-v12",
  //     center: [lng, lat],
  //     zoom: zoom,
  //   });

  //   map.current.on("load", () => {
  //     map.current.addSource("route", {
  //       type: "geojson",
  //       data: {
  //         type: "Feature",
  //         properties: {},
  //         geometry: {
  //           type: "LineString",
  //           coordinates: coordinates,
  //         },
  //       },
  //     });
  //     map.current.addLayer({
  //       id: "route",
  //       type: "line",
  //       source: "route",
  //       layout: {
  //         "line-join": "round",
  //         "line-cap": "round",
  //       },
  //       paint: {
  //         "line-color": "#888",
  //         "line-width": 8,
  //       },
  //     });
  //   });
  // });

  return (
    <>
      <h2 className={styles.title}>Walk Record</h2>
      <div className="record-div-outer">
        {walkRecord.poo !== undefined && walkRecord.pee !== undefined ? (
          <div className="record-div">
            <label>POO: {walkRecord.poo} </label>
            <label>PEE: {walkRecord.pee} </label>
          </div>
        ) : (
          "We unfortunately don't have any pee or poo data yet!"
        )}
      </div>
      {/* <div className="walk-path-outer">
        <div className="walk-path">
          <div>
            <h2 className="h2-walk">Walk Path</h2>
            <div>
              <div ref={mapContainer} className="map-container" />
            </div>
          </div>
          {/* <Image src="/mock-gps-path.png" width="420" height="280" /> */}
      {/* </div>
      </div> */}

      {/* <div className="imgs-container">
        {images.map((image) => {
          return (
            <div>
              <ul>
                <li key={image._id}>
                  <img src={image.url} width="237.6" height="336.8" />
                </li>
              </ul>
            </div>
          );
        })}
      </div> */}
    </>
  );
};

export default formuser;
