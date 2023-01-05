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

### Banking

##### Create the instance
```js
const impostor_js = require("./src/impostor");

const impostor_gen = new impostor({ countryCode: "en_GB" });
```

##### Random bank name
```js
impostor_gen.finance.banking.bank() // HSBC
```

##### Random credit card
```js
impostor_gen.finance.banking.card() // 4123456789123456
```

##### Random credit card cvv
```js
impostor_gen.finance.banking.cvv() // 123
```

##### Random credit card expiry date
```js
impostor_gen.finance.banking.expiryDate() // 11/24
```

##### Random credit card sort code
```js
impostor_gen.finance.banking.sortCode() // 123456
```

##### Random credit card account number
```js
impostor_gen.finance.banking.accountNumber() // 12345678
```

##### Random card balance
```js
impostor_gen.finance.banking.balance() // 144.41

impostor_gen.finance.banking.balance({ max: 5000 }) // 0 - 4999.99

impostor_gen.finance.banking.balance({ formattedString: true }) // £1,499.99
```