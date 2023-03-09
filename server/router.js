const router = require("express").Router();
const authMiddleware = require("./middlewares/auth");
const eventController = require("./controller/event.controller");
const imageController = require("./controller/image.controller");
const locationController = require("./controller/location.controller");
const recordController = require("./controller/record.controller");
const walkController = require("./controller/walk.controller");
const { check, validationResult } = require("express-validator");

// Will need to add these methods to a Controller
// router.post('/register', userController.create);
// router.post('/login', userController.login);
// router.get('/user/info', authMiddleware, userController.profile);
// router.post('/logout', authMiddleware, userController.logout);

router.get("/walks", walkController.getWalks);

// will need to add authMiddleware to these
router.get("/records/:eventId", recordController.getEventRecords);
router.delete("/records/:id", recordController.deleteRecord);
router.post("/records", recordController.postRecord);

router.get("/images/:eventId", imageController.getEventImages);
router.delete("/images/:id", imageController.deleteImage);
router.post("/images", imageController.postImage);

router.get("/locations/:eventId", locationController.getEventLocations);
router.post("/locations", locationController.postLocation);

router.get("/events", eventController.getEvents);
router.get("/events/past/", eventController.getPastEvents);
router.delete("/events/:id", eventController.deleteEvent);
router.post(
  "/events",
  [
    check("title").notEmpty().trim().withMessage("Event title cannot be empty"),
    check("date").notEmpty().isISO8601().withMessage("Incorrect date").toDate(),
    check("venue").notEmpty().trim().withMessage("Venue cannot be empty"),
  ],
  (req, res, next) => {
    const error = validationResult(req).formatWith(({ msg }) => msg);

    const hasError = !error.isEmpty();

    if (hasError) {
      res.status(400).json({ error: error.array() });
    } else {
      next();
    }
  },
  eventController.postEvent
);

module.exports = router;
