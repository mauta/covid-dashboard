import Control from '../utils/control';
import ItemGroup from '../utils/item_group';

export default class PageBox extends Control {
  constructor(parentNode, modifier) {
    super(parentNode, 'section', `pagebox__wrapper pagebox__wrapper--${modifier}`);
    this.itemWrapper = new Control(this.node, 'div', 'pagebox__main');
    this.items = [];
    this.pagination = new ItemGroup(this.node, 'pagebox__marks', 'pagebox__mark pagebox__mark--active', 'pagebox__mark');
    this.pagination.onSelect = (index) => {
      this.items.forEach((it, i) => it.node.style.display = (i != index) ? 'none' : ''); // может цсс-класс-модификатор
    };
  }

  addItem(caption, content) {
    // здесь можно подумать о том что в айтемы пишем и как
    // может передаем класс, может снаружи заполняем..
    this.items.push(new Control(this.itemWrapper.node, 'div', 'pagebox__page', content));
    this.pagination.addItem(caption);
  }
  // можно селект прокинуть повыше и эвенты
}
