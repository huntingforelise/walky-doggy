const walk = require("../models/walk");
// const user = require("../models/user.js");

exports.getWalk = async (req, res) => {
  try {
    const ID = req.params.id;
    const walk = await walk.findById(ID);
    console.log(walk);
    res.status(200).send(walk);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

exports.getWalks = async (req, res) => {
  try {
    const pastWalks = await walk
      .find({ date: { $lte: new Date().toISOString() } })
      .sort({ date: 1 });
    const futureWalks = await walk
      .find({ date: { $gte: new Date().toISOString() } })
      .sort({ date: 1 });
    res.status(200).send({ past: pastWalks, future: futureWalks });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

exports.postWalk = async (req, res) => {
  try {
    //this is an owner specific function
    console.log(req.body);
    const newWalk = await walk.create(req.body);
    // const ownerID = newWalk.ownerID;
    // const userToBeUpdated = user.findById(ownerID);
    // await user.updateOne(userToBeUpdated, {
    //   $addToSet: { scheduledwalks: newWalk._id },
    // });
    res.status(201).send({ res: newWalk, error: false });
    console.log(newWalk);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

exports.deleteWalk = async (req, res) => {
  try {
    //this is an owner specific function
    await walk.deleteOne({ _id: req.params.id });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

exports.joinWalk = async (req, res) => {
  try {
    console.log(req);
    const ID = req.params.id;
    const { walkerID } = req.body;
    console.log(ID);
    console.log(walkerID);
    const walkToBeUpdated = await walk.findById(ID);
    console.log(walkToBeUpdated);
    await walk.updateOne(walkToBeUpdated, {
      walkerID: walkerID,
    });
    const updatedWalk = await walk.findById(ID);
    console.log(updatedWalk);
    res.status(200).send({ res: updatedWalk, error: false });
  } catch (error) {
    console.log(error);
    res.status(500).send({ res: "Internal server error", error: true });
  }
};

//we could also include another function that makes it possible for a walker to unsubscribe, this would be a PUT

exports.updateWalkRecord = async (req, res) => {
  //this is a walker only function
  try {
    const ID = req.params.id;
    const walkToBeUpdated = await walk.findById(ID);
    await walk.updateOne(walkToBeUpdated, {
      didPee: req.body.pee,
      didPoo: req.body.poo,
    });
    const updatedWalk = await walk.findById(ID);
    res.status(200).send(updatedWalk);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

exports.updateWalkImage = async (req, res) => {
  //this is a walker only function
  console.log(req.body);
  try {
    const ID = req.params.id;
    const URL = req.body.URL;
    const walkToBeUpdated = await walk.findById(ID);
    await walk.updateOne(walkToBeUpdated, {
      $addToSet: { imageURL: URL },
    });
    const updatedWalk = await walk.findById(ID);
    console.log(updatedWalk);
    res.status(200).send(updatedWalk);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

// exports.updateWalkLocation = async (req, res) => {
//   //this is a walker only function
//   console.log("controller", req.body);
//   try {
//     const ID = req.params.id;
//     const walkToBeUpdated = await walk.findById(ID);
//     await walk.updateOne(walkToBeUpdated, { coordinates: req.body });
//     const updatedWalk = await walk.findById(ID);
//     console.log(updatedWalk);
//     res.status(200).send(updatedWalk);
//   } catch (error) {
//     console.log(error);
//     res.sendStatus(500);
//   }
// };

// I will complete this once we've got the rest working
// exports.deleteImage = async (req, res) => {
//   //console.log("From DELETE:" + JSON.stringify(req.params));
//   imageModel.deleteOne({ _id: req.params["id"] }).then(res.json(req.params));
// };
