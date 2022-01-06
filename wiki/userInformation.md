**WORK IN PROGRESS**

> All User Information Functions

```javascript
const generators = require("./dataGenerators");

generators.user.createRandomName(); // - takes one argument, that has three options. ("firstName" | "lastName" | "middleName")

generators.user.createRandomPhoneNumber(); // - takes one argument, that has two options. ("mobile" | "home")

generators.user.createRandomEmail(); // - takes two arguments. ("firstName", "lastName") and combines them to create a random email address.

generators.user.randomPostcode(); // - takes no arguments, was using a large dataset, but i have disabled it for now, as it was slowing the whole thing down.

generators.user.randomStreetName(); // - takes no arguments, returns a random street name in England.

generators.user.randomDoorNumber(); // - takes no arguments, returns a random door number.

generators.user.randomCity(); // - takes no arguments, returns a random city in England.

generators.user.randomCounty(); // - takes no arguments, returns a random county in England.

generators.user.createArrayOfFirstNames(); // takes one argument, the amount of items you want it to add to the array, does the same as it's counterpart above, just multiple times with ease.

generators.user.createArrayOfLastNames(); // takes one argument, the amount of items you want it to add to the array, does the same as it's counterpart above, just multiple times with ease.

generators.user.createArrayOfMiddleNames(); // takes one argument, the amount of items you want it to add to the array, does the same as it's counterpart above, just multiple times with ease.

generators.user.createArrayOfMobileNumbers(); // takes one argument, the amount of items you want it to add to the array, does the same as it's counterpart above, just multiple times with ease.

generators.user.createArrayOfHomePhoneNumbers(); // takes one argument, the amount of items you want it to add to the array, does the same as it's counterpart above, just multiple times with ease.

generators.user.createArrayOfRandomEmails(); // takes one argument, the amount of items you want it to add to the array, does the same as it's counterpart above, just multiple times with ease.

generators.user.createArrayOfRandomPostcodes(); // takes one argument, the amount of items you want it to add to the array, does the same as it's counterpart above, just multiple times with ease.

generators.user.createArrayOfRandomStreetNames(); // takes one argument, the amount of items you want it to add to the array, does the same as it's counterpart above, just multiple times with ease.

generators.user.createArrayOfRandomDoorNumbers(); // takes one argument, the amount of items you want it to add to the array, does the same as it's counterpart above, just multiple times with ease.

generators.user.createArrayOfRandomCities(); // takes one argument, the amount of items you want it to add to the array, does the same as it's counterpart above, just multiple times with ease.

generators.user.createArrayOfRandomCounties(); // takes one argument, the amount of items you want it to add to the array, does the same as it's counterpart above, just multiple times with ease.

generators.user.createArrayOfRandomAddressObject(); // takes one argument, the amount of items you want it to add to the array, does the same as it's counterpart on the main readme.

generators.user.createArrayOfRandomUserObject(); // takes one argument, the amount of items you want it to add to the array, does the same as it's counterpart on the main readme.
```
