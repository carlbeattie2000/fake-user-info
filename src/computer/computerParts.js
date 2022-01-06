// case, motherboard, ram, cpu, gpu, cooling, powerSupply, storage
const PATH = require("path");

// eslint-disable-next-line no-undef
const __DATA_PATH = PATH.join(__dirname, "..\\..\\dataSets\\computerParts\\");

const globalFunctions = require("../../global");

function casePart() {
  const cases = globalFunctions.getJSONContentArray("cases.json", __DATA_PATH);

  return cases[globalFunctions.randomMinMax(0, cases.length - 1)];
}

function motherboard() {
  const motherboards = globalFunctions.getJSONContentArray("motherBoards.json", __DATA_PATH);

  return motherboards[globalFunctions.randomMinMax(0, motherboards.length - 1)];
}

function ram() {
  const ram = globalFunctions.getJSONContentArray("ram.json", __DATA_PATH);

  return ram[globalFunctions.randomMinMax(0, ram.length - 1)];
}

function CPU() {
  const cpu = globalFunctions.getJSONContentArray("cpu.json", __DATA_PATH);

  return cpu[globalFunctions.randomMinMax(0, cpu.length - 1)];
}

function GPU() {
  const gpu = globalFunctions.getJSONContentArray("gpu.json", __DATA_PATH);

  return gpu[globalFunctions.randomMinMax(0, gpu.length - 1)];
}

function CPUCooling() {
  const cooling = globalFunctions.getJSONContentArray("cpuCoolers.json", __DATA_PATH);

  return cooling[globalFunctions.randomMinMax(0, cooling.length - 1)];
}

function powerSupply() {
  const powerSupply = globalFunctions.getJSONContentArray("powerSupply.json", __DATA_PATH);

  return powerSupply[globalFunctions.randomMinMax(0, powerSupply.length - 1)];
}

function storage() {
  const storage = globalFunctions.getJSONContentArray("storage.json", __DATA_PATH);

  return storage[globalFunctions.randomMinMax(0, storage.length - 1)];
}

function buildPC() {
  return {
    case: casePart(),
    motherboard: motherboard(),
    ram: ram(),
    cpu: CPU(),
    gpu: GPU(),
    cpuCooling: CPUCooling(),
    powerSupply: powerSupply(),
    storage: storage(),
  };
}

module.exports = {
  casePart,
  motherboard,
  ram,
  CPU,
  GPU,
  CPUCooling,
  powerSupply,
  storage,
  buildPC,
};
