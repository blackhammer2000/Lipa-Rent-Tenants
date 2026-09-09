const router = require("express").Router();

const postRoutes = require("./post");
const patchRoutes = require("./patch");

router.use(postRoutes);
router.use(patchRoutes);

module.exports = router;
