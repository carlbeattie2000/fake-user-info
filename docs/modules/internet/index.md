<h1 align="center">🌐 Internet 🌐</h1>

- [IPV4](#ipv4)
- [IPV6](#ipv6)
- [domain](#domain)
- [URL](#url)
- [userAgent](#useragent)
- [httpMethod](#httpmethod)
- [port](#port)

##### Create the instance
```js
const impostor_js = require("./src/impostor");

const impostor_gen = new impostor({ countryCode: "en_GB" });
```

#### IPV4
```js
impostor_gen.internet.IPV4(); // 12.223.213.152
```

#### IPV6
```js
impostor_gen.internet.IPV6(); // 9ac8:a396:e618:4b8c:298d:b8b2:9acb:83e4
```

#### domain
```js
impostor_gen.internet.domain(); // slog.com
```

#### URL
```js
impostor_gen.internet.URL(); // https://re-enact.london
```

#### userAgent
```js
impostor_gen.internet.userAgent();
// Mozilla/5.0 (Windows; U; Windows NT 6.1) AppleWebKit/531.2.1 (KHTML, like Gecko) Chrome/25.0.836.0 Safari/531.2.1
```

#### httpMethod
```js
impostor_gen.internet.httpMethod(); // GET
```

#### port
```js
impostor_gen.internet.port(); // 3000
```
