

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

> Main User Object Creation Function
```javascript
/*
We have two main functions, one which only takes commands and returns a single whole user object, and then another that takes the amount
of users you want to generate, then the commands.
*/
generators.main.createMultipleUsers( 1, "address", "privateInfo=2", "bankAccount", "addTransaction=2","addFlag=1", "loan");
{
  accountID: "6E2EC5E4D7207F53827F27F4",
  accountInfo: {
    nameFirst: "Liall",
    nameLast: "Mcfadden",
    nameMiddle: "Luke",
    phoneMobile: "07493968798",
    phoneHome: "03533168829",
    accountEmail: "LiallMcfadden@mail.com",
  },
  accountHomeAddress: {
    addressRegisteredOwner: "",
    addressDoorNumber: 243,
    addressStreetName: "Troy Street",
    addressCity: "Hereford",
    addressCounty: "East Riding Yorkshire",
    addressPostCode: "G67 4AG",
  },
  privateInformation: {
    accountLogOnHistory: [
      "Fri Jun 15 2007 01:50:16 GMT+0100 (British Summer Time)",
      "Tue Oct 18 2016 02:24:07 GMT+0100 (British Summer Time)",
    ],
    accountLoggedInFromHistory: ["131.201.32.128", "248.146.146.19"],
    accountDeviceConnectedHistory: [
      "Mozilla/5.0 (Linux; Android 7.1.1; LE2111) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.104 Mobile Safari/537.36",
      "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36 RuxitSynthetic/1.0 v2564821464775021956 t6281935149377429786",
    ],
  },
  activeAccounts: {
    accountNumber: 97221738,
    accountSortCode: 308718,
    accountLoginID: "FE1ECADDB55945",
    accountOpenDate: "Mon Dec 07 1998 22:21:54 GMT+0000 (Greenwich Mean Time)",
    accountPendingBalance: 607,
    accountBalance: 489,
    accountTransactions: [
      {
        transactionID: "94600E93DD8B1",
        transactionDate: "Mon Jan 21 2008 18:19:16 GMT+0000 (Greenwich Mean Time)",
        transactionDescription: "Art",
        transactionSender: "J.P Morgan (Bonus)",
        transactionOutAmount: 0,
        transactionInAmount: 4451,
        accountBalance: 5851,
      },
      {
        transactionID: "5247389DED615",
        transactionDate: "Mon Dec 02 2013 03:31:09 GMT+0000 (Greenwich Mean Time)",
        transactionDescription: "LV (UK)",
        transactionSender: "Family & Friends (Bank Transfer)",
        transactionOutAmount: 0,
        transactionInAmount: 495,
        accountBalance: 1895,
      },
    ],
    accountFlags: [
      {
        flagID: "01EC028E45",
        fLagReason: "Large Sum Of Money Withdrawn",
        flagActive: true,
      },
    ],
    accountBlacklisted: false,
    accountOpenInvestigations: [],
    accountInDebt: false,
    accountLocked: false,
    accountPendingReview: false,
    accountFraudReported: false,
    accountAttachedCards: [
      {
        cardNumber: "2777529715677444",
        cardSort: 930,
        cardPin: 3946,
        expiryDate: "5/24",
        cardValidFrom: "3/22",
        cardBlocked: false,
        cardExpired: false,
      },
    ],
  },
  accountActiveLoans: {
    loanID: "80D084267AC7",
    loanAmount: 2703492,
    loanLength: 33,
    loanStartDate: "Sat Mar 14 2009 14:56:41 GMT+0000 (Greenwich Mean Time)",
    loanEndDate: "Tue Dec 29 2015 02:38:03 GMT+0000 (Greenwich Mean Time)",
    loanMonthlyAmount: 6827,
    loanOutstanding: 2675984,
    loanPayed: 27508,
    loadInDebt: false,
    loanPaymentHistory: [
      {
        paymentID: "9502680003A0",
        connectedAccount: "123543454934dhd",
        paymentAmount: 2750,
        paymentDate: "Fri Feb 19 1999 00:02:56 GMT+0000 (Greenwich Mean Time)",
        paymentDueDate: "Sun May 22 2005 06:24:39 GMT+0100 (British Summer Time)",
        paymentLate: false,
        paymentRollOver: false,
      },
      {
        paymentID: "326B7687681D",
        connectedAccount: "123543454934dhd",
        paymentAmount: 2750,
        paymentDate: "Fri Jul 23 1999 08:50:31 GMT+0100 (British Summer Time)",
        paymentDueDate: "Tue Mar 24 1998 11:17:15 GMT+0000 (Greenwich Mean Time)",
        paymentLate: false,
        paymentRollOver: false,
      },
      {
        paymentID: "199F4902FB27",
        connectedAccount: "123543454934dhd",
        paymentAmount: 2750,
        paymentDate: "Sat Oct 16 2010 17:55:55 GMT+0100 (British Summer Time)",
        paymentDueDate: "Fri May 03 1996 02:22:41 GMT+0100 (British Summer Time)",
        paymentLate: false,
        paymentRollOver: false,
      },
      {
        paymentID: "4916F9C5942C",
        connectedAccount: "123543454934dhd",
        paymentAmount: 2750,
        paymentDate: "Tue Sep 05 2017 04:26:41 GMT+0100 (British Summer Time)",
        paymentDueDate: "Wed Dec 05 2001 08:56:10 GMT+0000 (Greenwich Mean Time)",
        paymentLate: false,
        paymentRollOver: false,
      },
      {
        paymentID: "7EC702B9F197",
        connectedAccount: "123543454934dhd",
        paymentAmount: 2750,
        paymentDate: "Mon Dec 20 1999 20:55:59 GMT+0000 (Greenwich Mean Time)",
        paymentDueDate: "Sat Dec 26 1998 20:06:26 GMT+0000 (Greenwich Mean Time)",
        paymentLate: false,
        paymentRollOver: false,
      },
      {
        paymentID: "7ACDDDD4D756",
        connectedAccount: "123543454934dhd",
        paymentAmount: 2750,
        paymentDate: "Mon Jan 23 1995 05:28:58 GMT+0000 (Greenwich Mean Time)",
        paymentDueDate: "Wed May 16 2012 05:06:11 GMT+0100 (British Summer Time)",
        paymentLate: false,
        paymentRollOver: false,
      },
      {
        paymentID: "9F17587BFF71",
        connectedAccount: "123543454934dhd",
        paymentAmount: 2750,
        paymentDate: "Tue Jul 27 2004 15:24:13 GMT+0100 (British Summer Time)",
        paymentDueDate: "Sat Aug 25 2012 07:11:28 GMT+0100 (British Summer Time)",
        paymentLate: false,
        paymentRollOver: false,
      },
      {
        paymentID: "30B59B363837",
        connectedAccount: "123543454934dhd",
        paymentAmount: 2750,
        paymentDate: "Sat Jun 14 2008 04:28:16 GMT+0100 (British Summer Time)",
        paymentDueDate: "Thu Sep 14 1995 00:10:57 GMT+0100 (British Summer Time)",
        paymentLate: false,
        paymentRollOver: false,
      },
      {
        paymentID: "5085E507F99F",
        connectedAccount: "123543454934dhd",
        paymentAmount: 2750,
        paymentDate: "Sun Mar 24 1996 09:23:53 GMT+0000 (Greenwich Mean Time)",
        paymentDueDate: "Wed Jun 05 2013 17:16:44 GMT+0100 (British Summer Time)",
        paymentLate: false,
        paymentRollOver: false,
      },
      {
        paymentID: "B9E04C7F93EC",
        connectedAccount: "123543454934dhd",
        paymentAmount: 2750,
        paymentDate: "Sat Apr 13 1996 07:42:11 GMT+0100 (British Summer Time)",
        paymentDueDate: "Fri Jul 13 2007 23:19:50 GMT+0100 (British Summer Time)",
        paymentLate: false,
        paymentRollOver: false,
      },
    ],
  },
};
```
