/* eslint-disable no-new */
import Control from './utils/control';
import Footer from './block/footer';
import Header from './block/header';
import Cases from './block/cases';
import PageBox from './block/page_box';
import List from './block/list';
import Table from './block/table';
import Chart from './block/chart';
import {
  globalCountCases,
  globalCountDeaths,
  globalCountRecovered,
  globalCountSort,
  newCountCases,
  newCountDeaths,
  newCountRecovered,
} from './utils/counting_cases';
import MapWraper from './block/mapblock';

const urlAPI = 'https://corona.lmao.ninja/v2/countries';
// fetch(urlAPI).then((res) => res.json()).then((json) => {
  const json = []
  new Header();
  const main = new Control(document.body, 'main', 'main');

  let allCases = 0;
  let newCases = 0;
  let alldeaths = 0;
  let newdeaths = 0;
  let allrecovered = 0;
  let newrecovered = 0;
  let hundredAllCase = 0;
  let hundredDeathsCase = 0;
  let hundredRecoveredsCase = 0;

  json.forEach((keys) => {
    allCases += keys.cases;
    newCases += keys.todayCases;
    alldeaths += keys.deaths;
    newdeaths += keys.todayDeaths;
    allrecovered += keys.recovered;
    newrecovered += keys.todayRecovered;
    hundredAllCase += keys.casesPerOneMillion / 10;
    hundredDeathsCase += keys.deathsPerOneMillion / 10;
    hundredRecoveredsCase += keys.recoveredPerOneMillion / 10;
  });

  const cases = new Cases(main, allCases.toLocaleString('ru-RU'));
  const mapBox = new PageBox(main.node, 'map');

  mapBox.addItem('GC', 'Cases', MapWraper);
  // mapBox.addItem('2', 'second');
  // mapBox.addItem('3', 'third');
  // new MapWraper(mapBox.node)

  const listBox = new PageBox(main.node, 'list');
  // константы ниже для хранения объектов с цифрами по каждой стране
  const globalCases = globalCountSort(globalCountCases(json));
  const globalDeaths = globalCountSort(globalCountDeaths(json));
  const globalRecovered = globalCountSort(globalCountRecovered(json));
  const newCasesCount = newCountCases(json);
  const newDeaths = newCountDeaths(json);
  const newRecovered = newCountRecovered(json);

  listBox.addItem('GC', 'Cases', List, globalCases);
  listBox.addItem('GD', 'Deaths', List, globalDeaths);
  listBox.addItem('GR', 'Recovered', List, globalRecovered);
  listBox.pagination.select(0);

  const tableBox = new PageBox(main.node, 'table');

  const tableData = {
    allCases: allCases.toLocaleString('ru-RU'),
    newCases: newCases.toLocaleString('ru-RU'),
    alldeaths: alldeaths.toLocaleString('ru-RU'),
    newdeaths: newdeaths.toLocaleString('ru-RU'),
    allrecovered: allrecovered.toLocaleString('ru-RU'),
    newrecovered: newrecovered.toLocaleString('ru-RU'),
  };

  const hundredData = {
    allCases: hundredAllCase.toLocaleString('ru-RU'),
    newCases: newCases.toLocaleString('ru-RU'),
    alldeaths: hundredDeathsCase.toLocaleString('ru-RU'),
    newdeaths: newdeaths.toLocaleString('ru-RU'),
    allrecovered: hundredRecoveredsCase.toLocaleString('ru-RU'),
    newrecovered: newrecovered.toLocaleString('ru-RU'),
  };

  tableBox.addItem('GC', 'Cases', Table, tableData);
  tableBox.addItem('1/100 000', 'Cases', Table, hundredData);

  tableBox.pagination.select(0);

  const chartBox = new PageBox(main.node, 'chart');

  const arr = [
    [68, '15.03.20'],
    [32, '15.03.20'],
    [82, '16.06.20'],
    [1, '15.08.20'],
    [122, '15.03.20'],
    [12, '15.03.20'],
    [25, '20.12.20'],
  ];

  chartBox.addItem('GC', 'Cases', Chart, arr);
  // tableBox.addItem('GD', 'Deaths', List, listData);
  // tableBox.addItem('GR', 'Recovered', List, listData);

  // сделала футер отдельным классом - вдруг что-то добавить захотим в него
  const footer = new Footer();
// });
