const express = require("express");
const path = require("path");
const { connectMongodb } = require("./connection");
const staticRoute = require("./routes/staticRouter");
const urlRoute = require("./routes/url");
const userRoute = require("./routes/user");
const app = express();
const PORT = 8001;

connectMongodb("mongodb://127.0.0.1:27017/url-shortner").then(() => {
  console.log("Mongo Connected!!");
});

//PATHS &  ENGINES
app.set("view engine", "ejs"); // Server side rendering karni hai to yaha set view engine karna padega
app.set("views", path.resolve("./view"));

//MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//ROUTES
app.use("/url", urlRoute);
app.use("/user", userRoute);
app.use("/", staticRoute);

//SERVER
app.listen(PORT, () => {
  console.log(`Server Started at PORT : ${PORT}`);
});
