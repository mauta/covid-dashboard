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
const apiDay = 'https://disease.sh/v3/covid-19/historical/all?lastdays=366';
fetch(urlAPI).then((res) => res.json()).then((json) => {
  new Header();
  const main = new Control(document.body, 'main', 'main');
  const dataCaseAPI = new DataAPI(json, main);
  const cases = new Cases(main, dataCaseAPI.countCases);

  // константы ниже для хранения объектов с цифрами по каждой стране
  const caseAPI = new CasesAPI(json);
  const populationAll = caseAPI.countPopulation();
  const globalCases = caseAPI.globalCountSort(caseAPI.globalCountCases());
  const globalDeaths = caseAPI.globalCountSort(caseAPI.globalCountDeaths());
  const globalRecovered = caseAPI.globalCountSort(caseAPI.globalCountRecovered());
  const lastCases = caseAPI.globalCountSort(caseAPI.newCountCases());
  const lastDeaths = caseAPI.globalCountSort(caseAPI.newCountDeaths());
  const lastRecovered = caseAPI.globalCountSort(caseAPI.newCountRecovered());
  const globalCases100 = caseAPI.globalCountSort(caseAPI.globalCountCases100());
  const globalDeaths100 = caseAPI.globalCountSort(caseAPI.globalCountDeaths100());
  const globalRecovered100 = caseAPI.globalCountSort(caseAPI.globalCountRecovered100());
  const lastCases100 = caseAPI.globalCountSort(caseAPI.newCountCases100());
  const lastDeaths100 = caseAPI.globalCountSort(caseAPI.newCountDeaths100());
  const lastRecovered100 = caseAPI.globalCountSort(caseAPI.newCountRecovered100());

  // cписок вкладок для карты, и списка
  const pagList = ['all cases', 'all deaths', 'all recovered', 'last cases', 'last deaths', 'last recovered',
    'all cases/100 000', 'all deaths/100 000', 'all recovered/100 000',
    'last cases/100 000', 'last deaths/100 000', 'last recovered/100 000',
  ];


  // cписок вкладок для графика
  const chartList = ['all cases', 'all deaths', 'all recovered', 'cases by day', 'deaths by day', 'recovered by day',
    'all cases/100 000', 'all deaths/100 000', 'all recovered/100 000',
    'cases/100 000 by day', 'deaths/100 000 by day', 'recovered/100 000 by day'
  ];

  const dataList = [globalCases, globalDeaths, globalRecovered, lastCases, lastDeaths, lastRecovered,
    globalCases100, globalDeaths100, globalRecovered100, lastCases100, lastDeaths100, lastRecovered100,
  ];

  // cписок вкладок для таблицы
  const tabletList = ['all', 'last', 'all/100 000', 'last/100 000'];
  const tabArr = ['globalCases', 'globalDeaths', 'globalRecovered', 'lastCases', 'lastDeaths', 'lastRecovered',
    'globalCases100', 'globalDeaths100', 'globalRecovered100', 'lastCases100', 'lastDeaths100', 'lastRecovered100'
  ];

  // переменные ниже будут с соответствующими данными
  const lastCases = caseAPI.globalCountSort(caseAPI.newCountCases());
  const lastDeaths = caseAPI.globalCountSort(caseAPI.newCountDeaths());
  const lastRecovered = caseAPI.globalCountSort(caseAPI.newCountRecovered());
  const globalCases100 = caseAPI.globalCountSort(caseAPI.globalCountCases100());
  const globalDeaths100 = caseAPI.globalCountSort(caseAPI.globalCountDeaths100());
  const globalRecovered100 = caseAPI.globalCountSort(caseAPI.globalCountRecovered100());
  const lastCases100 = caseAPI.globalCountSort(caseAPI.newCountCases100());
  const lastDeaths100 = caseAPI.globalCountSort(caseAPI.newCountDeaths100());
  const lastRecovered100 = caseAPI.globalCountSort(caseAPI.newCountRecovered100());


  fetch(apiDay).then((resChartDay) => resChartDay.json()).then((jsonChartDay) => {
    const chartsRequestsDay = new ChartsAPI(jsonChartDay);
    const chartsRequestsAllDay = chartsRequestsDay.chartByDay(jsonChartDay.cases);
    const chartsRequestsDeathsDay = chartsRequestsDay.chartByDay(jsonChartDay.deaths);
    const chartsRequestsRecoveredDay = chartsRequestsDay.chartByDay(jsonChartDay.recovered);

    const chartsRequestsAllDay100 = chartsRequestsDay.chartByDay(jsonChartDay.cases, populationAll);
    const chartsRequestsDeathsDay100 = chartsRequestsDay.chartByDay(jsonChartDay.deaths, populationAll);
    const chartsRequestsRecoveredDay100 = chartsRequestsDay.chartByDay(jsonChartDay.recovered, populationAll);

    fetch(url).then((resChart) => resChart.json()).then((jsonChart) => {
      const chartsRequests = new ChartsAPI(jsonChart);
      const chartsRequestsAll = chartsRequests.chartGC().reverse();
      const chartsRequestsAllDeaths = chartsRequests.chartDC().reverse();
      const chartsRequestsAllRec = chartsRequests.chartRC().reverse();

      const chartsRequestsAll100 = chartsRequests.chartGC(populationAll).reverse();
      const chartsRequestsAllDeaths100 = chartsRequests.chartDC(populationAll).reverse();
      const chartsRequestsAllRec100 = chartsRequests.chartRC(populationAll).reverse();

      let dataTable = [chartsRequestsAll, chartsRequestsAllDeaths, chartsRequestsAllRec, chartsRequestsAllDay, chartsRequestsDeathsDay, chartsRequestsRecoveredDay,
        chartsRequestsAll100, chartsRequestsAllDeaths100, chartsRequestsAllRec100, chartsRequestsAllDay100, chartsRequestsDeathsDay100, chartsRequestsRecoveredDay100,
      ];

      const chartBox = new PageBox(main.node, 'chart', chartList);
      chartBox.addItem('World', ChartWrapped, dataTable[0]);

      const mapBox = new PageBox(main.node, 'map', pagList);
      mapBox.addItem('World', MapWraper, dataList[0], json);

      const listBox = new PageBox(main.node, 'list', pagList);
      listBox.addItem('World', List, dataList[0]);

      mapBox.item.addListener('onMapCountrySelect', (country) => {
        const indexCountry = listBox.item.countries.indexOf(country);
        listBox.item.select(indexCountry, true);
        listBox.item.items[indexCountry].node.scrollIntoView();
      });

      const tableBox = new PageBox(main.node, 'table', tabletList);

      const arrPageForSinhron = [chartBox, listBox, mapBox];
      const arrPageForHidden = [chartBox, listBox, mapBox, tableBox];;
      const tableCases = [tableBox];
      const chartCases = [chartBox];

      let tableDataAllCase = dataCaseAPI.tableDataCaseAll();
      let tableDataLastCase = dataCaseAPI.tableDataCaseLast();
      let tableDataAllHundred = dataCaseAPI.hundredDataCaseAll();
      let tableDataLastHundred = dataCaseAPI.hundredDataCaseLast();
      let pageDataList = [tableDataAllCase, tableDataLastCase, tableDataAllHundred, tableDataLastHundred];
      tableBox.addItem('World', Table, tableDataAllCase);

      cases.search.addListener('onSearchCountry', (country) => {
        const indexCountry = listBox.item.countries.indexOf(country);
        listBox.item.select(indexCountry, true);
        listBox.item.items[indexCountry].node.scrollIntoView();
        
  // cписок вкладок для карты, и списка
//   const pagList = ['all cases', 'all deaths', 'all recovered', 'last cases', 'last deaths', 'last recovered',
//     'all cases/100 000', 'all deaths/100 000', 'all recovered/100 000',
//     'last cases/100 000', 'last deaths/100 000', 'last recovered/100 000',
//   ];

//   // cписок вкладок для графика
//   const chartList = ['all cases', 'all deaths', 'all recovered', 'last cases', 'last deaths', 'last recovered',
//     'all cases/100 000', 'all deaths/100 000', 'all recovered/100 000',
//     'last cases/100 000', 'last deaths/100 000', 'last recovered/100 000',
//   ];

//   const dataList = [globalCases, globalDeaths, globalRecovered, lastCases, lastDeaths, lastRecovered,
//     globalCases100, globalDeaths100, globalRecovered100, lastCases100, lastDeaths100, lastRecovered100,
//   ];


//   // cписок вкладок для таблицы
//   const tabletList = ['all', 'last', 'all/100 000', 'last/100 000'];

//   // так будут у тебя называться переменные внутри геоджейсона
//   const tabArr = ['globalCases', 'globalDeaths', 'globalRecovered', 'lastCases', 'lastDeaths', 'lastRecovered',
//     'globalCases100', 'globalDeaths100', 'globalRecovered100', 'lastCases100', 'lastDeaths100', 'lastRecovered100'
//   ];


//   // пока пусть просто arr, на свежую голову сделаю

//   const dataTable = [arr, arr.concat(arr), arr.concat(arr).concat(arr), arr, arr.concat(arr), arr.concat(arr).concat(arr),
//     arr, arr, arr, arr, arr, arr,
//   ];

//   const mapBox = new PageBox(main.node, 'map', pagList);
//   mapBox.addItem('World', MapWraper, dataList[0], json);


//   const listBox = new PageBox(main.node, 'list', pagList);
//   listBox.addItem('World', List, dataList[0]);


//   const chartBox = new PageBox(main.node, 'chart', chartList);
//   chartBox.addItem('World', ChartWrapped, dataTable[0]);

//   mapBox.item.addListener('onMapCountrySelect', (country) => {
//     const indexCountry = listBox.item.countries.indexOf(country);
//     listBox.item.select(indexCountry, true);
//     listBox.item.items[indexCountry].node.scrollIntoView();
//   });

//   // fetch(url).then((resChart) => resChart.json()).then((jsonChart) => {
//   //   const chartsRequests = new ChartsAPI(jsonChart);
//   //   console.log(chartsRequests.chartGS());
//   // });


//   const tableBox = new PageBox(main.node, 'table', tabletList);


//   const arrPageForSinhron = [chartBox, listBox, mapBox];
//   const arrPageForHidden = [chartBox, listBox, mapBox, tableBox];
//   // const countryTitleCases = [chartBox, tableBox, mapBox];

//   const tableCases = [tableBox];


//   let tableDataAllCase = dataCaseAPI.tableDataCaseAll();
//   let tableDataLastCase = dataCaseAPI.tableDataCaseLast();
//   let tableDataAllHundred = dataCaseAPI.hundredDataCaseAll();
//   let tableDataLastHundred = dataCaseAPI.hundredDataCaseLast();

//   let pageDataList = [tableDataAllCase, tableDataLastCase, tableDataAllHundred, tableDataLastHundred];

//   tableBox.addItem('World', Table, tableDataAllCase);

//   cases.search.addListener('onSearchCountry', (country) => {
//     const indexCountry = listBox.item.countries.indexOf(country);
//     listBox.item.select(indexCountry, true);
//     listBox.item.items[indexCountry].node.scrollIntoView();
//   });

//   listBox.item.addListener('onSelectedCountry', (country) => {
//     // это нужный кусок для карты
//     const countryJson = json.filter((key) => key.country === country);
//     mapBox.item.map.flyTo({
//       center: [
//         countryJson[0].countryInfo.long,
//         countryJson[0].countryInfo.lat,
//       ],
//       zoom: 4,
//       essential: true,
//     });
//     const dataCaseAPICountry = new DataAPI(json, main, country);
//     tableDataAllCase = dataCaseAPICountry.tableDataCaseAll();
//     tableDataLastCase = dataCaseAPICountry.tableDataCaseLast();
//     tableDataAllHundred = dataCaseAPICountry.hundredDataCaseAll();
//     tableDataLastHundred = dataCaseAPICountry.hundredDataCaseLast();
//     pageDataList = [tableDataAllCase, tableDataLastCase, tableDataAllHundred, tableDataLastHundred];
//     tableBox.updateItem(country, Table, tableDataAllCase);
//     tableCases[0].pagination.node.innerText = tabletList[0];
//     tableCases[0].index = 0;
//     // здесь пока не настоящие данные в таблице
//     // const chartDataCountry = dataTable[1];
//     // chartBox.updateItem2(chartDataCountry);

//     const tableDataCountry = dataCaseAPICountry.tableDataCaseAll();
//   });

//   arrPageForHidden.forEach((item) => {
//     item.addListener('onFullScreen', (modifier) => {
//       const arrPageHide = arrPageForHidden.filter((el) => el.modifier !== modifier);
//       arrPageHide.forEach((el) => {
//         if (el.node.classList.contains('pagebox__wrapper--hide')) {
//           el.node.classList.remove('pagebox__wrapper--hide');
//           document.body.style.gridTemplateRows = '';
//           main.node.style.gridTemplateRows = '';
//         } else {
//           el.node.classList.toggle('pagebox__wrapper--hide');
//           document.body.style.gridTemplateRows = '82px calc(100vh - 158px) 50px';
//           main.node.style.gridTemplateRows = '1fr';
//         }

      });

      let pageIndex = 0;

      listBox.item.addListener('onSelectedCountry', (country) => {
        // это нужный кусок для карты
        const countryJson = json.filter((key) => key.country === country);
        mapBox.item.map.flyTo({
          center: [
            countryJson[0].countryInfo.long,
            countryJson[0].countryInfo.lat,
          ],
          zoom: 4,
          essential: true,
        });
        const dataCaseAPICountry = new DataAPI(json, main, country);
        tableDataAllCase = dataCaseAPICountry.tableDataCaseAll();
        tableDataLastCase = dataCaseAPICountry.tableDataCaseLast();
        tableDataAllHundred = dataCaseAPICountry.hundredDataCaseAll();
        tableDataLastHundred = dataCaseAPICountry.hundredDataCaseLast();
        pageDataList = [tableDataAllCase, tableDataLastCase, tableDataAllHundred, tableDataLastHundred];
        tableBox.updateItem(country, Table, tableDataAllCase);
        tableCases[0].pagination.node.innerText = tabletList[0];
        tableCases[0].index = 0;

        const chartCountry = `https://disease.sh/v3/covid-19/historical/${country}?lastdays=366`;
        fetch(chartCountry).then((apiChart) => apiChart.json()).then((jsonchartCountry) => {
          const chartsRequestsCountry = new ChartsAPI(jsonchartCountry);
          const chartsRequestsAllCountry = chartsRequestsCountry.chartByCountry(jsonchartCountry.timeline.cases);
          const chartsRequestsDeathsCountry = chartsRequestsCountry.chartByCountry(jsonchartCountry.timeline.deaths);
          const chartsRequestsRecoveredCountry = chartsRequestsCountry.chartByCountry(jsonchartCountry.timeline.recovered);

          const chartsRequestsAllCountryDay = chartsRequestsCountry.chartByDay(jsonchartCountry.timeline.cases);
          const chartsRequestsDeathsCountryDay = chartsRequestsCountry.chartByDay(jsonchartCountry.timeline.deaths);
          const chartsRequestsRecoveredCountryDay = chartsRequestsCountry.chartByDay(jsonchartCountry.timeline.recovered);

          dataTable = [chartsRequestsAllCountry, chartsRequestsDeathsCountry, chartsRequestsRecoveredCountry,
            chartsRequestsAllCountryDay, chartsRequestsDeathsCountryDay, chartsRequestsRecoveredCountryDay,
            arr, arr, arr, arr, arr, arr,
          ];

          // const chartDataCountry = dataTable[0];
          // chartCases[0].pagination.node.innerText = chartList[0];
          // chartCases[0].index = 0;
          chartBox.updateItem(country, ChartWrapped, dataTable[pageIndex]);
        });
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


//   arrPageForSinhron.forEach((item) => {
//     item.pagination.addListener('tabSelected', (index) => {
//       arrPageForSinhron.forEach((el) => {
//         el.pagination.node.innerText = pagList[index];
//         el.index = index;
//         if (el.modifier === 'chart') {
//           el.updateItem2(dataTable[index]);
//         } else {
//           //           el.updateItem1(dataList[index]);
//           el.updateItem1(dataList[index], tabArr[index]);
//         }

      // chartBox.addListener('dataChange', (index) => {
      //   const newCapthion = chartBox.pagination.captions[index];
      //   const newTitle = chartBox.titles[index];
      //   const allArr = [arr, arr.concat(arr), arr.concat(arr).concat(arr)];
      //   chartBox.updateItem(newCapthion, newTitle, ChartWrapped, allArr[index]);
      // });

      arrPageForSinhron.forEach((item) => {
        item.pagination.addListener('tabSelected', (index) => {
          pageIndex = index;
          arrPageForSinhron.forEach((el) => {
            if (el.modifier === 'chart') {
              el.pagination.node.innerText = chartList[index];
              el.updateItem2(dataTable[index]);
            } else {
              el.pagination.node.innerText = pagList[index];
              el.updateItem1(dataList[index], tabArr[index]);
            }
            el.index = index;
            // if (el.modifier === 'chart') {
            //   el.updateItem2(dataTable[index]);
            // } else {
            //   el.updateItem1(dataList[index], tabArr[index]);
            // }
          });
        });

      });

      tableCases.forEach((item) => {
        item.pagination.addListener('tabSelected', (index) => {
          tableCases.forEach((el) => {
            el.pagination.node.innerText = tabletList[index];
            el.index = index;
            el.updateItem1(pageDataList[index]);
          });
        });
      });
    });
  });
// =======
//   // chartBox.addListener('dataChange', (index) => {
//   //   const newCapthion = chartBox.pagination.captions[index];
//   //   const newTitle = chartBox.titles[index];
//   //   const allArr = [arr, arr.concat(arr), arr.concat(arr).concat(arr)];
//   //   chartBox.updateItem(newCapthion, newTitle, ChartWrapped, allArr[index]);
//   // });

//   arrPageForSinhron.forEach((item) => {
//     item.pagination.addListener('tabSelected', (index) => {
//       arrPageForSinhron.forEach((el) => {
//         el.pagination.node.innerText = pagList[index];
//         el.index = index;
//         if (el.modifier === 'chart') {
//           el.updateItem2(dataTable[index]);
//         } else {

//           //           el.updateItem1(dataList[index]);
//           el.updateItem1(dataList[index], tabArr[index]);
//         }
//       });
//     });
//   });

//   tableCases.forEach((item) => {
//     item.pagination.addListener('tabSelected', (index) => {
//       tableCases.forEach((el) => {
//         el.pagination.node.innerText = tabletList[index];
//         el.index = index;
//         el.updateItem1(pageDataList[index]);
//       });
//     });
//   });

// >>>>>>> develop
  new Footer();
});
