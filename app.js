const express = require("express");
const path = require("path");
const outsideSubtitle = "podtytul";
const dataFromFunctionsJS = require("./functions");

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "hbs");
app.use("/assets", express.static(path.join(__dirname, "./assets")));
app.use("/js", express.static(path.join(__dirname, "./js")));

app.get("/", function (req, res) {
  ////ustawianie end pointów
  res.render("index", {
    pageTitle: "ccccccc",
    subTitle: outsideSubtitle,
    example: dataFromFunctionsJS.sayHello2(),
  });
});

/////routung start

app.get("/", function (req, res) {
  ////ustawianie end pointów
  res.render("index");
});

app.get("/about", function (req, res) {
  ////ustawianie end pointów
  res.render("about");
});

app.listen(port, (err) => {
  if (err) {
    return console.log(`Wystąpił błąd ${err.message}`);
  }
  return console.log(`Apka działa na porcieeeee ${port}`);
});
