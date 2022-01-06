const express = require("express");
const fs = require("fs");
const app = require("express")();

const dataGenerators = require("./dataGenerators");

function getJSONContentArray(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8")).content;
}

app.get("/", (req, res) => {
  res.json(getJSONContentArray("./dataSets/accountTemplate.json"));
});

app.listen(3000, () => {
  console.log("web server open");
});

function sortStringToArray(string) {
  return string.split(" ");
}
