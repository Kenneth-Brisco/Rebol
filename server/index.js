const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const config = require("./config/dev");
const FakeDb = require("./fake-db");
const Rental = require("./models/rental");

const rentalRoutes = require("./routes/rentals");
const userRoutes = require("./routes/users");

mongoose.connect(config.DB_URI).then(() => {
  const fakeDb = new FakeDb();

});

const app = express();

app.use(bodyParser.json());

app.use("/api/v1/rentals", rentalRoutes);
app.use("/api/v1/users", userRoutes);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
