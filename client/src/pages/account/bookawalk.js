import Head from "next/head";
import AddWalk from "../../components/AddWalk";
import * as WalkService from "../../services/WalkService";
import { useState, useEffect } from "react";

const bookawalk = () => {

  const postWalk = (walk) => {
    console.log(walk);
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
