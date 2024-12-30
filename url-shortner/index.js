const express = require("express");

const {connectMongodb} = require("./connection")
const urlRoute = require("../routes/url");
const app = express();
const PORT = 8001;

connectMongodb(" mongodb://127.0.0.1:27017/url-shortner").then(()=>{
    console.log("Mongo Connected")
})
app.use("/url", urlRoute);

app.listen(PORT, () => {
  console.log(`Server Started at PORT : ${PORT}`);
});
