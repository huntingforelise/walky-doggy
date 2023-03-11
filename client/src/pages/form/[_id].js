import { useRouter } from "next/router";
import Head from "next/head";
import { useState, useEffect } from "react";
import * as WalkService from "../../services/WalkService";
import UpdateWalkRecord from "../../../components/UpdateWalkRecord";

const form = () => {
  console.log("this is within form");
  const router = useRouter();
  const { _id } = router.query;
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  // const [imageSrc, setImageSrc] = useState("");
  // const [uploadData, setUploadData] = useState();
  // const [location, setLocation] = useState([]);

  const addRecord = async (record) => {
    await WalkService.updateWalkRecord(record);
    //there needs to be a successmessage
  };

  const addImage = async (url, id) => {
    console.log("url in add image", url);
    const output = await WalkService.updateWalkImage(url, id);
    console.log(output);
  };

  // const addLocation = async (location, id) => {
  //   await WalkService.updateWalkLocation(location, id);
  // };

  // useEffect(() => {
  //   console.log("useEffect Location: " + JSON.stringify(location));
  //   const postLocation = async () => {
  //     const locationServer = await addLocation(location, _id);
  //     //setLocation(eventsServer);
  //   };
  //   if (JSON.stringify(location) !== "{}") postLocation();
  // }, [location]);

  // const startTracking = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.watchPosition(function (position) {
  //       console.log("Latitude is :", position.coords.latitude);
  //       console.log("Longitude is :", position.coords.longitude);
  //     });
  //   }
  //   navigator.geolocation.watchPosition(
  //     (data) => {
  //       setLocation([data.coords.longitude, data.coords.latitude]);
  //       // coordinates.push([data.coords.longitude,data.coords.latitude]);
  //       // window.localStorage.setItem("coordinates",JSON.stringify(coordinates));
  //     },
  //     (error) => console.log(error),
  //     {
  //       enableHighAccuracy: true,
  //     }
  //   );
  // };

  // const stopTracking = () => {
  //   return;
  // };

  // const handleOnChange = (changeEvent) => {
  //   const reader = new FileReader();
  //   reader.onload = function (onLoadEvent) {
  //     setImageSrc(onLoadEvent.target.result);
  //     setUploadData(undefined);
  //   };
  //   reader.readAsDataURL(changeEvent.target.files[0]);
  // };

  // const handleOnSubmit = async (event) => {
  //   event.preventDefault();
  //   const form = event.currentTarget;
  //   console.log();
  //   const fileInput = Array.from(form.elements).find(
  //     ({ name }) => name === "file"
  //   );
  //   const formData = new FormData();
  //   for (const file of fileInput.files) {
  //     formData.append("file", file);
  //   }
  //   formData.append("upload_preset", "geixym3t");
  //   const data = await fetch(
  //     "https://api.cloudinary.com/v1_1/dljhj1szz/image/upload",
  //     { method: "POST", body: JSON.stringify(formData) }
  //   ).then((res) => res.json());

  //   // setImageSrc(data.secure_url);
  //   setUploadData(data);
  //   console.log(data.secure_url);
  //   console.log("event: " + _id);
  //   addImage(data.secure_url, _id);
  // };

  const uploadImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "geixym3t");
    data.append("cloud_name", "dljhj1szz");
    fetch("https://api.cloudinary.com/v1_1/dljhj1szz/image/upload", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => addImage(data.url, _id))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="addform">
        <UpdateWalkRecord onAdd={addRecord} eventId={_id} />
      </div>

      {/* <div className="gpsouter">
        <div className="gpsbutton">
          <div>
            <label className="gpslabel">GPS TRACKING</label>
          </div>
          <button
            id="start"
            className="btn-record"
            onClick={() => startTracking()}
          >
            Start
          </button>
          <button
            id="stop"
            className="btn-record"
            onClick={() => stopTracking()}
          >
            Stop
          </button>
        </div>
      </div> */}
      <div className="upload-container-outer">
        <div className="upload-container">
          <div>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            ></input>
            <button onClick={uploadImage}>Upload</button>
          </div>
          <div>
            <img src={url} />
          </div>
        </div>
      </div>
    </>
  );
};

export default form;
