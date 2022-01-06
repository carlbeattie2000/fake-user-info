const fs = require("fs");

function getJSONContentArray(filePath, dirPath) {
  return JSON.parse(fs.readFileSync(dirPath + filePath, "utf8")).content;
}

const genRanHex = (size) =>
  [...Array(size)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join("")
    .toUpperCase();

function randomMinMax(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomFullDate() {
  let date = new Date();

  date.setDate(randomMinMax(1, 31));
  date.setMonth(randomMinMax(0, 11));
  date.setFullYear(randomMinMax(1995, 2022));
  date.setSeconds(randomMinMax(0, 59));
  date.setMinutes(randomMinMax(0, 59));
  date.setHours(randomMinMax(0, 24));

  return date.toString();
}

const createArrayOfRandomFullDate = (amount) => [...Array(amount)].map(() => randomFullDate());

module.exports = {
  getJSONContentArray,
  genRanHex,
  randomMinMax,
  randomFullDate,
  createArrayOfRandomFullDate,
};
