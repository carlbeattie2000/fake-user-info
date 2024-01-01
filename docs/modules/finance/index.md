<h1 align="center">🏧 Finance 🏧</h1>

- [Banking](#banking)
  - [Create the instance](#create-the-instance)
  - [Random bank name](#random-bank-name)
  - [Random credit card](#random-credit-card)
  - [Random credit card cvv](#random-credit-card-cvv)
  - [Random credit card expiry date](#random-credit-card-expiry-date)
  - [Random credit card sort code](#random-credit-card-sort-code)
  - [Random credit card account number](#random-credit-card-account-number)
  - [Random card balance](#random-card-balance)
  - [Random transaction string](#random-transaction-string)
  - [Random transaction object](#random-transaction-object)
  - [Random statement strings](#random-statement-strings)
  - [Random statement objects](#random-statement-objects)
- [Crypto](#crypto)
  - [Create the instance](#create-the-instance-1)
  - [Random ethereum address](#random-ethereum-address)
  - [Random bitcoin address](#random-bitcoin-address)
  - [Random bitcoin private key](#random-bitcoin-private-key)
  - [Random cardano address](#random-cardano-address)
  - [Random coin name](#random-coin-name)
  - [Random coin prefix](#random-coin-prefix)

### Banking

##### Create the instance

```js
const impostor_js = require("./src/impostor");

const impostor_gen = new impostor({ countryCode: "en_GB" });
```

##### Random bank name

```js
impostor_gen.finance.banking.bank(); // HSBC
```

##### Random credit card

```js
impostor_gen.finance.banking.card(); // 4123456789123456
```

##### Random credit card cvv

```js
impostor_gen.finance.banking.cvv(); // 123
```

##### Random credit card expiry date

```js
impostor_gen.finance.banking.expiryDate(); // 11/24
```

##### Random credit card sort code

```js
impostor_gen.finance.banking.sortCode(); // 123456
```

##### Random credit card account number

```js
impostor_gen.finance.banking.accountNumber(); // 12345678
```

##### Random card balance

```js
impostor_gen.finance.banking.balance(); // 144.41

impostor_gen.finance.banking.balance({ max: 5000 }); // 0 - 4999.99

impostor_gen.finance.banking.balance({ formattedString: true }); // £1,499.99
```

##### Random transaction string

```js
impostor_gen.finance.banking.transactionString();
// 11/29/2015 Walgreens Boots Alliance +0 -168.65 847.27 678.62
```

##### Random transaction object

```js
impostor_gen.finance.banking.transactionObject();
/*
  {
    date: '06/04/2018',
    description: 'Qurate Retail',
    in: 0,
    out: 312.37,
    oldBalance: 1615.09,
    newBalance: 1302.72
  }
*/
```

##### Random statement strings

```js
impostor_gen.finance.banking.statementString(2);
/* 
  [
    '08/31/2004 The Kroger Co. +0 -1999.98 2699.96 699.98',
    '05/30/2012 H.E. Butt Grocery +396.41 -0 2926.42 3322.83'
  ]
*/
```

##### Random statement objects

```js
impostor_gen.finance.banking.statementObject(2);
/* 
  [
    {
      date: '03/28/2022',
      description: "Macy's",
      in: 0,
      out: 814.24,
      oldBalance: 1444.49,
      newBalance: 630.25
    },
    {
      date: '01/08/2013',
      description: 'Health Mart Systems',
      in: 3896.66,
      out: 0,
      oldBalance: 4312.57,
      newBalance: 8209.23
    }
  ]
*/
```

### Crypto

##### Create the instance

```js
const impostor_js = require("./src/impostor");

const impostor_gen = new impostor({ countryCode: "en_GB" });
```

##### Random ethereum address

```js
impostor_gen.finance.crypto.ethereumAddress(); // 0x7EEF6A3C7A5848605948568697CAA1871CB50B8C
```

##### Random bitcoin address

```js
impostor_gen.finance.crypto.bitcoinAddress(); // bc1a7aed59a2f76193f7d77144c314ea1
```

##### Random bitcoin private key

```js
impostor_gen.finance.crypto.bitcoinPrivateKey();
// 20A0A0D7E4139923FD2A29071C044CB0255947DECE545AC19E9FAA1AE962B0CB
```

##### Random cardano address

```js
impostor_gen.finance.crypto.cardanoAddress();
// addra76d028daf3319dc65b032b763810112f48d5c0531fa797a8e2eafc850e8b15f16950c2b62971806a0a703ecd4d9e9264f
```

##### Random coin name

```js
impostor_gen.finance.crypto.coin(); // Dai
```

##### Random coin prefix

```js
impostor_gen.finance.crypto.coinPrefix(); // ATOM
```
