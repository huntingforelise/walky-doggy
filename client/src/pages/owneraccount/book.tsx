import * as WalkService from "../../services/WalkService";
import { SetStateAction, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Walk = {
  _id?: string;
  ownerID: string;
  dogName: string;
  date: Date;
  pickUpLocation: string;
  walkerID?: string;
  imageURL?: string[];
  coordinates?: number[];
  didPee?: boolean;
  didPoo?: boolean;
};

const book = (): JSX.Element => {
  const [dogName, setDogName] = useState<string>("");
  const [date, setDate] = useState<Date>();
  const [pickUpLocation, setPickUpLocation] = useState<string>("");
  const ownerID = localStorage.getItem("userId");

  const postWalk = async (walk: Walk) => {
    const output = await WalkService.postWalk(walk);
    if (!output.error) {
      const successToast = () => toast("Your walky has been booked!");
      successToast();
    } else {
      const errorToast = () => toast(output.res);
      errorToast();
    }
  };

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    postWalk({ ownerID, dogName, date, pickUpLocation });
    setDogName("");
    setDate(null);
    setPickUpLocation("");
  };

  return (
    <>
      <div className="myaccount">
        <Link href="/owneraccount/book">
          <button className={styles.buttonselected}>Book a walk</button>
        </Link>
        <Link href="/owneraccount/upcoming">
          <button className={styles.button}>Upcoming Walks</button>
        </Link>
        <Link href="/owneraccount/ownerhistory">
          <button className={styles.button}>View My Walk History</button>
        </Link>
      </div>
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>DOG NAME</label>
          <input
            type="text"
            name="title"
            placeholder="your dog's name"
            required
            value={dogName}
            onChange={(e) => setDogName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>DATE</label>
          <DatePicker
            className="date-picker"
            showTimeSelect
            required
            selected={date}
            onSelect={(date: SetStateAction<Date>) => setDate(date)} //when day is clicked
            onChange={(date: SetStateAction<Date>) => setDate(date)} //only when value has changed
            dateFormat="Pp"
          />
        </div>
        <div className="form-control">
          <label>PICK-UP LOCATION</label>
          <input
            type="text"
            name="venue"
            placeholder="pick up address"
            required
            value={pickUpLocation}
            onChange={(e) => setPickUpLocation(e.target.value)}
          />
        </div>
        <input type="submit" value="BOOK" className="btn-block" />
      </form>
    </>
  );
};

export default book;
