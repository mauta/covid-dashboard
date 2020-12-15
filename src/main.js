/* eslint-disable no-new */
import Control from './utils/control';
import Footer from './block/footer';
import Header from './block/header';
import PageBox from './block/page_box';
import List from './block/list';
import Table from './block/table';
import ChartWrapped from './block/chart_Wrapped';
import CasesAPI from './utils/cases_api';
import MapWraper from './block/mapblock';
import DataAPI from './block/data_api';
import ChartsAPI from './block/charts_api';

const urlAPI = 'https://corona.lmao.ninja/v2/countries';
const url = 'https://covid19-api.org/api/timeline';
fetch(urlAPI).then((res) => res.json()).then((json) => {
  new Header();
  const main = new Control(document.body, 'main', 'main');
  const dataCaseAPI = new DataAPI(json, main);

  const mapBox = new PageBox(main.node, 'map');

  mapBox.addItem('GC', 'Cases', MapWraper);
  mapBox.addItem('GD', 'Cases', MapWraper);
  mapBox.addItem('GR', 'Cases', MapWraper);
  mapBox.pagination.select(0);

  const listBox = new PageBox(main.node, 'list');

  // константы ниже для хранения объектов с цифрами по каждой стране
  const caseAPI = new CasesAPI(json);
  const globalCases = caseAPI.globalCountSort(caseAPI.globalCountCases());
  const globalDeaths = caseAPI.globalCountSort(caseAPI.globalCountDeaths());
  const globalRecovered = caseAPI.globalCountSort(caseAPI.globalCountRecovered());

  //   const cases = new Cases(main, allCases.toLocaleString('ru-RU'));

  listBox.addItem('GC', 'Cases', List, globalCases);
  listBox.addItem('GD', 'Deaths', List, globalDeaths);
  listBox.addItem('GR', 'Recovered', List, globalRecovered);
  listBox.pagination.select(0);

  const tableBox = new PageBox(main.node, 'table');
  const tableData = dataCaseAPI.tableDataCase();
  const hundredData = dataCaseAPI.hundredDataCase();

  tableBox.addItem('GC', 'Cases', Table, tableData);
  tableBox.addItem('1/100 000', 'Cases', Table, hundredData);

  tableBox.pagination.select(0);

  const chartBox = new PageBox(main.node, 'chart');
  fetch(url).then((resChart) => resChart.json()).then((jsonChart) => {
    const chartsRequests = new ChartsAPI(jsonChart);
    console.log(chartsRequests.chartGS());
  });

  const arr = [
    [68, '15.03.20'],
    [32, '15.03.20'],
    [82, '16.06.20'],
    [1, '15.08.20'],
    [122, '15.03.20'],
    [12, '15.03.20'],
    [25, '20.12.20'],
  ];

  chartBox.addItem('GC', 'Cases', ChartWrapped, arr);
  chartBox.addItem('GD', 'Deaths', ChartWrapped, arr.concat(arr));
  chartBox.addItem('GR', 'Recover', ChartWrapped, arr);
  chartBox.pagination.select(0);

  const arrPageForSinhron = [chartBox, listBox, mapBox];

  // сюда передаем данные для отображения при выборе другой вкладки
  arrPageForSinhron.forEach((item) => {
    item.addListener('tabSelected', (index) => {
      arrPageForSinhron.forEach((el) => {
        if (el !== item) {
          el.select(index, true);
          el.pagination.select(index, true);
        }
      });
    });
  });
  new Footer();
});
