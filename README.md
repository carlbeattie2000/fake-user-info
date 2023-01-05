# 🗃️ Impostor Js 🗃️

## **Generate small to large amount of fake, random data with nodejs**


```bash
npm i impostor_js
```
or
```bash
yarn add impostor_js
```

Basic usage

```javascript
const impostor = require("impostor_js");

// create a new instance

const impostor_gen = new impostor({ countryCode: "en_GB" });
// providing a country code allows you to use country specific data. (phone numbers, cities, vehicle plates)

impostor_gen.locale.location.city();
impostor_gen.locale.location.street();
impostor_gen.locale.location.postcode();
impostor_gen.locale.phone.mobile();
impostor_gen.locale.vehicle.plate();
// The .locale of every country code supported provides custom data for that country.

// Another example
const impostor_gen = new impostor({ countryCode: "en_US" })

impostor_gen.locale.location.city();
impostor_gen.locale.location.state();
impostor_gen.locale.location.zip();
```

## Documentation
- [locale](./docs/locale/index.md)
- [Modules](./docs/modules/index.md)