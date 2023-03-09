import Head from "next/head";
import AddEvent from "../../../components/AddEvent";
import * as WalkService from "../../services/WalkService";

const bookawalk = () => {
  const postWalk = (event) => {
    console.log(event);
    WalkService.postWalk(event);
  };

  return (
    <>
      <Head>
        <title>Walky Doggy | book a walk</title>
      </Head>
      <div className="container">
        <AddEvent onAdd={postWalk} />
      </div>
    </>
  );
};

export default bookawalk;
