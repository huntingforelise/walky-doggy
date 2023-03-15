const walk = require("../models/walk");

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

exports.getWalk = async (
  req: { params: { id: string } },
  res: {
    status: (arg0: number) => {
      send: { (arg0: Walk): void };
    };
    sendStatus: (arg0: number) => void;
  },
  next: any
) => {
  try {
    const ID = req.params.id;
    const walkInstance = await walk.findById(ID);
    return res.status(200).send(walkInstance);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};

exports.getWalks = async (
  req: any,
  res: {
    status: (arg0: number) => {
      send: { (arg0: { past: Walk[]; future: Walk[] }): void };
    };
    sendStatus: (arg0: number) => void;
  },
  next: any
) => {
  try {
    const pastWalks = await walk
      .find({ date: { $lte: new Date().toISOString() } })
      .sort({ date: 1 });
    const futureWalks = await walk
      .find({ date: { $gte: new Date().toISOString() } })
      .sort({ date: 1 });
    return res.status(200).send({ past: pastWalks, future: futureWalks });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};

exports.postWalk = async (
  req: { body: Walk },
  res: {
    status: (arg0: number) => {
      send: { (arg0: { res: any; error: boolean }): void };
    };
  },
  next: any
) => {
  try {
    const newWalk = await walk.create(req.body);
    return res.status(201).send({ res: newWalk, error: false });
  } catch (error) {
    return res.status(500).send({ res: "Internal server error", error: true });
  }
};

exports.deleteWalk = async (
  req: { params: { id: string } },
  res: {
    status: (arg0: number) => {
      send: { (arg0: { res: string; error: boolean }): void };
    };
  },
  next: any
) => {
  try {
    const output = await walk.deleteOne({ _id: req.params.id });
    if (output.deletedCount === 1) {
      return res
        .status(200)
        .send({ res: "Your walky has been deleted", error: false });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ res: "Internal server error", error: true });
  }
};

exports.joinWalk = async (
  req: { params: { id: string }; body: { walkerID: string } },
  res: {
    status: (arg0: number) => {
      send: { (arg0: { res: any; error: boolean }): void };
    };
  },
  next: any
) => {
  try {
    const ID = req.params.id;
    const { walkerID } = req.body;
    const walkToBeUpdated = await walk.findByIdAndUpdate(ID, {
      walkerID: walkerID,
    });
    return res.status(200).send({ res: walkToBeUpdated, error: false });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ res: "Internal server error", error: true });
  }
};

//we could also include another function that makes it possible for a walker to unsubscribe, this would be a PUT

exports.updateWalkRecord = async (
  req: { params: { id: string }; body: { pee: boolean; poo: boolean } },
  res: {
    status: (arg0: number) => {
      send: { (arg0: { res: any; error: boolean }): void };
    };
  },
  next: any
) => {
  try {
    const ID = req.params.id;
    const walkToBeUpdated = await walk.findByIdAndUpdate(ID, {
      didPee: req.body.pee,
      didPoo: req.body.poo,
    });
    return res.status(200).send({ res: walkToBeUpdated, error: false });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ res: "Internal server error", error: true });
  }
};

exports.updateWalkImage = async (
  req: { params: { id: string }; body: { URL: string } },
  res: {
    status: (arg0: number) => {
      send: { (arg0: { res: any; error: boolean }): void };
    };
  },
  next: any
) => {
  try {
    const ID = req.params.id;
    const URL = req.body.URL;
    const walkToBeUpdated = await walk.findByIdAndUpdate(ID, {
      $addToSet: { imageURL: URL },
    });
    return res.status(200).send({ res: walkToBeUpdated, error: false });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ res: "Internal server error", error: true });
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
