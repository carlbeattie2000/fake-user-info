<h1 align="center">⏱️ Timezone ⏱️</h1>

- [Timezone](#timezone)
- [Timezone date-time string](#timezone-date-time-string)

##### Create the instance
```js
const impostor_js = require("./src/impostor");

const impostor_gen = new impostor({ countryCode: "en_GB" });
```

#### Timezone
```js
impostor_gen.timezones.timezone(); // Europe/Zurich
```

#### Timezone date-time string
```js
// using a random timezone
impostor_gen.timezones.dateTimeString(); // 10/01/2023, 00:02:22

// using a timezone passed into the function
impostor_gen.timezones.dateTimeString('Antarctica/Davis'); // 09/01/2023, 23:04:29
```
