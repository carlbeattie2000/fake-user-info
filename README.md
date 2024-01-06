# 🗃️ Impostor Js 🗃️

## **Generate small to large amount of fake, random data with nodejs**

```bash
npm i impostor_js
```

or

```bash
yarn add impostor_js
```

or

```bash
pnpm add impostor_js
```

Basic usage

```javascript
const { Impostor } = require("impostor_js");

// create a new instance

const impostor_gen = new impostor("en_GB");
// providing a country code allows you to use country specific data. (phone numbers, cities, vehicle plates)

impostor_gen.location.city();
impostor_gen.location.street();
impostor_gen.location.postcode();
impostor_gen.phone.mobile();
impostor_gen.vehicle.plate();
```

## List of country codes

- TODO

## Documentation

- TODO
