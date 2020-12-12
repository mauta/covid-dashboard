/* eslint-disable no-new */
import Control from '../utils/control';
import ItemGroup from '../utils/item_group';
import BtnFullScreen from './btn_fullscreen';

import Chart from './chart';

export default class PageBox extends Control {
  constructor(parentNode, modifier) {
    super(parentNode, 'section', `pagebox__wrapper pagebox__wrapper--${modifier}`);
    this.itemWrapper = new Control(this.node, 'div', 'pagebox__main');

    this.btnFullScreen = new BtnFullScreen(this.node, () => {
      this.node.classList.toggle('pagebox__wrapper--full-screen');
      if (modifier === 'chart') {
        this.item.dispath('onResize');
      }
    });

    this.items = [];
    this.pagination = new ItemGroup(this.node, 'pagebox__marks', 'pagebox__mark pagebox__mark--active', 'pagebox__mark');
    this.pagination.onSelect = (index) => {
      this.items.forEach((it, i) => it.node.style.display = (i != index) ? 'none' : ''); // может цсс-класс-модификатор
    };
  }

  addItem(caption, title, className, content) {
    this.page = new Control(this.itemWrapper.node, 'div', 'pagebox__page');
    new Control(this.page.node, 'h2', 'pagebox__title', `Global ${title}`);
    this.item = new className(this.page.node, content);
    this.items.push(this.page);
    this.pagination.addItem(caption);

    let resizeTimeout;

    const resizeThrottler = () => {
      if (!resizeTimeout) {
        resizeTimeout = setTimeout(() => {
          resizeTimeout = null;
          this.item.reRender();
        }, 200);
      }
    };

    if (this.item instanceof Chart) {
      window.addEventListener('resize', resizeThrottler, false);
    }
  }
}
