# en_GB

Creating the instance

```js
const impostor_gen = new impostor({ countryCode: "en_GB" });
```

Location module

```js
impostor_gen.locale.location.city() // Maidstone
impostor_gen.locale.location.street() // Church Road
impostor_gen.locale.location.county() // Kent
impostor_gen.locale.location.postcode() // ME13 0BF
impostor_gen.locale.location.buildingNumber() // 14
impostor_gen.locale.location.localCountry() // England
impostor_gen.locale.location.streetAddress() // 14 Church Road, Maidstone
impostor_gen.locale.location.fullAddress() // Object containing all of the above
```

Phone module

```js
impostor_gen.locale.phone.mobile() // 07345438492
impostor_gen.locale.phone.landline() // 02034564521
```

Internet module

```js
impostor_gen.locale.internet.domain() // .co.uk
impostor_gen.locale.internet.isp() // BT
```

Vehicle module

```js
impostor_gen.locale.vehicle.plate() // LX20 UHG
impostor_gen.locale.vehicle.vin() // G6FYR746FGHTYUAIK
impostor_gen.locale.vehicle.taxClass() // HGV
```