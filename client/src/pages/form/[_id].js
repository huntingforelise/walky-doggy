import { useRouter } from "next/router";
import Head from "next/head";
import { useState, useEffect } from "react";
import AddRecord from "../../../components/AddRecord";
import * as WalkService from "../../services/WalkService";

const form = () => {
  console.log("this is within form");
  const router = useRouter();
  const { _id } = router.query;
  const [imageSrc, setImageSrc] = useState();
  const [uploadData, setUploadData] = useState();
  // const [location, setLocation] = useState([]);

  const addRecord = async (record) => {
    await WalkService.updateWalkRecord(record);
  };

  const addImage = async (data, id) => {
    await WalkService.updateWalkImage(data, id);
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

  const handleOnChange = (changeEvent) => {
    const reader = new FileReader();
    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
      setUploadData(undefined);
    };
    reader.readAsDataURL(changeEvent.target.files[0]);
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === "file"
    );
    const formData = new FormData();
    for (const file of fileInput.files) {
      formData.append("file", file);
    }
    formData.append("upload_preset", "geixym3t");
    const data = await fetch(
      "https://api.cloudinary.com/v1_1/dk8ihjq0m/image/upload",
      { method: "POST", body: formData }
    ).then((res) => res.json());

    setImageSrc(data.secure_url);
    setUploadData(data);
    console.log("event: " + _id);
    addImage(data, _id);
  };

  return (
    <>
      <Head>
        <title>Walky Doggy | walk form</title>
      </Head>
      <div className="addform">
        <AddRecord onAdd={addRecord} eventId={_id} />
      </div>

      <div className="gpsouter">
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
      </div>
      <div className="upload-container-outer">
        <div className="upload-container">
          <form
            className="upload-form"
            method="post"
            onChange={handleOnChange}
            onSubmit={handleOnSubmit}
          >
            <div>
              <label className="uploadlabel">Upload Photo</label>
            </div>
            <p>
              <input type="file" name="file" />
            </p>

            <img src={imageSrc} />

            {imageSrc && !uploadData && (
              <p>
                <button>Upload Files</button>
              </p>
            )}

            {uploadData && (
              <code>
                <pre>{JSON.stringify(uploadData, null, 2)}</pre>
              </code>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default form;
