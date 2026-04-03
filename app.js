const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// connect MongoDB
mongoose
  .connect("mongodb://localhost:27017/order_service_db")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// routes
const orderRoutes = require("./routes/orderRoutes");
app.use("/api/orders", orderRoutes);

// start server
const PORT = 8002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
