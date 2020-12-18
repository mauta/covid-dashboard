/* eslint-disable max-len */
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
import Cases from './block/cases';
import ChartsAPI from './block/charts_api';

const urlAPI = 'https://corona.lmao.ninja/v2/countries';
const url = 'https://covid19-api.org/api/timeline';
fetch(urlAPI).then((res) => res.json()).then((json) => {
  new Header();
  const main = new Control(document.body, 'main', 'main');
  const dataCaseAPI = new DataAPI(json, main);
  const cases = new Cases(main, dataCaseAPI.countCases);

  // константы ниже для хранения объектов с цифрами по каждой стране
  const caseAPI = new CasesAPI(json);
  const globalCases = caseAPI.globalCountSort(caseAPI.globalCountCases());
  const globalDeaths = caseAPI.globalCountSort(caseAPI.globalCountDeaths());
  const globalRecovered = caseAPI.globalCountSort(caseAPI.globalCountRecovered());
  const arr = [
    [68, '15.03.20'],
    [74, '15.03.20'],
    [82, '16.06.20'],
    [1, '15.08.20'],
    [122, '15.03.20'],
    [12, '15.03.20'],
    [25, '20.12.20'],
  ];

  // список показателей для пагинации - надо дописать все 12 пунктов
  const pagList = ['all cases', 'all deaths', 'all recovered', 'last cases', 'last deaths', 'last recovered'];
  // список данных для пагинации - надо дописать все 12 пунктов, в той же очередности
  const dataList = [globalCases, globalDeaths, globalRecovered, globalCases, globalDeaths, globalRecovered];

  // список показателей для пагинации в таблице - надо дописать все пункты
  const tabList = ['all cases', 'all deaths', 'all recovered', 'last cases', 'last deaths', 'last recovered'];
  // список данных для пагинации - надо дописать все 12 пунктов, в той же очередности
  const dataTable = [arr, arr.concat(arr), arr.concat(arr).concat(arr), arr, arr.concat(arr), arr.concat(arr).concat(arr)];

  const mapBox = new PageBox(main.node, 'map', pagList);
  mapBox.addItem('World', MapWraper, dataList[0]);

  const listBox = new PageBox(main.node, 'list', pagList);
  listBox.addItem('World', List, dataList[0]);

  const chartBox = new PageBox(main.node, 'chart', tabList);
  chartBox.addItem('World', ChartWrapped, dataTable[0]);

  mapBox.item.addListener('onMapCountrySelect', (country) => {
    const indexCountry = listBox.item.countries.indexOf(country);
    listBox.item.select(indexCountry, true);
    listBox.item.items[indexCountry].node.scrollIntoView();
  });

  // fetch(url).then((resChart) => resChart.json()).then((jsonChart) => {
  //   const chartsRequests = new ChartsAPI(jsonChart);
  //   console.log(chartsRequests.chartGS());
  // });

  const tableBox = new PageBox(main.node, 'table', pagList);

  const arrPageForSinhron = [chartBox, listBox, mapBox];
  const arrPageForHidden = [chartBox, listBox, mapBox, tableBox];
  const countryTitleCases = [chartBox, tableBox, mapBox];

  const tableData = dataCaseAPI.tableDataCase();
  const hundredData = dataCaseAPI.hundredDataCase();
  tableBox.addItem('World', Table, tableData);

  cases.search.addListener('onSearchCountry', (country) => {
    const indexCountry = listBox.item.countries.indexOf(country);
    listBox.item.select(indexCountry, true);
    listBox.item.items[indexCountry].node.scrollIntoView();
  });

  listBox.item.addListener('onSelectedCountry', (country) => {
    const dataCaseAPICountry = new DataAPI(json, main, country);
    const tableDataCountry = dataCaseAPICountry.tableDataCase();
    // здесь пока кривая функция для обновления данных в таблице
    tableBox.updateItem(country, Table, tableDataCountry);
    // здесь пока не настоящие данные в таблице
    const chartDataCountry = dataTable[1];
    chartBox.updateItem(country, ChartWrapped, chartDataCountry);
  });

  arrPageForHidden.forEach((item) => {
    item.addListener('onFullScreen', (modifier) => {
      const arrPageHide = arrPageForHidden.filter((el) => el.modifier !== modifier);
      arrPageHide.forEach((el) => {
        if (el.node.classList.contains('pagebox__wrapper--hide')) {
          el.node.classList.remove('pagebox__wrapper--hide');
          document.body.style.gridTemplateRows = '';
          main.node.style.gridTemplateRows = '';
        } else {
          el.node.classList.toggle('pagebox__wrapper--hide');
          document.body.style.gridTemplateRows = '82px calc(100vh - 158px) 50px';
          main.node.style.gridTemplateRows = '1fr';
        }
      });
    });
  });

  // chartBox.addListener('dataChange', (index) => {
  //   const newCapthion = chartBox.pagination.captions[index];
  //   const newTitle = chartBox.titles[index];
  //   const allArr = [arr, arr.concat(arr), arr.concat(arr).concat(arr)];
  //   chartBox.updateItem(newCapthion, newTitle, ChartWrapped, allArr[index]);
  // });

  arrPageForSinhron.forEach((item) => {
    item.pagination.addListener('tabSelected', (index) => {
      arrPageForSinhron.forEach((el) => {
        el.pagination.node.innerText = pagList[index];
        el.index = index;
        el.updateItem(el.titleName, el.className, dataList[index]);
        if (el.modifier === 'chart') {
          el.updateItem(el.titleName, el.className, dataTable[index]);
        }
      });
    });
  });

  new Footer();
});
