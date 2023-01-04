const en_GB = require("./en_GB");

class LocalesDefinition {
  constructor() {
    this.locales = {}
  }

  defineLocale(tag, module) {
    this.locales[tag] = module;
  }

  getLocale(tag) {
    if (!this.locales.hasOwnProperty(tag)) {
      return console.log("Country tag does not exist, or support has not been added.")
    }

    return this.locales[tag];
  }
}

const LocalesDefinitionExport = new LocalesDefinition();


// Create local module classes for export
LocalesDefinitionExport.defineLocale("en_GB", en_GB);

module.exports = LocalesDefinitionExport;