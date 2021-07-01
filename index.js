const express = require("express"),
  routes = require("./routes/routes"),
  app = express(),
  port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(routes);
app.set("view engine", "ejs");

app.listen(port, () => {
  console.log(`Server listening on: http://localhost:${port}`);
});
