var router = require("express").Router();
var authMiddleware = require("./middlewares/auth");
var userController = require("./controller/user.controller");
// const locationController = require("./controller/location.controller");
var walkController = require("./controller/walk.controller");
router.post("/register", userController.create);
router.post("/login", userController.login);
router.get("/user/:user/info", userController.profile);
router.post("/logout", userController.logout);
router.get("/walk/:id", walkController.getWalks);
router.get("/walks", walkController.getWalks);
router.post("/walk", walkController.postWalk);
router.put("/walk/:id", walkController.updateWalkRecord);
router.put("/joinwalk/:id", walkController.joinWalk);
router.put("/walk/:id/image", walkController.updateWalkImage);
// router.put("/walk/:id/location", walkController.updateWalkLocation);
router.delete("/walk/:id", walkController.deleteWalk);
// will need to add authMiddleware to these
// router.get("/locations/:eventId", locationController.getEventLocations);
// router.post("/locations", locationController.postLocation);
module.exports = router;
//# sourceMappingURL=router.js.map