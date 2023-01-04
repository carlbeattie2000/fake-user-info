const LocalDefinition = require("../../core/LocalDefinition");

const locationDefinition = require("./location");
const phoneDefinition = require("./phone");

module.exports = new LocalDefinition({ 
  location: locationDefinition, 
  phone: phoneDefinition 
});