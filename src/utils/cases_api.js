/* eslint-disable max-len */
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["count", "globalCountSort", "replaceCountry"]}] */

export default class CasesAPI {
  constructor(json) {
    this.json = json;
  }

  countPopulation() {
    let poputation = 0;
    this.json.forEach((keys) => {
      poputation += keys.population;
    });
    return poputation;
  }

  count(massCases, country, value, iso3, flag = '') {
    massCases.push({
      src: flag,
      country,
      count: value,
      countryInfo: iso3,
    });
    return massCases;
  }

  globalCountCases(massCases = []) {
    this.json.forEach((keys) => {
      this.count(massCases, keys.country, keys.cases, keys.countryInfo.iso3, keys.countryInfo.flag);
    });
    return massCases;
  }

  globalCountCases100(massCases = []) {
    this.json.forEach((keys) => {
      this.count(massCases, keys.country, (keys.casesPerOneMillion / 10).toFixed(2), keys.countryInfo.iso3, keys.countryInfo.flag);
    });
    return massCases;
  }

  globalCountDeaths(massCases = []) {
    this.json.forEach((keys) => {
      this.count(massCases, keys.country, keys.deaths, keys.countryInfo.iso3, keys.countryInfo.flag);
    });
    return massCases;
  }

  globalCountDeaths100(massCases = []) {
    this.json.forEach((keys) => {
      this.count(massCases, keys.country, (keys.deathsPerOneMillion / 10).toFixed(2), keys.countryInfo.iso3, keys.countryInfo.flag);
    });
    return massCases;
  }

  globalCountRecovered(massCases = []) {
    this.json.forEach((keys) => {
      this.count(massCases, keys.country, keys.recovered, keys.countryInfo.iso3, keys.countryInfo.flag);
    });
    return massCases;
  }

  globalCountRecovered100(massCases = []) {
    this.json.forEach((keys) => {

      this.count(massCases, keys.country, (keys.recoveredPerOneMillion / 10).toFixed(2), keys.countryInfo.iso3, keys.countryInfo.flag);
    });
    return massCases;
  }

  newCountCases(massCases = []) {
    this.json.forEach((keys) => {
      this.count(massCases, keys.country, keys.todayCases, keys.countryInfo.iso3, keys.countryInfo.flag);
    });
    return massCases;
  }

  newCountDeaths(massCases = []) {
    this.json.forEach((keys) => {
      this.count(massCases, keys.country, keys.todayDeaths, keys.countryInfo.iso3, keys.countryInfo.flag);
    });
    return massCases;
  }

  newCountRecovered(massCases = []) {
    this.json.forEach((keys) => {
      this.count(massCases, keys.country, keys.todayRecovered, keys.countryInfo.iso3, keys.countryInfo.flag);
    });

    return massCases;
  }

  newCountCases100(massCases = []) {
    this.json.forEach((keys) => {
      if (isNaN(keys.todayCases / keys.population)) {
        this.count(massCases, keys.country, 0, keys.countryInfo.iso3, keys.countryInfo.flag);
      }
      else {
        this.count(massCases, keys.country, ((keys.todayCases / keys.population) * 100000).toFixed(2), keys.countryInfo.iso3, keys.countryInfo.flag);
      }
    });
    return massCases;
  }

  newCountDeaths100(massCases = []) {
    this.json.forEach((keys) => {
      if (isNaN(keys.todayCases / keys.population)) {
        this.count(massCases, keys.country, 0, keys.countryInfo.iso3, keys.countryInfo.flag);
      }
      else {
        this.count(massCases, keys.country, ((keys.todayDeaths / keys.population) * 100000).toFixed(2), keys.countryInfo.iso3, keys.countryInfo.flag);
      }
    });
    return massCases;
  }

  newCountRecovered100(massCases = []) {
    this.json.forEach((keys) => {
      if (isNaN(keys.todayCases / keys.population)) {
        this.count(massCases, keys.country, 0, keys.countryInfo.iso3, keys.countryInfo.flag);
      }
      else {
        this.count(massCases, keys.country, ((keys.todayRecovered / keys.population) * 100000).toFixed(2), keys.countryInfo.iso3, keys.countryInfo.flag);
      }
    });

    return massCases;
  }

newCountDeaths100(massCases = []) {
    this.json.forEach((keys) => {
      this.count(massCases, keys.country, (keys.todayDeaths / keys.population) * 100000, keys.countryInfo.iso3, keys.countryInfo.flag);
    });
    return massCases;
  }

newCountRecovered100(massCases = []) {
    this.json.forEach((keys) => {
      this.count(massCases, keys.country, (keys.todayRecovered / keys.population) * 100000, keys.countryInfo.iso3, keys.countryInfo.flag);
    });

    return massCases;
  }

  globalCountSort(massCases) {
    massCases.sort((a, b) => {
      if (a.count > b.count) {
        return -1;
      }
      if (a.count < b.count) {
        return 1;
      }
      return 0;
    });
    return massCases;
  }

  //Curaçao, Côte d'Ivoire, Réunion
  replaceCountry(mass) {
    mass.forEach((key) => {
      if (key.country === 'Curaçao') {
        key.country = 'Curacao'
      };
      if (key.country === `Côte d'Ivoire`) {
        key.country = 'Ivory Coast'
      };
      if (key.country === `Réunion`) {
        key.country = 'Reunion'
      };
    })
    return mass;
  }
}
