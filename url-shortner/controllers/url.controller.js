const shortid = require("shortid");
const URL = require("../models/url");

async function generateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ err: "Url is required" });
  const shortId = shortid();
  await URL.create({
    shortId: shortId,
    redirectUrl: body.url,
    visitHistory: [],
  });
  return res.json({ id: shortId });
}
async function getIdHandler(req, res) {
  const shortId = req.params.shortid;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timeStamp: Date.now(),
        },
      },
    }
  );
  if (!entry) {
    return res.status(404).send("Short url not found");
  }
  return res.redirect(entry.redirectUrl);
}
async function getAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res.json({
    totalClicks: result.visitHistory.lenght,
    analytics: result.visitHistory,
  });
}

module.exports = {
  generateNewShortURL,
  getIdHandler,
  getAnalytics,
};
