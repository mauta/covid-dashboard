export default class DataAPI {
  constructor(json, main, country = '') {
    console.log(country)
    this.json = json;
    this.country = country;
    this.allCases = 0;
    this.newCases = 0;
    this.alldeaths = 0;
    this.newdeaths = 0;
    this.allrecovered = 0;
    this.newrecovered = 0;
    this.hundredAllCase = 0;
    this.hundredDeathsCase = 0;
    this.hundredRecoveredsCase = 0;
    this.hundredNewAllCase = 0;
    this.hundredNewDeathsCase = 0;
    this.hundredNewRecoveredsCase = 0;
    this.population = 0;
    this.main = main;
    this.countCase(this.json);
    if (country !== '') {
      this.countCaseCountry(this.json, this.country);
    }
  }

  countCase(json) {
    json.forEach((keys) => {
      this.population += keys.population;
      this.allCases += keys.cases;
      this.newCases += keys.todayCases;
      this.alldeaths += keys.deaths;
      this.newdeaths += keys.todayDeaths;
      this.allrecovered += keys.recovered;
      this.newrecovered += keys.todayRecovered;
      this.hundredAllCase += keys.casesPerOneMillion / 10;
      this.hundredDeathsCase += keys.deathsPerOneMillion / 10;
      this.hundredRecoveredsCase += keys.recoveredPerOneMillion / 10;
    });
    this.hundredNewAllCase = (this.newCases / this.population) * 100000;
    this.hundredNewDeathsCase = (this.newdeaths / this.population) * 100000;
    this.hundredNewRecoveredsCase = (this.newrecovered / this.population) * 100000;
    this.countCases = this.allCases.toLocaleString('ru-RU');
    return this.countCases;
  }

  countCaseCountry(json, country) {
    json.forEach((keys) => {
      if (keys.country === country) {
        this.population = keys.population;
        this.allCases = keys.cases;
        this.newCases = keys.todayCases;
        this.alldeaths = keys.deaths;
        this.newdeaths = keys.todayDeaths;
        this.allrecovered = keys.recovered;
        this.newrecovered = keys.todayRecovered;
        this.hundredAllCase = keys.casesPerOneMillion / 10;
        this.hundredDeathsCase = keys.deathsPerOneMillion / 10;
        this.hundredRecoveredsCase = keys.recoveredPerOneMillion / 10;
      }
      this.hundredNewAllCase = (this.newCases / this.population) * 100000;
      this.hundredNewDeathsCase = (this.newdeaths / this.population) * 100000;
      this.hundredNewRecoveredsCase = (this.newrecovered / this.population) * 100000;
    });
  }

  tableDataCaseAll() {
    const tableData = {
      cases: this.allCases.toLocaleString('ru-RU'),
      deaths: this.alldeaths.toLocaleString('ru-RU'),
      recovered: this.allrecovered.toLocaleString('ru-RU'),
    };
    return tableData;
  }

  tableDataCaseLast() {
    const tableData = {
      cases: this.newCases.toLocaleString('ru-RU'),
      deaths: this.newdeaths.toLocaleString('ru-RU'),
      recovered: this.newrecovered.toLocaleString('ru-RU'),
    };
    return tableData;
  }

  hundredDataCaseAll() {
    const hundredData = {
      cases: this.hundredAllCase.toFixed(2).toLocaleString('ru-RU'),
      deaths: this.hundredDeathsCase.toFixed(2).toLocaleString('ru-RU'),
      recovered: this.hundredRecoveredsCase.toFixed(2).toLocaleString('ru-RU'),
    };
    return hundredData;
  }

  hundredDataCaseLast() {
    const hundredData = {
      cases: this.hundredNewAllCase.toFixed(2).toLocaleString('ru-RU'),
      deaths: this.hundredNewDeathsCase.toFixed(2).toLocaleString('ru-RU'),
      recovered: this.hundredNewRecoveredsCase.toFixed(2).toLocaleString('ru-RU'),
    };
    return hundredData;
  }
}
