const express = require("express");
const router = express.Router();

// @desc Edit story details
// @route PUT /edit/story/:storyID/details
// @access Private
router.put("/story/:storyID/details ", (req, res) => {
    res.send("its edit time, update the story data");
});

// @desc Edit chapter of a story
// @route PUT /edit/story/:storyID/details
// @access Private
router.put("/story/:storyID/chapter/:chapterId ", (req, res) => {
    res.send("its edit time, update the chapter data");
});

module.exports = router;
