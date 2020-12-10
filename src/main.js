import Control from './utils/control';
import Footer from './block/footer';
import Header from './block/header';
import Cases from './block/cases';

// сделала хедер отдельным классом - вдруг что-то добавить захотим в него
const header = new Header();
const main = new Control(document.body, 'main', 'main');
console.log(main.node)
// временаая заглушка - сюда надо подать данные всех случаев в мире
const allCases = 12554652878;
const cases = new Cases(main, allCases);

// сделала футер отдельным классом - вдруг что-то добавить захотим в него
const footer = new Footer();
