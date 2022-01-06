const userAgentCreation = require("./user-agent");

const globalFunctions = require("../../global");

function IPV4() {
  return (
    globalFunctions.randomMinMax(0, 255).toString() +
    "." +
    globalFunctions.randomMinMax(0, 255).toString() +
    "." +
    globalFunctions.randomMinMax(0, 255).toString() +
    "." +
    globalFunctions.randomMinMax(0, 255).toString()
  );
}

function IPV6() {
  return (
    globalFunctions.genRanHex(4) +
    ":" +
    globalFunctions.genRanHex(4) +
    ":" +
    globalFunctions.genRanHex(4) +
    ":" +
    globalFunctions.genRanHex(4) +
    ":" +
    globalFunctions.genRanHex(4) +
    ":" +
    globalFunctions.genRanHex(4) +
    ":" +
    globalFunctions.genRanHex(4) +
    ":" +
    globalFunctions.genRanHex(4)
  );
}

function domainName() {
  let domainsExtensions = [
    ".com", 
    ".co.uk", 
    ".org", 
    ".io", 
    ".tech", 
    ".uk", 
    ".org", 
    ".eu", 
    ".london", 
    ".me", 
    ".ltd", 
    ".me.uk"
  ];
  let domains = [
    "full-page",
    "integrated",
    "centrist",
    "impact",
    "starship",
    "passageway",
    "orthodoxy",
    "tobacco",
    "skyline",
    "governorship",
    "capable",
    "failure",
    "screen",
    "slog",
    "scripture",
    "to-do",
    "patent",
    "lander",
    "camcorder",
    "neat",
    "civilian",
    "priceless",
    "fishing",
    "scarcity",
    "re-enact",
    "hedge",
    "puff",
    "goal",
    "surface",
    "liturgy",
    "forested",
    "ravages",
    "vengeance",
    "historian",
    "exploit",
    "distribute",
    "trace",
    "virtual",
    "shorts",
    "palatable",
    "renaissance",
    "close",
    "say",
    "estimation",
    "rational",
    "twitch",
    "witchcraft",
    "abrasive",
    "buffet",
    "effective",
    "balm",
    "incoming",
    "totalitarian",
    "politicization",
    "cultivar",
    "contextual",
    "muscular",
    "colored",
    "console",
    "elite",
    "twin",
    "bent",
    "paraphernalia",
    "log",
    "current",
    "convey",
    "coffeehouse",
    "goblet",
    "vandalism",
    "retool",
    "credo",
    "legion",
    "fluff",
    "zebra",
    "cue",
    "fulfillment",
    "flash",
    "commercial",
    "critic",
    "unsuitable",
    "bracelet",
    "exclusive",
    "experiment",
    "unhappy",
    "innkeeper",
    "extramarital",
    "polish",
    "marquee",
    "washed",
    "vanquished",
    "immense",
    "malpractice",
    "equal",
    "shaking",
    "rocky",
    "disfigure",
    "warrior",
    "deli",
    "engrave",
    "trekyell",
    "extreme",
    "evaluative",
    "hippie",
    "compelling",
    "productive",
    "current",
    "copyright",
    "wheel",
    "snowfall",
    "adept",
    "dedication",
    "stirring",
    "blueberry",
    "fund-raiser",
    "redefine",
    "tag",
    "anathema",
    "journal",
    "fellow",
    "downside",
    "anomaly",
    "ever-increasing",
    "testicle",
    "disobedience",
    "genealogy",
    "self-worth",
    "whisk",
    "cloak",
    "aspect",
    "ascertain",
    "fetch",
    "gutter",
    "vacationer",
    "teammate",
    "planner",
    "inexperienced",
    "termite",
    "head",
    "usher",
    "impose",
    "absentee",
    "mania",
    "industrialization",
    "anglo-american",
    "run",
    "veiled",
    "finale",
    "improvement",
    "air-conditioning",
    "shelter",
    "paraphrase",
    "fist",
    "overarching",
    "field",
    "stroller",
    "soft",
    "ruddy",
    "turban",
    "ominous",
    "canvas",
    "pedagogical",
    "homosexual",
    "place",
    "functionality",
    "surname",
    "cliche",
    "lapel",
    "counsel",
    "penchant",
    "spacious",
    "revert",
    "devolve",
    "iron",
    "combination",
    "triathlon",
    "lullaby",
    "riding",
    "hijack",
    "skiing",
    "tantrum",
    "adversity",
    "nag",
    "freighter",
    "hyperactive",
    "yelp",
    "greenery",
    "jiggle",
    "pitch",
    "centimeter",
    "maxim",
    "reggae",
    "finality",
    "cohort",
    "boomer",
    "discourage",
    "collaborator",
    "sacrifice",
    "proverb",
    "foray"
  ];

  return (
    domains[globalFunctions.randomMinMax(0, domains.length - 1)] +
    domainsExtensions[globalFunctions.randomMinMax(0, domainsExtensions.length - 1)]
  );
}

function URL() {
  return "https://" + domainName();
}

function userAgent() {
  return userAgentCreation.generate();
}

function password() {
  return Math.random().toString(36).slice(2);
}

function protocol() {
  const protocols = [
    "SSL",
    "FTP",
    "TCP",
    "SMTP",
    "POP",
    "HTTP"
  ];

  return protocols[globalFunctions.randomMinMax(0, protocols.length - 1)];
}

function httpMethod() {
  const methods = [
    "GET",
    "POST",
    "HEAD",
    "PUT",
    "DELETE",
    "CONNECT",
    "OPTIONS",
    "TRACE",
    "PATCH"
  ];

  return methods[globalFunctions.randomMinMax(0, methods.length - 1)];
}

function port() {
  return globalFunctions.randomMinMax(0, 49151);
}

const arrayIPV4 = (amount) => [...Array(amount)].map(() => IPV4());
const arrayIPV6 = (amount) => [...Array(amount)].map(() => IPV6());
const arrayDomainName = (amount) => [...Array(amount)].map(() => domainName());
const arrayURL = (amount) => [...Array(amount)].map(() => URL());
const arrayUserAgents = (amount) => [...Array(amount)].map(() => userAgent());
const arrayPasswords = (amount) => [...Array(amount)].map(() => password());
const arrayProtocol = (amount) => [...Array(amount)].map(() => protocol());
const arrayHttpMethod = (amount) => [...Array(amount)].map(() => httpMethod());

function arrayDeviceHistory(arrayLength = 1) {
  return {
    accountLogOnHistory: globalFunctions.createArrayOfRandomFullDate(arrayLength),
    accountLoggedInFromHistory: arrayIPV4(arrayLength),
    accountDeviceConnectedHistory: arrayUserAgents(arrayLength),
  };
}

module.exports = {
  IPV4,
  IPV6,
  domainName,
  URL,
  password,
  protocol,
  httpMethod,
  port,
  arrayIPV4,
  arrayIPV6,
  arrayDomainName,
  arrayURL,
  arrayUserAgents,
  arrayDeviceHistory,
  arrayPasswords,
  arrayProtocol,
  arrayHttpMethod
};
