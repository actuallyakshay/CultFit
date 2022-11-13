require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const connect = require("./Congif/db");
const cors = require("cors");
const PORT = process.env.PORT;

const productRoute = require("./features/Products/product.route");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/products", productRoute);

app.get("/", async (req, res) => {
  res.send("knergoineriufneriurje");
});

app.listen(PORT, async () => {
  try {
    await connect();
    console.log(`http://localhost:${PORT}`);
  } catch (error) {
    console.log("object");
  }
});
