/* eslint-disable no-new */
import Control from '../utils/control';
import ItemGroup from '../utils/item_group';
import Btn from './btn';
import ChartWrapped from './chart_Wrapped';

export default class PageBox extends Control {
  constructor(parentNode, modifier, paginationList) {
    super(parentNode, 'section', `pagebox__wrapper pagebox__wrapper--${modifier}`);
    this.itemWrapper = new Control(this.node, 'div', 'pagebox__main');
    this.items = [];
    this.modifier = modifier;
    this.innerItems = [];
    this.titles = [];
    this.index = 0;
    this.btnFullScreen = new Btn(this.node, 'btn btn--full-screen', 'Open on full screen', () => {
      this.node.classList.toggle('pagebox__wrapper--full-screen');
      this.dispath('onFullScreen', this.modifier);
      if (modifier === 'chart') {
        for (let i = 0; i < 3; i += 1) {
          this.innerItems[i].chart.reRender();
        }
      }
    });

    this.pagination = new ItemGroup(this.node, 'div', 'pagebox__marks', 'pagebox__mark pagebox__mark--active', 'pagebox__mark');
    this.btnPrevious = new Btn(this.pagination.node, 'btn btn-index btn-index--previous', 'previous', () => {});
    this.pagination.addItem('div', paginationList[this.index]);
    this.btnPrevious = new Btn(this.pagination.node, 'btn btn-index btn-index--next', 'next', () => {});

    this.pagination.onSelect = (index) => {
      this.select(index);
    };
  }

  select(index, noEvent) {
    !noEvent && this.dispath('tabSelected', index);
    this.dispath('dataChange', index);
    // this.items.forEach((it, i) => it.node.style.display = (i != index) ? 'none' : '');
  }

  addItem(title, className, content) {
    console.log(content);
    this.page = new Control(this.itemWrapper.node, 'div', 'pagebox__page');
    this.title = new Control(this.page.node, 'h2', 'pagebox__title', `${title}`);
    this.titles.push(this.title);
    this.className = className;
    const item = new className(this.page.node, content);
    this.items.push(this.page);
    this.innerItems.push(item);
    let resizeTimeout;

    const resizeThrottler = () => {
      if (!resizeTimeout) {
        resizeTimeout = setTimeout(() => {
          resizeTimeout = null;
          this.innerItems.forEach((el) => {
            el.chart.reRender();
          });
        }, 200);
      }
    };

    if (this.item instanceof ChartWrapped) {
      window.addEventListener('resize', resizeThrottler, false);
    }
  }

  updateItem(title, className, content) {
    this.page = new Control(this.itemWrapper.node, 'div', 'pagebox__page');
    const titles = new Control(this.page.node, 'h2', 'pagebox__title', title);
    this.titles.push(titles);
    const item = new className(this.page.node, content);
    this.items.push(this.page);
    this.innerItems.push(item);
  }
}
