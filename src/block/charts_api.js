/*eslint class-methods-use-this: ["error", { "exceptMethods": ["correctDate"]}] */
export default class ChartsAPI {
  constructor(json) {
    this.json = json;
  }

  chartGC(arr = []) {
    this.json.forEach((keys) => {
      arr.push([keys.total_cases, keys.last_update.split('T').shift().substring(2)]);
    });
    return arr;
  }

  chartDC(arr = []) {
    this.json.forEach((keys) => {
      arr.push([keys.total_deaths, keys.last_update.split('T').shift().substring(2)]);
    });
    return arr;
  }

  chartRC(arr = []) {
    this.json.forEach((keys) => {
      arr.push([keys.total_recovered, keys.last_update.split('T').shift().substring(2)]);
    });
    return arr;
  }

  chartByDay(json, arr = []) {
    const obj = Object.keys(json);
    for (var i = 0; i < obj.length; i++) {
      let objStr = this.correctDate(obj[i]);
      if (i === 0) {
        arr.push([json[obj[i]], objStr]);
      } else {
        arr.push([json[obj[i]] - json[obj[i - 1]], objStr]);
      }
    }
    return arr;
  }

  correctDate(obj) {
    let objStr = obj.split('/');
    if (objStr[0].length === 1) {
      objStr[0] = `0${objStr[0]}`;
    };
    if (objStr[1].length === 1) {
      objStr[1] = `0${objStr[1]}`;
    };
    objStr = `${objStr[2]}-${objStr[0]}-${objStr[1]}`;
    return objStr;
  }
}
