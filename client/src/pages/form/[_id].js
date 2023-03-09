import { useRouter } from "next/router";
import Head from "next/head";
import { useState ,useEffect} from "react";
import AddRecord from "../../../components/AddRecord";
import originalService from "./../../services/OriginalService";

const form = () => {
  const router = useRouter();
  const { _id } = router.query;

  /**record */
  const [record, setRecord] = useState(false);

  const fetchRecord = async (_id) => {
    return await originalService.fetchRecord(_id);
  };

  const addRecord = async (record) => {
    await originalService.addRecord(record);
  };

  /* collect geo location data*/
  const [location, setLocation] = useState({});

  useEffect(() => {
    console.log("useEffect Location: " + JSON.stringify(location));
    const postLocation = async () => {
      const locationServer = await addLocation(location);
      //setLocation(eventsServer);
    };
    if(JSON.stringify(location) !== "{}") postLocation();
  }, [location]);

  const fetchLocation = async () => {
    return await originalService.addRecord(_id)
  };

  const addLocation = async (location) => {
    await originalService.addLocation(location);
  };

  //const coordinates =[];
  const startTracking = () => {
    navigator.geolocation.watchPosition(
      (data) => {
        console.log("New Data" + JSON.stringify(data));
        setLocation({
          eventId: _id,
          coordinates: [data.coords.longitude, data.coords.latitude],
        });
        // coordinates.push([data.coords.longitude,data.coords.latitude]);
        // window.localStorage.setItem("coordinates",JSON.stringify(coordinates));
      },
      (error) => console.log(error),
      {
        enableHighAccuracy: true,
      }
    );
  };

  const stopTracking = () => {
    return;
  };

  /* img uploader */
  const [imageSrc, setImageSrc] = useState();
  const [uploadData, setUploadData] = useState();

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

    formData.append("upload_preset", "walk-history");

    const data = await fetch(
      "https://api.cloudinary.com/v1_1/dk8ihjq0m/image/upload",

      {
        method: "POST",
        body: formData,
      }
    ).then((res) => res.json());

    setImageSrc(data.secure_url);
    setUploadData(data);
    console.log("event: " + _id);
    addImage(data, _id);
  };

  const addImage = async (data, id) => {
    fetch("http://localhost:3001/images", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ eventId: id, url: data.secure_url }),
    }).then((res) => console.log("res: " + JSON.stringify(res)));
  };

  return (
    <>
      <Head>
        <title>Walky Doggy | walk form</title>
      </Head>
      <p>walk: {_id}</p>
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
