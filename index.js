const express = require("express");
const app = require("express")();

const dataGenerators = require("./dataGenerators");

app.get("/", (req, res) => {
  res.json(
    dataGenerators.main.createMultipleUsers(
      1,
      "address",
      "privateInfo=2",
      "bankAccount",
      "addTransaction=2",
      "addFlag=1",
      "loan"
    )
  );
});

app.listen(3000, () => {
  console.log("web server open");
});

function sortStringToArray(string) {
  return string.split(" ");
}
