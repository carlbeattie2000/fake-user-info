**WORK IN PROGRESS**

## Currently Added & Working Generators

#### Everything can be grabbed on it's own, you can view all the functions provided in the wiki.

<https://github.com/carlbeattie2000/fake-user-info.js/tree/main/wiki>

```
npm i fake_user_information

or

yarn add fake_user_information
```

## Node.js

```javascript
const fake_i = require("fake_user_information");

dataGenerators.user.personName("firstName"); // Carl Beattie
dataGenerators.user.personEmail(); // carlbeattie@gmail.com
dataGenerators.bankAccounts.createCard(); // random bank card
dataGenerators.bankAccounts.createMultipleCards(10); // create multiple bank cards
```

- user
  - personName
  - phoneNumber
  - personEmail
  - postcode
  - streetName
  - doorNumber
  - city
  - county
  - createFullAddress
  - createFullUser
