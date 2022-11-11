const express = require("express");

const Men = require("./mens.model");

const app = express.Router();

app.get("", async (req, res) => {
  const { page, limit, q , off , disSort, input} = req.query;
  try {
    if (q) {
      let temp = new RegExp(q, "i");
      let products = await Men.find({ title: temp })
        .skip((page - 1) * limit)
        .limit(limit);
      res.send(products);
    } else if (off) {
      let products = await Men.find()
        .skip((page - 1) * limit)
        .limit(limit);
      let validate = products?.filter((elem) => {
        if (
          Number(elem.off.substring(0, 2)) >= Number(off.substring(0, 2)) &&
          Number(elem.off.substring(0, 2)) < Number(off.substring(3, 5))
        ) {
          return elem;
        }
      });
      res.send(validate);
    } else if (disSort) {
      if (disSort === "desc") {
        let products = await Men.find();
        let validate = products?.sort((a, b) => {
          return (
            Number(b?.off?.substring(0, 2)) - Number(a?.off?.substring(0, 2))
          );
        });
        res.send(validate);
      } else if (disSort === "asc") {
        let products = await Men.find();
        let validate = products?.sort((a, b) => {
          return (
            Number(a?.off?.trim().substring(0, 2)) -
            Number(b?.off?.trim().substring(0, 2))
          );
        });
        res.send(validate);
      }
    } else if (input) {
      let temp = new RegExp(input, "i");
      let validate = await Men.find({ title: temp })
      res.send(validate);
    } else {
      let products = await Men.find()
        .skip((page - 1) * limit)
        .limit(limit);
      res.send(products);
      console.log({ products });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});


app.get("/:id", async (req, res) => {
  try {
    let product = await Men.findById(req.params.id);
    res.send(product);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = app;
