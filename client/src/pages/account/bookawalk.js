import Head from "next/head";
import AddWalk from "../../components/AddWalk";
import * as WalkService from "../../services/WalkService";

const bookawalk = () => {
  const postWalk = (walk) => {
    WalkService.postWalk(walk);
  };

  return (
    <>
      <Head>
        <title>Walky Doggy | book a walk</title>
      </Head>
      <div className="container">
        <AddWalk onAdd={postWalk} />
      </div>
    </>
  );
};

export default bookawalk;
