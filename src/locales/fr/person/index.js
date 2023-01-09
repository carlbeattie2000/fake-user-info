const ImpostorBase = require('../../../core/impostorBase');

const namesData = require('./names');
const jobTitlesData = require('./jobTitles');
const jobAreasData = require('./jobAreas');
const emailExtensions = require('./emailExtensions');

class Person extends ImpostorBase {
  constructor() { super(); }

  firstName() {
    return this.randomArrayElement(namesData['firstNames']);
  }

  lastName() {
    return this.randomArrayElement(namesData['lastNames']);
  }

  fullName() {
    return this.firstName() + ' ' + this.lastName();
  }

  sex() {
    return this.randomArrayElement(['female', 'male']);
  }
  
  dob(format = 'MM/DD/YYYY') {
    return this.randomStringFormatter(format.toUpperCase());
  }

  email() {
    return this.firstName().toLowerCase() + this.randomArrayElement(['_', '-', '&']) + this.lastName().toLowerCase() + '@' + this.randomArrayElement(emailExtensions);
  }

  jobTitle() {
    return this.randomArrayElement(jobTitlesData);
  }

  jobArea() {
    return this.randomArrayElement(jobAreasData);
  }
}

module.exports = Person;