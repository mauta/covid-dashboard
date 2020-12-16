export default class ChartsAPI {
  constructor(json) {
    this.json = json;
    // this.chartGS(this.json);
  }

  chartGS() {
    const arrGS = [];
    this.json.forEach((keys) => {
      arrGS.push([keys.total_cases, keys.last_update]);
    });
    return arrGS;
  }
}
