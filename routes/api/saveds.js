const router = require("express").Router();
const savedsController = require("../../controllers/savedsController");

// Matches with "/api/saveds"
router.route("/saved")
  .get(savedsController.findAll)
//   .post(savedsController.create);

// Matches with "/api/saveds/:id"
router
  .route("/:id")
  .get(savedsController.findById)
  .put(savedsController.update)
  .delete(savedsController.remove);

module.exports = router;
