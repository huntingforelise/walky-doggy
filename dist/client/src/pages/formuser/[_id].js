import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";
// import mapboxgl from "mapbox-gl";
import React, { useRef, useEffect, useState } from "react";
import * as WalkService from "../../services/WalkService";
// import "./mapbox-gl/dist/mapbox-gl.css";
//mapboxgl.accessToken = process.env.local.MAPBOX_KEY;
var formuser = function () {
    var router = useRouter();
    var _id = router.query._id;
    var _a = useState({}), walkRecord = _a[0], setWalkRecord = _a[1];
    useEffect(function () {
        WalkService.getWalk(_id).then(function (walk) { return setWalkRecord(walk); });
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
    return (React.createElement(React.Fragment, null,
        React.createElement("h2", { className: styles.title }, "Walk Record"),
        React.createElement("div", { className: "record-div-outer" }, walkRecord.poo !== undefined && walkRecord.pee !== undefined ? (React.createElement("div", { className: "record-div" },
            React.createElement("label", null,
                "POO: ",
                walkRecord.poo,
                " "),
            React.createElement("label", null,
                "PEE: ",
                walkRecord.pee,
                " "))) : ("We unfortunately don't have any pee or poo data yet!"))));
};
export default formuser;
//# sourceMappingURL=%5B_id%5D.js.map