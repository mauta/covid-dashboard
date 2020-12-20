export default class ChartsAPI {
  constructor(json) {
    this.json = json;
  }

  chartGC() {
    const arr = [];
    this.json.forEach((keys) => {
      arr.push([keys.total_cases, keys.last_update.split('T').shift()]);
    });
    return arr;
  }

  chartDC() {
    const arr = [];
    this.json.forEach((keys) => {
      arr.push([keys.total_deaths, keys.last_update.split('T').shift()]);
    });
    return arr;
  }

  chartRC() {
    const arr = [];
    this.json.forEach((keys) => {
      arr.push([keys.total_recovered, keys.last_update.split('T').shift()]);
    });
    return arr;
  }
}
