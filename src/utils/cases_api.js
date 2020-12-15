/*eslint class-methods-use-this: ["error", { "exceptMethods": ["count", "globalCountSort"]}] */

export default class CasesAPI {
  constructor(json) {
    this.json = json;
  }

  count(massCases, country, value, flag = '') {
    massCases.push({
      src: flag,
      country,
      count: value,
    });
    return massCases;
  }

  globalCountCases(massCases = []) {
    this.json.forEach((keys) => {
      this.count(massCases, keys.country, keys.cases, keys.countryInfo.flag);
    });
    return massCases;
  }

  globalCountDeaths(massCases = []) {
    this.json.forEach((keys) => {
      this.count(massCases, keys.country, keys.deaths, keys.countryInfo.flag);
    });
    return massCases;
  }

  globalCountRecovered(massCases = []) {
    this.json.forEach((keys) => {
      this.count(massCases, keys.country, keys.recovered, keys.countryInfo.flag);
    });
    return massCases;
  }

  newCountCases(massCases = []) {
    this.json.forEach((keys) => {
      this.count(massCases, keys.country, keys.todayCases);
    });
    return massCases;
  }

  newCountDeaths(massCases = []) {
    this.json.forEach((keys) => {
      this.count(massCases, keys.country, keys.todayDeaths);
    });
    return massCases;
  }

  newCountRecovered(massCases = []) {
    this.json.forEach((keys) => {
      this.count(massCases, keys.country, keys.todayRecovered);
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
}
