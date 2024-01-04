export interface CardTemplate {
  name: string;
  cardNumberTemplates: string[];
  cvvTemplate: string;
  sortNumberTemplate: string;
  accountNumberTemplate: string;
}

export interface Currency {
  name: string;
  shorthand: string;
  symbol: string;
  countryCode: string;
}

export interface TransactionObject {
  date: string;
  description: string;
  oldBalance: number;
  newBalance: number;
  IN: number;
  OUT: number;
}

export interface Finance {
  banks: string[];
  cardTemplates: CardTemplate[];
  currency: Currency;
  transactionDescriptions: string[];
}

export interface Internet {
  domainNames: string[];
  domains: string[];
  isps: string[];
}

export interface Location {
  cities: string[];
  counties: string[];
  countries: string[];
  districts: string[];
  postcodes?: string[];
  zipCodes?: string[];
  streets: string[];
}

export interface AddressObject {
  buildingNumber: string;
  street: string;
  city: string;
  postcode: string;
  county: string;
  country: string;
}

export interface Names {
  firstNames: {
    male: string[];
    female: string[];
  };
  lastNames: string[];
}

export interface Person {
  emailExtensions: string[];
  jobAreas: string[];
  jobTitles: string[];
  names: Names;
}

export interface Mobile {
  digitCode: string[];
  countryCode: string;
}

export interface Phone {
  mobile: Mobile;
  landline: string[];
}

export interface Vehicle {
  ageIdentifiers: string[];
  memoryTags: string[];
  taxClasses: string[];
}
