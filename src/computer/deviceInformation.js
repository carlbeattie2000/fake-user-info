const globalFunctions = require("../global");

const macAddress = () => [...Array(6)].map(() => globalFunctions.genRanHex(2)).join(":");

const systemSKU = () =>
  [...Array(7)].map(() => globalFunctions.genRanHex(1)).join("") + "#" + globalFunctions.genRanHex(3);

const softwareBuildID = () =>
  globalFunctions.genRanHex(11) + "#" + globalFunctions.genRanHex(4) + "#" + globalFunctions.genRanHex(4);

const motherboardID = () => globalFunctions.genRanHex(4);

const hardDriveID = () => globalFunctions.genRanHex(28);

const operatingSystem = () => {
  const operatingSystems = ["Linux", "Mac", "Windows 10", "Windows 11", "Windows 8", "Unix", "MS-DOS"];

  return operatingSystems[globalFunctions.randomMinMax(0, operatingSystems.length - 1)];
};

const lastBIOSUpdate = () => {
  return globalFunctions.genRanHex(5) + "#=::=" + globalFunctions.randomFullDate();
};

const createDeviceDetails = () => {
  return {
    operatingSystem: operatingSystem(),
    lastBIOSUpdate: lastBIOSUpdate(),
    macAddress: macAddress(),
    systemSKU: systemSKU(),
    softwareBuildID: softwareBuildID(),
    motherboardID: motherboardID(),
    hardDriveID: hardDriveID(),
  };
};

module.exports = {
  macAddress,
  systemSKU,
  softwareBuildID,
  motherboardID,
  hardDriveID,
  operatingSystem,
  lastBIOSUpdate,
};
