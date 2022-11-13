const express = require("express");

const User = require("./Login.model");

const app = express.Router();

app.get("", async (req, res) => {
  let temp = await User.find();
  res.send(temp);
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    let temp = await User.findOne({ email });

    if (temp) {3
      if (temp.email === email) {
        if (temp.password === password) {
          res.send({
            token: `${temp.name}:${temp.email}:${temp._id}:${temp.pinCode}`,
          });
        } else {
          res.send("U have entered the wrong passwword");
        }
      }
    } else {
      res.send("U have to login first");
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.post("/signup", async (req, res) => {
  const { name, email, password, pinCode } = req.body;
  try {
    let existUser = await User.findOne({ email });
    if (existUser) {
      res.status(404).send("User already Exist");
    } else {
      let temp = await User.create({
        name: name,
        email: email,
        password: password,
        pinCode: pinCode,
      });
      res.send("Acc created")
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.delete("/:id", async (req, res) => {
  let { id } = req.params;
  try {
    let temp = await User.findByIdAndDelete(id);
    res.send("Deleted Successfully");
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = app;
