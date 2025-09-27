const express = require("express");
const URL = require("../models/url");

const router = express.Router();

router.get("/", async (req, res) => {
  const allUrls = await URL.find({});
  return res.render("home", {
    urls: allUrls, // yeh urls variable view me use karne ke liye bheja hai
  });
});

router.get("/signup", (req, res) => {
  return res.render("signup");
});

module.exports = router;
