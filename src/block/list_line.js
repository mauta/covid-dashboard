import Control from '../utils/control';
import Toggle from '../utils/toggle';
import Img from './img';


export default class ListLine extends Toggle {
  constructor(parentNode, data) {
    super(parentNode, 'li', 'list__item--active', 'list__item');
    // написала что дата это объект - но смотри как удобнее - переделывай
    this.flag = new Img(this.node, 'list__flag', data.src, data.country);
    this.country = new Control(this.node, 'div', 'list__country', data.country);
    this.count = new Control(this.node, 'div', 'list__count', data.count.toLocaleString('ru-RU'));
  }
}
