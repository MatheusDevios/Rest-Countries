export default class countryExpampleData {
  flags: {
    svg: string;
  };
  name: {
    common: string;
  };
  population: number;
  languages: {
    [key: string]: string;
  };
  capital: Array<string>;

  constructor(
    flags: { svg: string },
    name: { common: string },
    population: number,
    languages: { [key: string]: string },
    capital: Array<string>
  ) {
    this.flags = flags;
    this.name = name;
    this.population = population;
    this.languages = languages;
    this.capital = capital;
  }
}
