# en_US

Creating the instance

```js
const impostor_gen = new impostor({ countryCode: "en_US" });
```

Location module

```js
impostor_gen.locale.location.city() // Akron
impostor_gen.locale.location.street() // Madison Drive
impostor_gen.locale.location.county() // Clarendon
impostor_gen.locale.location.stateShorthand() // AL
impostor_gen.locale.location.state() // Alabama
impostor_gen.locale.location.zip() // 35004
impostor_gen.locale.location.buildingNumber() // 14
impostor_gen.locale.location.localCountry() // United States of America
impostor_gen.locale.location.streetAddress() // 14 Madison Drive, Akron
impostor_gen.locale.location.fullAddress() // Object containing all of the above
```

Phone module

```js
impostor_gen.locale.phone.mobile() // (203) 756-5643
```

Internet module

```js
impostor_gen.locale.internet.domain() // us
impostor_gen.locale.internet.isp() // AT&T
```

Vehicle module

```js
impostor_gen.locale.vehicle.plate() // ALC 12B
impostor_gen.locale.vehicle.vin() // G6FYR746FGHTYUAIK
```