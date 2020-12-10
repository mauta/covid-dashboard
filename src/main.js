import Control from './utils/control';
import Footer from './block/footer';
import Header from './block/header';
import Cases from './block/cases';
import PageBox from './block/page_box';

// сделала хедер отдельным классом - вдруг что-то добавить захотим в него
const header = new Header();
const main = new Control(document.body, 'main', 'main');

// временаая заглушка - сюда надо подать данные всех случаев в мире
const allCases = 12554652878;
const cases = new Cases(main, allCases);

const mapBox = new PageBox(main.node, 'map');
mapBox.addItem('1', "first");
mapBox.addItem('2', "second");
mapBox.addItem('3', "third");

const listBox = new PageBox(main.node, 'list');
listBox.addItem('1', "first");
listBox.addItem('2', "second");
listBox.addItem('3', "third");

const tableBox = new PageBox(main.node, 'table');
tableBox.addItem('1', "first");
tableBox.addItem('2', "second");
tableBox.addItem('3', "third");

const chartBox = new PageBox(main.node, 'chart');
chartBox.addItem('1', "first");
chartBox.addItem('2', "second");
chartBox.addItem('3', "third");

// сделала футер отдельным классом - вдруг что-то добавить захотим в него
const footer = new Footer();
