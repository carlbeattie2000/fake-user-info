**WORK IN PROGRESS**

## Currently Added & Working Generators

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
  - personName("firstName" | "middleName" | "lastName")
  - phoneNumber("mobile" | "home")
  - personEmail
  - postcode
  - streetName
  - doorNumber
  - city
  - county
  - createFullAddress
  - createFullUser
- bank
  - bankName
  - cardNumber
  - expiryDate
  - validFromDate
  - CVV
  - pin
  - sortNumber
  - accountNumber
  - accountLoginID
  - pendingBalance
  - accountBalance
  - createCard
  - createAccount
  - transactions
    - createTransaction
  - flags
    - flagID
    - flagReason
    - createFlag
  - loans
    - createLoan
- internet
  - IPV4
  - IPV6
  - domainName
  - URL
  - arrayDeviceHistory
- company
  - companyName
  - companyCatchPhrase
  - companyAnnualEarnings(optional: max)
  - companyAnnualProfile(optional: earnings)
  - companyOperatingCountry(optional: earnings, profit)
- computersParts
  - computerCase
  - computerMotherboard
  - computerRam
  - computerCPU
  - computerGPU
  - computerCPUCooling
  - computerPowerSupply
  - computerStorage
  - buildPC
