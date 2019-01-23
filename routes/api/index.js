const router = require("express").Router();

const articlesRoutes = require("./articles");
const savedsRoutes = require("./saveds");


// Article routes

router.use("/articles", articlesRoutes);
router.use("/saveds", savedsRoutes);

module.exports = router;
