const express = require("express");
const app = express();
require("dotenv").config();
const cookieparser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const BASE_URL = [
  "http://localhost:3000",
  "https://lifeantidote.blackhatcode.in",
  "http://localhost:3001",
  "http://localhost:3002",
];

// Admin Dashboard routes
const Admin_Routes = require("./routes/admin_routes");
const Category_Routes = require("./routes/brands_routes");
const Order_Routes = require("./routes/order_routes");
const Products_Routes = require("./routes/products_routes");
const Mobilebanners_Routes = require("./routes/Mobilebanner_routes");
const User_Routes = require("./routes/user_routes");
const Banners_Routes = require("./routes/banners_routes");
const Enquiry_Routes = require("./routes/enquiry_routes");
const Blogs_Routes = require("./routes/blogs_routes");

// App Routes
app.use(
  cors({
    // origin: BASE_URL,
    origin: true,
    credentials: true,
  })
);
// app.use(
//   cors({
//     origin: true,
//     credentials: true,
//   })
// );

app.use(cookieparser());
app.use(express.json());
app.use(morgan("dev"));
// app.use(express.urlencoded({extended: false}));
app.use("/api", Admin_Routes);
app.use("/api", Category_Routes);
app.use("/api", Order_Routes);
app.use('/api', Mobilebanners_Routes)
app.use("/api", Products_Routes);
app.use("/api", User_Routes);
app.use("/api", Banners_Routes);
app.use("/api", Enquiry_Routes);
app.use("/api", Blogs_Routes);

app.get("/api/paymentKey/rezor", (req, res) => {
  res.send({ key: process.env.KEY_ID });
});

app.use("/", (req, res) => {
  console.log("Working ");
  res.send("WORKING");
});

app.listen(port, () => {
  console.log("Server is Listen on ", port);
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("Mongodb connected !!");
    })
    .catch((err) => {
      console.log(err, "Not connected to Mongodb !!");
    });
});

///
