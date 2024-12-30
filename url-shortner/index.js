const express = require("express");

const { connectMongodb } = require("./connection");
const URL = require("./models/url");
const urlRoute = require("./routes/url");
const app = express();
const PORT = 8001;

connectMongodb("mongodb://127.0.0.1:27017/url-shortner").then(() => {
  console.log("Mongo Connected");
});
app.use(express.json());
app.use("/", urlRoute);

app.listen(PORT, () => {
  console.log(`Server Started at PORT : ${PORT}`);
});
