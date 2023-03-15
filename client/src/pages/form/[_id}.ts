import { useRouter } from "next/router";
import React, { useState } from "react";
import * as WalkService from "../../services/WalkService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface WalkRecord {
  eventId: string;
  pee: boolean;
  poo: boolean;
}

const form = () => {
  const router = useRouter();
  const { _id } = router.query;
  const [image, setImage] = useState<File | null>(null);
  const [pee, setPee] = useState<boolean>(false);
  const [poo, setPoo] = useState<boolean>(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    addRecord({ eventId: _id as string, pee, poo });
    setPee(false);
    setPoo(false);
    router.push("/walkeraccount");
  };

  const addRecord = async (record: WalkRecord): Promise<void> => {
    const output = await WalkService.updateWalkRecord(record);
    if (!output.error) {
      const successToast = () => toast("Thanks for updating this walky!");
      successToast();
    } else {
      const errorToast = () => toast(output.res);
      errorToast();
    }
  };

  const addImage = async (url: string, id: string): Promise<void> => {
    const output = await WalkService.updateWalkImage(url, id);
    if (!output.error) {
      const successToast = () => toast("Thanks for updating this walky!");
      successToast();
    } else {
      const errorToast = () => toast(output.res);
      errorToast();
    }
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

  const uploadImage = (): void => {
    if (image) {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "geixym3t");
      data.append("cloud_name", "dljhj1szz");
      fetch("https://api.cloudinary.com/v1_1/dljhj1szz/image/upload", {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => addImage(data.url, _id as string))
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      <div className="addform">
        <form className="add-form" onSubmit={onSubmit}>
          <div className="submit-form-title">
            <h1>POO/PEE RECORD</h1>
          </div>
          <div>
            <div>
              <div className="submit-form-control">
                <label className="adjustfont">PEE</label>
                <input
                  type="checkbox"
                  name="pee"
                  value={pee}
                  onChange={(e) => setPee(e.target.checked)}
                />
              </div>
              <div>
                <div className="submit-form-control">
                  <label>POO</label>
                  <input
                    type="checkbox"
                    name="poo"
                    value={poo}
                    onChange={(e) => setPoo(e.target.checked)}
                  />
                </div>
              </div>
            </div>
            <div className="submit-div">
              <input type="submit" value="Submit" className="btn-record" />
            </div>
          </div>
        </form>
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
        </div>
      </div>
      </>
  );
};

export default form;



