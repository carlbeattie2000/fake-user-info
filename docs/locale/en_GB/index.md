# en_GB - (Great Britain)

Creating the instance

```js
const impostor_gen = new impostor({ countryCode: "en_GB" });
```

Person module

```js
impostor_gen.locale.person.firstName() // John
impostor_gen.locale.person.firstName(sex?: 'male' | 'female') // Molly
impostor_gen.locale.person.lastName() // Smith
impostor_gen.locale.person.fullName() // John Smith
impostor_gen.locale.person.sex() // male
impostor_gen.locale.person.dob() // 05/22/1998
impostor_gen.locale.person.email() // john_smith@gmail.com
impostor_gen.locale.person.jobTitle() // Economist
impostor_gen.locale.person.jobArea() // Finance
```

Location module

```js
impostor_gen.locale.location.city(); // Maidstone
impostor_gen.locale.location.street(); // Church Road
impostor_gen.locale.location.county(); // Kent
impostor_gen.locale.location.postcode(); // ME13 0BF
impostor_gen.locale.location.buildingNumber(); // 14
impostor_gen.locale.location.localCountry(); // England
impostor_gen.locale.location.streetAddress(); // 14 Church Road, Maidstone
impostor_gen.locale.location.fullAddress(); // Object containing all of the above
```

Phone module

```js
impostor_gen.locale.phone.mobile(); // 07345438492
impostor_gen.locale.phone.landline(); // 02034564521
```

Internet module

```js
impostor_gen.locale.internet.domain(); // .co.uk
impostor_gen.locale.internet.isp(); // BT
```

Vehicle module

```js
impostor_gen.locale.vehicle.plate(); // LX20 UHG
impostor_gen.locale.vehicle.vin(); // G6FYR746FGHTYUAIK
impostor_gen.locale.vehicle.taxClass(); // HGV
```
