import { useRouter } from "next/router";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import mapboxgl from "mapbox-gl";
import React, { useRef, useEffect, useState } from "react";
import "./mapbox-gl/dist/mapbox-gl.css";

//mapboxgl.accessToken = process.env.local.MAPBOX_KEY;

const formuser = () => {
  console.log("this is within formuser");
  const router = useRouter();
  const { _id } = router.query;

  /**fetch location */
  const [coordinates, setCoordinates] = useState({});

  useEffect(() => {
    const getCoordinates = async () => {
      const coordinatesServer = await fetchCoordinates();
      setCoordinates(coordinatesServer);
    };
    getCoordinates();
  }, []);

  const fetchCoordinates = async () => {
    console.log("before fetch coords: " + _id);
    const res = await fetch(`http://localhost:3001/locations/${_id}`);
    const data = await res.json();
    console.log("coordinates " + JSON.stringify(data));
    return data;
  };

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(0);
  const [lat, setLat] = useState(51.4774);
  const [zoom, setZoom] = useState(14);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.on("load", () => {
      map.current.addSource("route", {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates: coordinates,
          },
        },
      });
      map.current.addLayer({
        id: "route",
        type: "line",
        source: "route",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#888",
          "line-width": 8,
        },
      });
    });
  });

  return (
    <>
      <Head>
        <title>Walky Doggy | view walk</title>
      </Head>
      <p>walk: {_id}</p>
      <h1 className={styles.title}>Walk Record</h1>

      <div className="record-div-outer">
        <div className="record-div">
          <label>POO: {records[0]?.poo.toString()} </label>
          <label>PEE: {records[0]?.pee.toString()} </label>
        </div>
      </div>

      <div className="walk-path-outer">
        <div className="walk-path">
          <div>
            <h2 className="h2-walk">Walk Path</h2>
            <div>
              <div ref={mapContainer} className="map-container" />
            </div>
          </div>
          {/* <Image src="/mock-gps-path.png" width="420" height="280" /> */}
        </div>
      </div>

      <div className="imgs-container">
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
      </div>
    </>
  );
};

export default formuser;
