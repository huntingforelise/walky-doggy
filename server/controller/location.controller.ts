const locationModel = require('../models/location');

exports.getEventLocations = (req,res)=>{
    //console.log("Request.body: " + JSON.stringify(req.params));
    locationModel.find({eventId: req.params["eventId"]})
        .exec((err,docs)=>{
                //console.log("Images from db:" + JSON.stringify(docs));
                res.status(200).json(docs);
        });
};

exports.postLocation = (req,res)=>{
    console.log("From POST Locations:" + JSON.stringify(req.body));
    locationModel.create(req.body).then(newlocation => res.status(201).json(newlocation));
}

