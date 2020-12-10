import Control from './utils/control';
import Footer from './block/footer';
import Header from './block/header';
import Cases from './block/cases';
import PageBox from './block/page_box';
import List from './block/list';

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
  // const list = new List( РОДИТЕЛЬ , 'json');
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
  listBox.addItem('1', List, listData);

  // listBox.addItem('2', 'second');
  // listBox.addItem('3', 'third');

  const tableBox = new PageBox(main.node, 'table');
  // tableBox.addItem('1', 'first');
  // tableBox.addItem('2', 'second');
  // tableBox.addItem('3', 'third');

  const chartBox = new PageBox(main.node, 'chart');
  // chartBox.addItem('1', 'first');
  // chartBox.addItem('2', 'second');
  // chartBox.addItem('3', 'third');

  // сделала футер отдельным классом - вдруг что-то добавить захотим в него
  const footer = new Footer();
});
