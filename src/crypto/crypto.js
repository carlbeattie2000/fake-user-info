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

module.exports = {
  ethereumAddress,
  bitcoinAddress,
  bitcoinPrivateKey,
  coinName
};