
# fake-user-info
**WORK IN PROGRESS**
## Currently Added & Working Generators
#### The main functions will be listed bellow, and the small sub functions, that can be used on there own, will be listed in another file i will link soon.

> User General Information

```javascript
const generators = require("./dataGenerators");

generators.user.createAddressObject("ownerName");  // Will return a address object with the optional arguent of owner.
{
  addressRegisteredOwner: "ownerName",
  addressDoorNumber: 124,
  addressStreetName: "Addle Hill",
  addressCity: "Plymouth",
  addressCounty: "Lincolnshire",
  addressPostCode: "HR1 1NN"
}

generators.user.createUserObject(); // Will return a user object with random data.
{
  nameFirst: "Giacomo",
  nameLast: "Lloyd",
  nameMiddle: "Eve",
  phoneMobile: "07795764564",
  phoneHome: "09251214634",
  accountEmail: "GiacomoLloyd@mail.com"
}

// There are two more function will create an array of the objects in the given range passed.
generators.user.createArrayOfRandomAddressObject();
generators.user.createArrayOfRandomUserObject();
```  

> User Private Information
```javascript
generators.privateInfo.createPrivateDataObject(1);
// This functions returns some random info, on the fake users devices used, date's logged in and IPV4 connections. The function also take one argument, which is the amount of objects you would like to generate and add to the array. 
  
{
  accountLogOnHistory: [
    "Sat Dec 25 2021 03:51:55 GMT+0000 (Greenwich Mean Time)"
  ],
  accountLoggedInFromHistory: [
    "121.208.42.62"
  ],
  accountDeviceConnectedHistory: [
    "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36 RuxitSynthetic/1.0 v7000265993717670679 t4157550440124640339"
  ]
}
```
> Bank Account Information
```javascript
generators.bankAccounts.createRandomBankCardObject();
// Creates a random bank card object, and takes no arugments.
{
  cardNumber: "4915651618533398",
  cardSort: 316,
  cardPin: 3384,
  expiryDate: "3/23",
  cardValidFrom: "11/20",
  cardBlocked: false,
  cardExpired: false
}

generators.bankAccounts.createRandomAccountObject();
// Creates a user bank account object, and also creates a card for the account as you will see below.
{
  accountNumber: 57573991,
  accountSortCode: 128541,
  accountLoginID: "0E67BFCC036635",
  accountOpenDate: "Tue May 27 2003 01:50:23 GMT+0100 (British Summer Time)",
  accountPendingBalance: 261,
  accountBalance: 2963,
  accountTransactions: [],
  accountFlags: [],
  accountBlacklisted: false,
  accountOpenInvestigations: [],
  accountInDebt: false,
  accountLocked: false,
  accountPendingReview: false,
  accountFraudReported: false,
  accountAttachedCards: [
    {
      cardNumber: "2862902715998088",
      cardSort: 331,
      cardPin: 5797,
      expiryDate: "4/24",
      cardValidFrom: "7/20",
      cardBlocked: false,
      cardExpired: false
    }
  ]
}
// Again there are two other functions to generate multiple's of each object that return in an array.
generators.bankAccounts.createArrayOfRandomBankCardObjects();
generators.bankAccounts.createArrayOfRandomAccountObjects();

/* 
As you can see above, the bankAccount object has a property accountTransactions. 
There is a function to create and return an array of transactions. 
They don't really make sense at the minute and i plan to change them, but it's fake data at the end of the day.
createArrayOfRandomTransactions
*/
generators.transactions.createArrayOfRandomTransactions(1);

[
  {
  transactionID: "163256094CE63",
  transactionDate: "Sun Oct 04 2015 18:20:16 GMT+0100 (British Summer Time)",
  transactionDescription: "Family & Friends Payment",
  transactionSender: "self",
  transactionOutAmount: 260,
  transactionInAmount: 0,
  accountBalance: 1140
  }
]

/* 
There is another property named accountFlags, we also have a function to 
generate data if you would like to add some random account flags.
*/
// Create a single flag object
generators.accountFlags.createRandomFlagObject();
{
  flagID: "67FA458D8B",
  fLagReason: "Suspicious Transactions",
  flagActive: true
}

// Create multiple with the maximum range passed
generators.accountFlags.createArrayOfRandomFlags(10);

/*
Another function we have, can generate a random loan taken out, with the option to pass the accountNumber as an argument,
this object is pretty large.
*/
generators.loans.generatePaymentHistoryObjectMain("accountNumber");
{
  loanID: "F5C58E20B234",
  loanConnectedAccount: "accountNumber",
  loanAmount: 141825,
  loanLength: 21,
  loanStartDate: "Fri Sep 30 2005 21:41:27 GMT+0100 (British Summer Time)",
  loanEndDate: "Sat Mar 23 2019 19:11:07 GMT+0000 (Greenwich Mean Time)",
  loanMonthlyAmount: 562,
  loanOutstanding: 138289,
  loanPayed: 3536,
  loadInDebt: false,
  loanPaymentHistory: [
    {
      paymentID: "8CC3440773F2",
      connectedAccount: "accountNumber",
      paymentAmount: 1178,
      paymentDate: "Mon Aug 13 2018 04:55:36 GMT+0100 (British Summer Time)",
      paymentDueDate: "Thu Nov 13 1997 21:26:41 GMT+0000 (Greenwich Mean Time)",
      paymentLate: false,
      paymentRollOver: false
    },
    {
      paymentID: "2AC43A153B4A",
      connectedAccount: "accountNumber",
      paymentAmount: 1178,
      paymentDate: "Fri Aug 19 2005 03:13:03 GMT+0100 (British Summer Time)",
      paymentDueDate: "Thu Oct 15 2015 07:45:58 GMT+0100 (British Summer Time)",
      paymentLate: false,
      paymentRollOver: false
    },
    {
      paymentID: "B4E8B80DC79C",
      connectedAccount: "accountNumber",
      paymentAmount: 1178,
      paymentDate: "Fri Jun 16 2017 01:38:29 GMT+0100 (British Summer Time)",
      paymentDueDate: "Fri Nov 24 2006 07:08:12 GMT+0000 (Greenwich Mean Time)",
      paymentLate: false,
      paymentRollOver: false
    }
  ]
}
```
