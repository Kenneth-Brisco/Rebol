const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const config = require("./config/dev");
const FakeDb = require("./fake-db");
const Rental = require("./models/rental");

const rentalRoutes = require("./routes/rentals"),
  userRoutes = require("./routes/users"),
  bookingRoutes = require("./routes/booking");

mongoose.connect(config.DB_URI).then(() => {
  const fakeDb = new FakeDb();
});

const app = express();

app.use(bodyParser.json());

app.use("/api/v1/rentals", rentalRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/booking", bookingRoutes);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
