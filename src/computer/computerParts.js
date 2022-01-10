// case, motherboard, ram, cpu, gpu, cooling, powerSupply, storage
const PATH = require("path");

// eslint-disable-next-line no-undef
const __DATA_PATH = PATH.join(__dirname, "..\\..\\dataSets\\computerParts\\");

const globalFunctions = require("../global");

const casePart = () => {
  const cases = [
    "Cooler Master Cosmos C700P",
    "Corsair Carbide 275R",
    "Phanteks Evolv X",
    "NZXT H210i",
    "Cooler Master Silencio S600",
    "Corsair Obsidian 1000D",
    "be quiet! Dark Base Pro 900",
    "Lian-Li PC-011 Dynamic",
    "Corsair 4000D Airflow",
    "NZXT H510",
    "Corsair iCUE 4000X RGB",
    "Corsair 4000D Airflow",
    "Lian Li PC-O11 Dynamic",
    "Lian Li O11 Dynamic Mini Snow Edition",
    "Cooler Master MasterBox Q300L",
    "Fractal Design Meshify C",
    "Phanteks Eclipse P300A Mesh",
    "RAIJINTEK Silenos Pro",
    "Corsair iCUE 4000X RGB",
    "Lian Li Lancool II Mesh",
    "Corsair 5000D AIRFLOW",
    "Corsair SPEC-DELTA RGB",
    "Phanteks Eclipse P300",
    "Lian Li O11 Dynamic Mini",
    "NZXT H510 Elite",
    "Phanteks Eclipse P360A",
    "Lian Li O11D XL-W",
    "Fractal Design Focus G",
    "Cooler Master MasterBox NR200",
    "Corsair iCUE 5000X RGB",
    "Corsair iCUE 220T RGB Airflow Black",
    "Lian Li LANCOOL 215",
    "Corsair iCUE 220T RGB Airflow White",
    "Cooler Master MasterBox NR200P",
    "Cooler Master MasterBox TD500 Mesh White w/ Controller",
    "Lian Li Lancool II Mesh",
    "Deepcool MATREXX 50 ADD-RGB 4F"
  ];

  return globalFunctions.randomArrayElement(cases);
}

const motherboard = () => {
  const motherboards = [
    "Asus TUF GAMING X570-PLUS (WI-FI)",
    "Asus ROG STRIX B550-F GAMING (WI-FI)",
    "MSI MAG B550 TOMAHAWK",
    "MSI B550-A PRO",
    "Asus ROG STRIX B450-F GAMING II",
    "Asus ROG STRIX B550-A GAMING",
    "ASRock B450M Pro4",
    "Asus PRIME B560-PLUS",
    "Gigabyte Z690 UD DDR4",
    "Asus PRIME B560M-A",
    "MSI B550M PRO-VDH WIFI",
    "MSI MPG B550 GAMING PLUS",
    "Asus ROG Strix X570-E Gaming",
    "MSI Z490-A PRO",
    "MSI MAG X570 TOMAHAWK WIFI",
    "Asus ROG MAXIMUS Z690 HERO",
    "MSI PRO Z690-A DDR4",
    "Asus ROG STRIX Z690-A GAMING WIFI D4",
    "Asus ROG Crosshair VIII Dark Hero",
    "MSI B450 TOMAHAWK MAX",
    "MSI MPG B550 GAMING EDGE WIFI",
    "MSI MPG Z490 GAMING PLUS",
    "Gigabyte B560M DS3H",
    "MSI H510M-A PRO",
    "Gigabyte B450M DS3H V2",
    "ASRock B550M Pro4",
    "Asus ROG Strix X570-I Gaming",
    "Asus TUF GAMING B560M-PLUS WIFI",
    "Gigabyte B450 AORUS PRO WIFI (rev. 1.0)",
    "Asus ROG STRIX B550-F GAMING",
    "Asus ROG ZENITH II EXTREME ALPHA",
    "ASRock Fatal1ty B450 Gaming-ITX/ac",
    "Gigabyte B550M DS3H",
    "MSI PRO Z690-A WIFI DDR4",
    "Gigabyte X570 AORUS ELITE WIFI",
    "Gigabyte B450M DS3H",
    "Asus PRIME Z690-P D4",
    "MSI MPG Z490 GAMING EDGE WIFI"
  ];

  return globalFunctions.randomArrayElement(motherboards);
}

const ram = () => {
  const ram = [
    "Corsair Vengeance LPX 16 GB",
    "Corsair Vengeance RGB Pro 16 GB",
    "Corsair Vengeance RGB Pro 32 GB",
    "G.Skill Ripjaws V Series 32 GB",
    "G.Skill Trident Z RGB 16 GB",
    "G.Skill Ripjaws V Series 16 GB",
    "Corsair Vengeance RGB Pro 16 GB",
    "Corsair Vengeance LPX 32 GB",
    "Corsair Dominator Platinum RGB 32 GB",
    "Crucial Ballistix 16 GB",
    "G.Skill Trident Z Neo 32 GB",
    "Corsair Vengeance LPX 16 GB",
    "Team T-FORCE VULCAN Z 16 GB",
    "Corsair Dominator Platinum 128 GB",
    "Crucial Ballistix 16 GB",
    "Corsair Vengeance RGB Pro SL 32 GB",
    "G.Skill Trident Z RGB 32 GB",
    "G.Skill Ripjaws V 16 GB",
    "Corsair Vengeance LPX 32 GB",
    "Crucial Ballistix RGB 16 GB",
    "G.Skill Ripjaws V 32 GB",
    "Corsair Vengeance RGB Pro 32 GB",
    "G.Skill Trident Z5 RGB 32 GB",
    "Crucial Ballistix 32 GB",
    "Silicon Power XPOWER Turbine 16 GB",
    "G.Skill Ripjaws V 16 GB",
    "Corsair Vengeance RGB Pro 16 GB",
    "Corsair Vengeance LPX 16 GB",
    "G.Skill Trident Z RGB 64 GB",
    "G.Skill Aegis 8 GB",
    "G.Skill Trident Z RGB 128 GB",
    "Kingston HyperX Fury 16 GB",
    "Crucial CT2K32G48C40U5 64 GB",
    "Corsair Vengeance RGB Pro 32 GB",
    "Silicon Power Gaming 16 GB",
    "G.Skill Trident Z RGB 16 GB",
    "Corsair Dominator Platinum RGB 32 GB",
    "G.Skill Trident Z Royal 32 GB",
    "G.Skill Trident Z Neo 16 GB",
    "Corsair Vengeance LPX 64 GB",
    "Team T-Force Delta RGB 16 GB",
    "Corsair Vengeance LPX 8 GB"
  ];

  return globalFunctions.randomArrayElement(ram);
}

const CPU = () => {
  const cpu = [
    "AMD Ryzen 5 5600X",
    "AMD Ryzen 7 5800X",
    "Intel Core i5-12600K",
    "AMD Ryzen 5 5600G",
    "AMD Ryzen 9 5900X",
    "AMD Ryzen 5 3600",
    "Intel Core i9-12900K",
    "Intel Core i7-12700K",
    "Intel Core i5-10400F",
    "AMD Ryzen 7 3700X",
    "AMD Ryzen 9 5950X",
    "Intel Core i7-10700K",
    "Intel Core i3-10100F",
    "AMD Ryzen 7 5700G",
    "Intel Core i7-11700K",
    "Intel Core i5-11600K",
    "Intel Core i5-10400",
    "Intel Core i5-11400",
    "AMD Ryzen 7 3800X",
    "Intel Core i5-11400F",
    "AMD Ryzen 3 3100",
    "Intel Core i9-11900K",
    "AMD Threadripper 3990X",
    "Intel Core i7-9700K",
    "Intel Core i9-10900K",
    "Intel Core i7-12700KF",
    "AMD Ryzen 5 3600X",
    "AMD Ryzen 5 2600",
    "Intel Core i3-10100",
    "AMD Ryzen 9 3900X",
    "Intel Core i9-9900K",
    "AMD Ryzen 5 1600 (12nm)",
    "Intel Core i5-9600K",
    "Intel Core i7-10700F",
    "AMD Athlon 3000G (14nm)",
    "Intel Core i9-12900KF",
    "Intel Core i5-9400F",
    "AMD Ryzen 3 3200G",
    "Intel Core i5-12600KF",
    "AMD Ryzen 7 2700X"
  ];

  return globalFunctions.randomArrayElement(cpu);
}

const GPU = () => {
  const gpu = [
    "EVGA XC GAMING",
    "MSI GTX 1050 Ti 4GT OC",
    "MSI VENTUS XS OC",
    "NVIDIA Founders Edition",
    "Asus DUAL EVO OC",
    "MSI GAMING X",
    "EVGA FTW3 ULTRA GAMING",
    "Asus Phoenix",
    "Zotac GAMING Twin Edge OC",
    "Asus ROG STRIX WHITE OC",
    "Geforce RTX 3080",
    "Geforce RTX 3090 Founders Edition",
    "Geforce RTX 3090",
    "Geforce RTX 3070",
    "Geforce RTX 2060",
    "Geforce RTX 2080",
    "Geforce RTX 2090",
    "Asus TUF GAMING OC",
    "Asus TUF GAMING OC",
    "MSI GAMING X TRIO",
    "EVGA FTW3 ULTRA GAMING LE iCX3",
    "Asus STRIX GAMING OC",
    "EVGA SC ULTRA GAMING",
    "Gigabyte GAMING OC",
    "EVGA KO ULTRA GAMING",
    "EVGA FTW3 ULTRA GAMING",
    "PNY VCQGV100-PB",
    "Asus Phoenix Fan OC",
    "XFX Speedster QICK 308 Black",
    "Asus STRIX GAMING OC",
    "EVGA XC3 ULTRA GAMING",
    "MSI VENTUS 3X OC",
    "Asus STRIX GAMING OC",
    "Asus ROG STRIX WHITE OC",
    "MSI GTX 1050 TI 4GT LP",
    "Asus ROG STRIX GAMING OC"
  ];

  return globalFunctions.randomArrayElement(gpu);
}

const CPUCooling = () => {
  const cooling = [
    "Cooler Master Hyper 212 RGB Black Edition",
    "Corsair iCUE H150i ELITE CAPELLIX",
    "Cooler Master Hyper 212 Black Edition",
    "Cooler Master MASTERLIQUID ML240L RGB V2",
    "Corsair iCUE H100i ELITE CAPELLIX",
    "NZXT Kraken X53",
    "Cooler Master Hyper 212 EVO",
    "Noctua NH-D15 chromax.black",
    "NZXT Kraken Z73",
    "be quiet! Dark Rock Pro 4",
    "Corsair iCUE H150i ELITE CAPELLIX",
    "Corsair iCUE H100i RGB PRO XT",
    "Noctua NH-D15",
    "NZXT Kraken X63",
    "Corsair iCUE H100i ELITE CAPELLIX"
  ];

  return globalFunctions.randomArrayElement(cooling);
}

const powerSupply = () => {
  const powerSupply = [
    "Corsair RM (2019)",
    "Corsair RMx (2021)",
    "Corsair RM (2019)",
    "EVGA BQ",
    "Corsair RM (2019)",
    "EVGA G3",
    "Corsair HX Platinum",
    "Corsair RMx (2018)",
    "Corsair SF",
    "Corsair CXM"
  ];

  return globalFunctions.randomArrayElement(powerSupply);
}

const storage = () => {
  const storage = [
    "Samsung 970 Evo Plus 1TB",
    "Seagate Barracuda Compute 2TB",
    "Western Digital Blue SN550 1TB",
    "Samsung 970 EVO Plus 2TB",
    "Samsung 970 Evo Plus 500GB",
    "Western Digital Blue SN550 500GB",
    "Samsung 980 Pro 2TB",
    "Samsung 980 Pro 1TB",
    "Western Digital Caviar Blue 1TB",
    "Samsung 870 Evo 1TB",
    "Samsung 980 1TB",
    "Kingston A400 240GB",
    "Samsung 870 QVO 2TB",
    "Team QX 15.3TB",
    "Crucial P2 1TB"
  ];

  return globalFunctions.randomArrayElement(storage);
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
