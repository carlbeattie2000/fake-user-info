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
  - createUser
- address
  - postcode
  - streetName
  - doorNumber
  - city
  - county
  - createAddress
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
  - password
  - protocol
  - httpMethod
  - port
- company
  - name
  - catchPhrase
  - annualEarnings(optional: max)
  - annualProfit(optional: earnings)
  - annualLoss(optional: earnings, profit)
  - operatingCountry
- computersParts
  - casePart
  - motherboard
  - ram
  - CPU
  - GPU
  - CPUCooling
  - powerSupply
  - storage
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
