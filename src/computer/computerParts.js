// case, motherboard, ram, cpu, gpu, cooling, powerSupply, storage
const PATH = require("path");

const __DATA_PATH = PATH.join(__dirname, "..\\..\\dataSets\\computerParts\\");

const globalFunctions = require("../../global");

function computerCase() {
  const cases = globalFunctions.getJSONContentArray("cases.json", __DATA_PATH);

  return cases[globalFunctions.randomMinMax(0, cases.length - 1)];
}

function computerMotherboard() {
  const motherboards = globalFunctions.getJSONContentArray("motherBoards.json", __DATA_PATH);

  return motherboards[globalFunctions.randomMinMax(0, motherboards.length - 1)];
}

function computerRam() {
  const ram = globalFunctions.getJSONContentArray("ram.json", __DATA_PATH);

  return ram[globalFunctions.randomMinMax(0, ram.length - 1)];
}

function computerCPU() {
  const cpu = globalFunctions.getJSONContentArray("cpu.json", __DATA_PATH);

  return cpu[globalFunctions.randomMinMax(0, cpu.length - 1)];
}

function computerGPU() {
  const gpu = globalFunctions.getJSONContentArray("gpu.json", __DATA_PATH);

  return gpu[globalFunctions.randomMinMax(0, gpu.length - 1)];
}

function computerCPUCooling() {
  const cooling = globalFunctions.getJSONContentArray("cpuCoolers.json", __DATA_PATH);

  return cooling[globalFunctions.randomMinMax(0, cooling.length - 1)];
}

function computerPowerSupply() {
  const powerSupply = globalFunctions.getJSONContentArray("powerSupply.json", __DATA_PATH);

  return powerSupply[globalFunctions.randomMinMax(0, powerSupply.length - 1)];
}

function computerStorage() {
  const storage = globalFunctions.getJSONContentArray("storage.json", __DATA_PATH);

  return storage[globalFunctions.randomMinMax(0, storage.length - 1)];
}

function buildPC() {
  return {
    case: computerCase(),
    motherboard: computerMotherboard(),
    ram: computerRam(),
    cpu: computerCPU(),
    gpu: computerGPU(),
    cpuCooling: computerCPUCooling(),
    powerSupply: computerPowerSupply(),
    storage: computerStorage(),
  };
}

module.exports = {
  computerCase,
  computerMotherboard,
  computerRam,
  computerCPU,
  computerGPU,
  computerCPUCooling,
  computerPowerSupply,
  computerStorage,
  buildPC,
};
