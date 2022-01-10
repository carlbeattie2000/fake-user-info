**WORK IN PROGRESS**

# impostor.js
### Address & phone etc is based on the UK format currently.

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
  - country
  - createAddress
- landmarks
  - landmark
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
- crypto
  - ethereumAddress
  - bitcoinAddress
  - bitcoinPrivateKey
  - coin
  - coinName
  - coinPrefix
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

# TODO's
- more user infomation
  - profession
  - prefession position (CEO/ CTO / MANAGER)
  - salary
  - prefession industry
- movies&music
  - genre
  - randomActor
  - randomArtist
- vehicles
  - make
  - model
  - engine size
  - year registered
  - colour
  - doors
  - plate
  - fuel type
  - type of car
  - vim
