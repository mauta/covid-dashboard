import Cases from './cases';

export default class DataAPI {
  constructor(json, main) {
    this.json = json;
    this.allCases = 0;
    this.newCases = 0;
    this.alldeaths = 0;
    this.newdeaths = 0;
    this.allrecovered = 0;
    this.newrecovered = 0;
    this.hundredAllCase = 0;
    this.hundredDeathsCase = 0;
    this.hundredRecoveredsCase = 0;
    this.main = main;
    this.countCase(this.json);
  }

  countCase(json) {
    json.forEach((keys) => {
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
    const cases = new Cases(this.main, this.allCases.toLocaleString('ru-RU'));
  }

  tableDataCase() {
    const tableData = {
      allCases: this.allCases.toLocaleString('ru-RU'),
      newCases: this.newCases.toLocaleString('ru-RU'),
      alldeaths: this.alldeaths.toLocaleString('ru-RU'),
      newdeaths: this.newdeaths.toLocaleString('ru-RU'),
      allrecovered: this.allrecovered.toLocaleString('ru-RU'),
      newrecovered: this.newrecovered.toLocaleString('ru-RU'),
    };
    return tableData;
  }

  hundredDataCase() {
    const hundredData = {
      allCases: this.hundredAllCase.toLocaleString('ru-RU'),
      newCases: this.newCases.toLocaleString('ru-RU'),
      alldeaths: this.hundredDeathsCase.toLocaleString('ru-RU'),
      newdeaths: this.newdeaths.toLocaleString('ru-RU'),
      allrecovered: this.hundredRecoveredsCase.toLocaleString('ru-RU'),
      newrecovered: this.newrecovered.toLocaleString('ru-RU'),
    };
    return hundredData;
  }
}
