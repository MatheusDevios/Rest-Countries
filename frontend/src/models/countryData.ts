export default class countryData {
  name: { common: string; official: string };
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  flags: {
    svg: string;
    alt: string;
  };
  continents: string[];
  capital: string;
  languages: {
    [key: string]: {
      name: string;
    };
  };
  region: string;
  population: number;
  subregion: string;
  coatOfArms: { svg: string; png: string };

  constructor(
    name: { common: string; official: string },
    currencies: {
      [key: string]: {
        name: string;
        symbol: string;
      };
    },
    flags: {
      svg: string;
      alt: string;
    },
    continents: string[],
    capital: string,
    languages: {
      [key: string]: {
        name: string;
      };
    },
    region: string,
    population: number,
    subregion: string,
    coatOfArms: { svg: string; png: string }
  ) {
    this.name = name;
    this.currencies = currencies;
    this.flags = flags;
    this.continents = continents;
    this.capital = capital;
    this.languages = languages;
    this.region = region;
    this.population = population;
    this.subregion = subregion;
    this.coatOfArms = coatOfArms;
  }
}
