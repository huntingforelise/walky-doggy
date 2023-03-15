import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import { useEffect, useState } from "react";
import * as WalkService from "../../services/WalkService";

interface WalkRecord {
  eventId: string;
  poo: boolean;
  pee: boolean;
}

const formuser = (): JSX.Element => {
  const router = useRouter();
  const { _id } = router.query;
  const [walkRecord, setWalkRecord] = useState<WalkRecord>({});

  useEffect(() => {
    WalkService.getWalk(Number(_id)).then((walk: WalkRecord) => setWalkRecord(walk));
  }, [_id]);

  return (
    <>
    <h2 className= { styles.title } > Walk Record < /h2>
      < div className = "record-div-outer" >
      {
        walkRecord.poo !== undefined && walkRecord.pee !== undefined ? (
          <div className= "record-div" >
          <label>POO : { walkRecord.poo } < /label>
          < label > PEE: { walkRecord.pee } </label>
            < /div>
) : (
  "We unfortunately don't have any pee or poo data yet!"
)}
</div>
  < />
);
};

export default formuser;