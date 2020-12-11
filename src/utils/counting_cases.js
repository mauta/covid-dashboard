function count(massCases, country, value, flag = '') {
  massCases.push({
    src: flag,
    country: country,
    count: value
  });
  return massCases;
}

export function globalCountCases(json, massCases = []) {
  json.forEach(keys => {
    count(massCases, keys.country, keys.cases, keys.countryInfo.flag);
  });
  return massCases;
}

export function globalCountDeaths(json, massCases = []) {
  json.forEach(keys => {
    count(massCases, keys.country, keys.deaths, keys.countryInfo.flag);
  });
  return massCases;
}

export function globalCountRecovered(json, massCases = []) {
  json.forEach(keys => {
    count(massCases, keys.country, keys.recovered, keys.countryInfo.flag);
  });
  return massCases;
}

export function newCountCases(json, massCases = []) {
  json.forEach(keys => {
    count(massCases, keys.country, keys.todayCases);
  });
  return massCases;
}

export function newCountDeaths(json, massCases = []) {
  json.forEach(keys => {
    count(massCases, keys.country, keys.todayDeaths);
  });
  return massCases;
}

export function newCountRecovered(json, massCases = []) {
  json.forEach(keys => {
    count(massCases, keys.country, keys.todayRecovered);
  });
  return massCases;
}

export function globalCountSort(massCases) {
  massCases.sort(function (a, b) {
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
