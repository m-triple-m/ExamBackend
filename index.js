const express = require("express");
const app = express();
const userManager = require("./routers/userManager");
const paperManager = require("./routers/papermanager");
const answerManager = require("./routers/answerManager");
const port = process.env.PORT || 5000;
const cors = require("cors");

// to parse json data from client
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.static("./uploads"));

app.use("/user", userManager);
app.use("/paper", paperManager);
app.use("/answer", answerManager);

app.get("/home", (req, res) => {
  console.log("client request on server");
  res.send("Request on home");
});

app.listen(port, () => {
  console.log(`Server started on port on localhost : ${port}`);
});
