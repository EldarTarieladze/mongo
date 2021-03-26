const express = require("express");
const cors = require("cors");
const app = express();

const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

//connect MongoDB

const uri =
  "mongodb+srv://test:test@cluster0.5hrif.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("connection success");
});

const userRoute = require("./routes/user");

app.get("/", (req, res) => {
  res.send("hello world");
});
app.use("/user", userRoute);

app.listen(3000);
