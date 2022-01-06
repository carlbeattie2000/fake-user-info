**WORK IN PROGRESS**

# impostor.js

## Currently Added & Working Generators

```
npm i impostor_js

or

yarn add impostor_js
```

## Node.js

```javascript
const impostor = require("impostor_js");

impostor.user.personName("firstName"); // Carl Beattie
impostor.user.personEmail(); // carlbeattie@gmail.com
impostor.bankAccounts.createCard(); // random bank card
impostor.bankAccounts.createMultipleCards(10); // create multiple bank cards
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
- deviceInformation
  - macAddress
  - systemSKU
  - softwareBuildID
  - motherboardID
  - hardDriveID
  - operatingSystem
  - lastBIOSUpdate
  - createDeviceDetails
