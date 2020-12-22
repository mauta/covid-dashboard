/*eslint class-methods-use-this: ["error", { "exceptMethods": ["correctDate"]}] */
export default class ChartsAPI {
  constructor(json) {
    this.json = json;
  }

  chartGC(population = 0, arr = []) {
    this.json.forEach((keys) => {
      if (population !== 0) {
        arr.push([((keys.total_cases / population) * 100000).toFixed(2), keys.last_update.split('T').shift().substring(2)]);
      } else {
        arr.push([keys.total_cases, keys.last_update.split('T').shift().substring(2)]);
      };
    });
    return arr;
  }

  chartDC(population = 0, arr = []) {
    this.json.forEach((keys) => {
      if (population !== 0) {
        arr.push([((keys.total_deaths / population) * 100000).toFixed(2), keys.last_update.split('T').shift().substring(2)]);
      } else {
        arr.push([keys.total_deaths, keys.last_update.split('T').shift().substring(2)]);
      };
    });
    return arr;
  }

  chartRC(population = 0, arr = []) {
    this.json.forEach((keys) => {
      if (population !== 0) {
        arr.push([((keys.total_recovered / population) * 100000).toFixed(2), keys.last_update.split('T').shift().substring(2)]);
      } else {
        arr.push([keys.total_recovered, keys.last_update.split('T').shift().substring(2)]);
      };
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
        arr.push([(json[obj[i]] - json[obj[i - 1]]), objStr]);
      }
    }
    return arr;
  }

  chartByDay100(json, population, arr = []) {
    const obj = Object.keys(json);
    for (var i = 0; i < obj.length; i++) {
      let objStr = this.correctDate(obj[i]);
      if (i === 0) {
        arr.push([((json[obj[i]] / population) * 100000).toFixed(2), objStr]);
      } else {
        arr.push([(((json[obj[i]] - json[obj[i - 1]]) / population) * 100000).toFixed(2), objStr]);
      }
    }
    return arr;
  }

  chartByCountry(json, arr = []) {
    const obj = Object.keys(json);
    for (var i = 0; i < obj.length; i++) {
      let objStr = this.correctDate(obj[i]);
      arr.push([json[obj[i]], objStr]);
    }
    return arr;
  }

  chartByCountry100(json, jsonGlobal, country, arr = []) {
    console.log(json, jsonGlobal, country);
    let population;
    jsonGlobal.forEach((element) => {
      if (element.country === country) {
        population = element.population;
      }
    });
    const obj = Object.keys(json);
    for (var i = 0; i < obj.length; i++) {
      let objStr = this.correctDate(obj[i]);
      arr.push([((json[obj[i]] / population) * 100000).toFixed(2), objStr]);
    }
    return arr;
  }

  chartByDayCountry100(json, jsonGlobal, country, arr = []) {
    let population;
    jsonGlobal.forEach((element) => {
      if (element.country === country) {
        population = element.population;
      }
    });
    const obj = Object.keys(json);
    for (var i = 0; i < obj.length; i++) {
      let objStr = this.correctDate(obj[i]);
      if (i === 0) {
        arr.push([(((json[obj[i]]) / population) * 100000).toFixed(2), objStr]);
      } else {
        arr.push([(((json[obj[i]] - json[obj[i - 1]]) / population) * 100000).toFixed(2), objStr]);
      };
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
