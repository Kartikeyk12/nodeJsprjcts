const express = require("express");
const {generateNewShortURL,getIdHandler, getAnalytics} =  require("../controllers/url.controller")
const router = express.Router();

router.post("/",generateNewShortURL);
router.get("/:shortid",getIdHandler)
router.get("/analytics/:shortid",getAnalytics)

module.exports = router;