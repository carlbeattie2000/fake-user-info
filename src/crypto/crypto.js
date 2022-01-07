const crypto = require("crypto");
const globalFunctions = require("../global");
// eth wallet address
function ethereumAddress() {
  //TODO: correctly generate a random, address instead of cheating to the end.
  return "0x" + crypto.randomBytes(20).toString("hex");
}

function bitcoinAddress() {
  //TODO: correctly generate a random, address instead of cheating to the end.
  return crypto.randomBytes(17).toString("hex");
}

function bitcoinPrivateKey() {
  return crypto.randomBytes(26).toString("hex");
}

function coin() {
  const coins = [
    {
      name: "Bitcoin",
      prefix: "BTC",
      marketCap: "$792,998,417,425",
      price: "$41,907.64",
      supply: "18,922,525 BTC",
      volume: "$80,525,600,254"
    },
    {
      name: "Ethereum",
      prefix: "ETH",
      marketCap: "$379,634,886,710",
      price: "$3,188.52",
      supply: "119,063,092 ETH",
      volume: "$24,735,268,982"
    },
    {
      name: "Tether",
      prefix: "USDT",
      marketCap: "$78,445,422,280",
      price: "$1.00",
      supply: "78,426,163,468 USDT",
      volume: "$83,659,344,531"
    },
    {
      name: "Binance Coin",
      prefix: "BNB",
      marketCap: "$75,651,930,955",
      price: "$453.12",
      supply: "166,801,148 BNB",
      volume: "$4,834,960,398"
    },
    {
      name: "Solana",
      prefix: "SOL",
      marketCap: "$43,612,446,110",
      price: "$140.14",
      supply: "311,207,039 SOL",
      volume: "$2,935,621,508"
    },
    {
      name: "USD Coin",
      prefix: "USDC",
      marketCap: "$43,271,421,850",
      price: "$1.00",
      supply: "43,265,310,774 USDC",
      volume: "$4,710,183,601"
    },
    {
      name: "Cardano",
      prefix: "ADA",
      marketCap: "$41,209,276,636",
      price: "$1.23",
      supply: "33,499,525,985 ADA",
      volume: "$1,941,976,832"
    },
    {
      name: "XRP",
      prefix: "XRP",
      marketCap: "$36,412,742,702",
      price: "$0.7638",
      supply: "47,577,198,013 XRP",
      volume: "$2,403,422,323"
    },
    {
      name: "Terra",
      prefix: "LUNA",
      marketCap: "$25,597,858,262",
      price: "$71.38",
      supply: "358,605,450 LUNA",
      volume: "$3,523,788,338"
    },
    {
      name: "Polkadot",
      prefix: "DOT",
      marketCap: "$25,481,968,093",
      price: "$25.73",
      supply: "987,579,315 DOT",
      volume: "$2,711,482,790"
    },
    {
      name: "Avalanche",
      prefix: "AVAX",
      marketCap: "$21,816,795,915",
      price: "$89.39",
      supply: "244,050,498 AVAX",
      volume: "$1,185,224,304"
    },
    {
      name: "Dogecoin",
      prefix: "DOGE",
      marketCap: "$20,601,953,774",
      price: "$0.155",
      supply: "132,670,764,300 DOGE",
      volume: "$972,533,959"
    },
    {
      name: "Shiba Inu",
      prefix: "SHIB",
      marketCap: "$16,066,899,267",
      price: "$0.00002926",
      supply: "549,063,278,876,302 SHIB",
      volume: "$1,289,398,520"
    },
    {
      name: "Polygon",
      prefix: "MATIC",
      marketCap: "$15,231,755,060",
      price: "$2.13",
      supply: "7,162,892,403 MATIC",
      volume: "$2,049,933,908"
    }
  ];

  return globalFunctions.randomArrayElement(coins);
}

function coinName() {
  const coins = [
    "Bitcoin",
    "Ethereum",
    "Tether",
    "Binance Coin",
    "Solana",
    "USD Coin",
    "Cardano",
    "XRP",
    "Terra",
    "Polkadot",
    "Avalanche",
    "Dogecoin",
    "Shiba Inu",
    "Polygon",
    "Binance USD",
    "Chainlink",
    "Crypto.com Coin",
    "Wrapped Bitcoin",
    "TerraUSD",
    "Uniswap",
    "NEAR Protocol",
    "Cosmos",
    "Algorand",
    "Dai",
    "Litecoin",
    "Fantom",
    "TRON",
    "Stellar",
    "Decentraland",
    "VeChain",
    "Hedera",
    "FTX Token",
    "Filecoin",
    "Axie Infinity",
    "The Sandbox",
    "Bitcoin BEP2",
    "Theta Network",
    "Ethereum Classic",
    "Elrond",
    "Helium",
    "Tezos"
  ];
  return globalFunctions.randomArrayElement(coins);
}

function coinPrefix() {
  const prefix = [
    "BTC",
    "ETH",
    "USDT",
    "BNB",
    "SOL",
    "USDC",
    "ADA",
    "XRP",
    "LUNA",
    "DOT",
    "AVAX",
    "DOGE",
    "SHIB",
    "MATIC",
    "BUSD",
    "LINK",
    "CRO",
    "WBTC",
    "UST",
    "UNI",
    "NEAR",
    "ATOM",
    "ALGO",
    "DAI",
    "LTC",
    "BCH",
    "FTM",
    "TRX",
    "XLM",
    "ICP",
    "MANA",
    "VET",
    "HBAR",
    "FTT",
    "FIL",
    "AXS"
  ];

  return globalFunctions.randomArrayElement(prefix);
}

module.exports = {
  ethereumAddress,
  bitcoinAddress,
  bitcoinPrivateKey,
  coin,
  coinName,
  coinPrefix,
};