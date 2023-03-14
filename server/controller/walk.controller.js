const walk = require("../models/walk");

exports.getWalk = async (req, res) => {
  try {
    const ID = req.params.id;
    const walkInstance = await walk.findById(ID);
    res.status(200).send(walkInstance);
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
    const newWalk = await walk.create(req.body);
    res.status(201).send({ res: newWalk, error: false });
  } catch (error) {
    res.status(500).send({ res: "Internal server error", error: true });
  }
};

exports.deleteWalk = async (req, res) => {
  try {
    const output = await walk.deleteOne({ _id: req.params.id });
    if (output.deletedCount === 1) {
      res
        .status(200)
        .send({ res: "Your walky has been deleted", error: false });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ res: "Internal server error", error: true });
  }
};

exports.joinWalk = async (req, res) => {
  try {
    const ID = req.params.id;
    const { walkerID } = req.body;
    const walkToBeUpdated = await walk.findByIdAndUpdate(ID, {
      walkerID: walkerID,
    });
    res.status(200).send({ res: walkToBeUpdated, error: false });
  } catch (error) {
    console.log(error);
    res.status(500).send({ res: "Internal server error", error: true });
  }
};

//we could also include another function that makes it possible for a walker to unsubscribe, this would be a PUT

exports.updateWalkRecord = async (req, res) => {
  try {
    const ID = req.params.id;
    const walkToBeUpdated = await walk.findByIdAndUpdate(ID, {
      didPee: req.body.pee,
      didPoo: req.body.poo,
    });
    res.status(200).send({ res: walkToBeUpdated, error: false });
  } catch (error) {
    console.log(error);
    res.status(500).send({ res: "Internal server error", error: true });
  }
};

exports.updateWalkImage = async (req, res) => {
  try {
    const ID = req.params.id;
    const URL = req.body.URL;
    const walkToBeUpdated = await walk.findByIdAndUpdate(ID, {
      $addToSet: { imageURL: URL },
    });
    res.status(200).send({ res: walkToBeUpdated, error: false });
  } catch (error) {
    console.log(error);
    res.status(500).send({ res: "Internal server error", error: true });
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
