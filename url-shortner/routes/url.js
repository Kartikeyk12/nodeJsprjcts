const express = require("express");
const {generateNewShortURL,getIdHandler} =  require("../controllers/url.controller")
const router = express.Router();

router.post("/url",generateNewShortURL);
router.get("/:shortid",getIdHandler)

module.exports = router;