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
    this.paginationList = paginationList;
    this.btnFullScreen = new Btn(this.node, 'btn btn--full-screen', 'Open on full screen', () => {
      this.node.classList.toggle('pagebox__wrapper--full-screen');
      this.dispath('onFullScreen', this.modifier);
      if (modifier === 'chart') {
        for (let i = 0; i < 3; i += 1) {
          // здесь переделать ререндер
          this.innerItems[i].chart.reRender();
        }
      }
    });

    this.pagWrap = new Control(this.node, 'div', 'pagebox__marks');
    this.btnPrevious = new Btn(this.pagWrap.node, 'btn btn-index btn-index--previous', 'previous', () => {
      this.index = (this.index - 1 + this.paginationList.length) % this.paginationList.length;
      this.pagination.node.innerHTML = this.paginationList[this.index];
      this.pagination.dispath('tabSelected', this.index);
    });
    this.pagination = new Control(this.pagWrap.node, 'div', 'pagebox__mark', this.paginationList[this.index]);
    this.btnPrevious = new Btn(this.pagWrap.node, 'btn btn-index btn-index--next', 'next', () => {
      this.index = (this.index + 1) % this.paginationList.length;
      this.pagination.node.innerHTML = this.paginationList[this.index];
      this.pagination.dispath('tabSelected', this.index);
    });


    // this.pagination = new ItemGroup(this.node, 'div', 'pagebox__marks', 'pagebox__mark pagebox__mark--active', 'pagebox__mark');
    // this.btnPrevious = new Btn(this.pagination.node, 'btn btn-index btn-index--previous', 'previous', () => {});
    // this.pagination.addItem('div', paginationList[this.index]);
    // this.btnPrevious = new Btn(this.pagination.node, 'btn btn-index btn-index--next', 'next', () => {});

    // this.pagination.onSelect = (index) => {
    //   this.select(index);
    // };
  }

  select(index, noEvent) {
    // noEvent && this.dispath('tabSelected', index);
    this.dispath('dataChange', index);
    // this.items.forEach((it, i) => it.node.style.display = (i != index) ? 'none' : '');
  }

  addItem(title, className, content) {
    this.page = new Control(this.itemWrapper.node, 'div', 'pagebox__page');
    this.titleName = title;
    this.title = new Control(this.page.node, 'h2', 'pagebox__title', title);
    this.titles.push(this.title);
    this.className = className;
    this.item = new className(this.page.node, content);
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
    this.item = new className(this.page.node, content);
  }
}
