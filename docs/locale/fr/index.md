# en_US

Creating the instance

```js
const impostor_gen = new impostor({ countryCode: "fr" });
```

Location module

```js
impostor_gen.locale.location.city() // SAINT CHABRAIS
impostor_gen.locale.location.street() // DE ZINSWILLER, ROUTE
impostor_gen.locale.location.department() // Bas-Rhin
impostor_gen.locale.location.postcode() // 75008
impostor_gen.locale.location.buildingNumber() // 14
impostor_gen.locale.location.localCountry() // France
impostor_gen.locale.location.streetAddress() // 14 DE ZINSWILLER, ROUTE, SAINT CHABRAIS
impostor_gen.locale.location.fullAddress() // Object containing all of the above
```

Phone module

```js
impostor_gen.locale.phone.mobile() // 06 32 04 43 15
impostor_gen.locale.phone.landline() // 01 67 32 92 08
```

Internet module

```js
impostor_gen.locale.internet.domain() // fr
impostor_gen.locale.internet.isp() // Bouygues Telecom
```

Vehicle module

```js
impostor_gen.locale.vehicle.plate() // AA-123-AA
impostor_gen.locale.vehicle.vin() // G6FYR746FGHTYUAIK
```