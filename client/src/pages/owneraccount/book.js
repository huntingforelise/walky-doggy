import * as WalkService from "../../services/WalkService";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

const book = () => {
  const [dogName, setDogName] = useState("");
  const [date, setDate] = useState("");
  const [pickUpLocation, setPickUpLocation] = useState("");
  const userId = localStorage.getItem("userId");
  console.log("book a walk: " + userId);

  const postWalk = (walk) => {
    WalkService.postWalk(walk);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    postWalk({ dogName, date, pickUpLocation });
    setDogName("");
    setDate("");
    setPickUpLocation("");
  };

  return (
    <>
      <div className="myaccount-div">
        <Link href="/account/book">
          <button className={styles.buttonselected}>Book a walk</button>
        </Link>
        <Link href="/account/ownerhistory">
          <button className={styles.button}>View My Walk History</button>
        </Link>
        <Link href="/account/upcoming">
          <button className={styles.button}>Upcoming Walks</button>
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
            onSelect={(date) => setDate(date)} //when day is clicked
            onChange={(date) => setDate(date)} //only when value has changed
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
