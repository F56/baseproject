const express = require("express"),
  routes = express.Router();

routes.get("/", (req, res) => {
  res.status(200).render("index");
});

module.exports = routes;
