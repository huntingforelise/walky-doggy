import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import * as WalkService from "../../services/WalkService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

interface WalkRecord {
  eventId: string;
  pee?: boolean;
  poo?: boolean;
}

const form = (): JSX.Element => {
  const router = useRouter();
  const { _id } = router.query;
  const [image, setImage] = useState<File | null>(null);
  const [fullWalk, setFullWalk] = useState({});

  useEffect(() => {
    WalkService.getWalk(_id as string).then((walk) => setFullWalk(walk));
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("form current target pee checked", e.currentTarget.pee.checked);
    const pee = e.currentTarget.pee.checked;
    console.log("form current target poo checked", e.currentTarget.poo.checked);
    const poo = e.currentTarget.poo.checked;
    addRecord({ eventId: _id as string, pee, poo });
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

  const uploadImage = (): void => {
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
  };

  return (
    <>
      <div className="myaccount">
        <Link href="/walkeraccount/find">
          <button className={styles.button}>Find a Walk</button>
        </Link>
        <Link href="/walkeraccount/scheduled">
          <button className={styles.button}>Scheduled Walks</button>
        </Link>
        <Link href="/walkeraccount/walkerhistory">
          <button className={styles.button}>View My Walk History</button>
        </Link>
      </div>
      <h2 className={styles.title}> Walk Record </h2>
      <div className="addform">
        <form onSubmit={onSubmit}>
          <div className="submit-form-control">
            <label className="adjustfont">PEE</label>
            <input type="checkbox" name="pee" />
          </div>
          <div>
            <div className="submit-form-control">
              <label className="adjustfont">POO</label>
              <input type="checkbox" name="poo" />
            </div>
          </div>
          <div>
            <input type="submit" value="Submit" className="btn-record" />
          </div>
        </form>
      </div>

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
