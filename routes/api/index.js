const router = require("express").Router();
const bookRoutes = require("./books");
const articlesRoutes = require("./articles");
const savedsRoutes = require("./saveds");


// Book routes
router.use("/books", bookRoutes);
router.use("/articles", articlesRoutes);
router.use("/saveds", savedsRoutes);

module.exports = router;
