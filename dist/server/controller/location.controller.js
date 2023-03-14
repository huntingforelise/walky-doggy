var locationModel = require('../models/location');
exports.getEventLocations = function (req, res) {
    //console.log("Request.body: " + JSON.stringify(req.params));
    locationModel.find({ eventId: req.params["eventId"] })
        .exec(function (err, docs) {
        //console.log("Images from db:" + JSON.stringify(docs));
        res.status(200).json(docs);
    });
};
exports.postLocation = function (req, res) {
    console.log("From POST Locations:" + JSON.stringify(req.body));
    locationModel.create(req.body).then(function (newlocation) { return res.status(201).json(newlocation); });
};
//# sourceMappingURL=location.controller.js.map