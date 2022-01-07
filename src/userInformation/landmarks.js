// random land marks from around the world
const globalFunctions = require("../global");

function landmark() {
  const landmarks = [
    {
      name: "The Statue of Liberty",
      location: "New York, USA"
    },
    {
      name: "The Eiffel Tower",
      location: "Paris, France"
    },
    {
      name: " St. Basil’s Cathedral",
      location: "Moscow, Russia"
    },
    {
      name: "Blue Domed Church",
      location: "Santorini, Greece"
    },
    {
      name: "The Great Sphinx",
      location: "Giza, Egypt"
    },
    {
      name: "The Pyramids of Giza",
      location: "Egypt"
    },
    {
      name: "The Little Mermaid",
      location: "Copenhagen, Denmark"
    },
    {
      name: "Neptune and the Palace of Versailles",
      location: "France"
    },
    {
      name: "Windmills at Kinderdijk",
      location: "Holland"
    },
    {
      name: "The Great Chinese Wall",
      location: "China"
    },
    {
      name: "The Taj Mahal",
      location: "Agra, India"
    },
    {
      name: "Machu Picchu",
      location: "Peru"
    },
    {
      name: "Big Ben",
      location: "London, UK"
    },
    {
      name: "The Burj al Arab Hotel",
      location: "Dubai"
    },
    {
      name: "Tower of Pisa",
      location: "Italy"
    },
    {
      name: "Christ the Redeemer",
      location: "Rio de Janeiro"
    },
    {
      name: "Lascaux",
      location: "France"
    },
    {
      name: " Mecca",
      location: "Saudi Arabia"
    },
    {
      name: "Loch Ness",
      location: "Scotland"
    },
    {
      name: "Mont St. Michel",
      location: "France"
    },
    {
      name: "Bran Castle",
      location: "Transylvania, Romania"
    },
    {
      name: "Agia Sophia",
      location: "Istanbul, Turkey"
    },
    {
      name: "Brandenburg Gate",
      location: "Berlin, Germany"
    },
    {
      name: "Acropolis of Athens",
      location: "Greece"
    },
    {
      name: "Sagrada Familia",
      location: "Barcelona, Spain"
    },
    {
      name: "Neuschwanstein",
      location: "Bavaria"
    },
    {
      name: "Mount Fuji",
      location: "Japan"
    },
    {
      name: "Stonehenge",
      location: "English county of Wiltshire"
    }
  ];

  return globalFunctions.randomArrayElement(landmarks);
}

module.exports = {
  landmark
};