const router = require("express").Router();
const survey = require("./survey.js");
const results = require("./results");

router.post("/survey" , survey);
router.post("/results" , results);

module.exports = router;