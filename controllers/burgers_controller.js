const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

//functions for burger object created in models folder

//get all burgers from database (see model for "all" function)
router.get("/", function(req, res) {
  burger.all(function(data) {
    const hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//Create a new burger, post to database (see model for "create" function)
router.post("/api/burgers", function(req, res) {
  burger.create(req.body, function(result)
   {
    res.json({ id: result.insertId });
  }); console.log(req.body);
});

//Update a burger to be devoured (see model for "update" function)
router.put("/api/burgers/:id", function(req, res) {
  const condition = "id = " + req.params.id;
  burger.update({
    devoured: true
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
