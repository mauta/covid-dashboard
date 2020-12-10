import Control from './utils/control';
import Footer from './block/footer';
import Header from './block/header';
import Cases from './block/cases';
import PageBox from './block/page_box';
import List from './block/list';
import Table from './block/table';

const urlAPI = 'https://corona.lmao.ninja/v2/countries';
fetch(urlAPI).then((res) => res.json()).then((json) => {
  // сделала хедер отдельным классом - вдруг что-то добавить захотим в него
  const header = new Header();
  const main = new Control(document.body, 'main', 'main');

  const allCases = json.reduce((acc, el) => {
    acc += el.cases;
    return acc;
  }, 0);

  const cases = new Cases(main, allCases.toLocaleString('ru-RU'));

  const mapBox = new PageBox(main.node, 'map');

  // mapBox.addItem('1', 'first');
  // mapBox.addItem('2', 'second');
  // mapBox.addItem('3', 'third');

  const listBox = new PageBox(main.node, 'list');
  // просто придуманные данные, сама реши какой формат для них будет
  const listData = [{
      src: '',
      country: 'german',
      count: 125456,
    },
    {
      src: '',
      country: 'german',
      count: 12325456,
    },
    {
      src: '',
      country: 'german',
      count: 1645453,
    },
    {
      src: '',
      country: 'german',
      count: 125456,
    },
    {
      src: '',
      country: 'german',
      count: 1255636,
    },
    {
      src: '',
      country: 'german',
      count: 1252342356,
    },
    {
      src: '',
      country: 'german',
      count: 122345456,
    },

  ];
  listBox.addItem('GC', 'Cases', List, listData);
  listBox.addItem('GD', 'Deaths', List, listData);
  listBox.addItem('GR', 'Recovered', List, listData);
  listBox.pagination.select(0);

  const tableBox = new PageBox(main.node, 'table');
  // просто придуманные данные, сама реши какой формат для них будет
  const tableData = {
    allCases: allCases.toLocaleString('ru-RU'),
    newCases: 1564687454,
    alldeaths: 1545313,
    newdeaths: 1534,
    allrecovered: 1123547,
    newrecovered: 2454,
  };

  tableBox.addItem('GC', 'Cases', Table, tableData);
  tableBox.addItem('1/10 000', 'Cases', Table, tableData);
  tableBox.pagination.select(0);

  const chartBox = new PageBox(main.node, 'chart');
  // tableBox.addItem('GC', 'Cases', List, listData);
  // tableBox.addItem('GD', 'Deaths', List, listData);
  // tableBox.addItem('GR', 'Recovered', List, listData);

  // сделала футер отдельным классом - вдруг что-то добавить захотим в него
  const footer = new Footer();
});
