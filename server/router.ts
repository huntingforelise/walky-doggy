const router = require("express").Router();
const userController = require("./controller/user.controller");
const walkController = require("./controller/walk.controller");

router.post("/register", userController.create);
router.post("/login", userController.login);
router.get("/user/:user/info", userController.profile);
router.post("/logout", userController.logout);

router.get("/walk/:id", walkController.getWalk);
router.get("/walks", walkController.getWalks);
router.post("/walk", walkController.postWalk);
router.put("/walk/:id", walkController.updateWalkRecord);
router.put("/joinwalk/:id", walkController.joinWalk);
router.put("/walk/:id/image", walkController.updateWalkImage);
router.delete("/walk/:id", walkController.deleteWalk);

module.exports = router;
