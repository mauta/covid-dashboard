import Control from '../utils/control';

class PageBox extends Control {
  constructor(parentNode) {
    // передать обьект со стилям css
    super(parentNode, 'div', "pagebox_wrapper");
    this.itemWrapper = new Control(this.node, 'div', 'pagebox_main');
    this.items = [];
    this.pagination = new RadioGroup(this.node, 'pagebox_marks', 'pagebox_mark pagebox_mark__active', 'pagebox_mark');
    this.pagination.onSelect = (index) => {
      this.items.forEach((it, i) => it.node.style.display = (i != index) ? 'none' : ''); // может цсс-класс-модификатор
    };
  }

  addItem(caption, content) {
    //здесь можно подумать о том что в айтемы пишем и как
    //может передаем класс, может снаружи заполняем..
    this.items.push(new Control(this.itemWrapper.node, 'div', 'pagebox_page', content));
    this.pagination.addButton(caption);
  }
  //можно селект прокинуть повыше и эвенты
}
