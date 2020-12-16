/* eslint-disable no-new */
import Control from '../utils/control';
import ItemGroup from '../utils/item_group';
import BtnFullScreen from './btn_fullscreen';
import ChartWrapped from './chart_Wrapped';

export default class PageBox extends Control {
  constructor(parentNode, modifier) {
    super(parentNode, 'section', `pagebox__wrapper pagebox__wrapper--${modifier}`);
    this.itemWrapper = new Control(this.node, 'div', 'pagebox__main');
    this.items = [];
    this.modifier = modifier;
    this.innerItems = [];
    this.titles= [];

    this.btnFullScreen = new BtnFullScreen(this.node, () => {
      this.node.classList.toggle('pagebox__wrapper--full-screen');
      this.dispath('onFullScreen', this.modifier);
      if (modifier === 'chart') {
        for (let i = 0; i < 3; i += 1) {
          this.innerItems[i].chart.reRender();
        }
        // this.innerItems.forEach((el) => {
        //   el.chart.reRender();
        // });
      }
    });

    this.pagination = new ItemGroup(this.node, 'div', 'pagebox__marks', 'pagebox__mark pagebox__mark--active', 'pagebox__mark');
    this.pagination.onSelect = (index) => {
      this.select(index);
    };
  }

  select(index, noEvent) {
    !noEvent && this.dispath('tabSelected', index);
    this.items.forEach((it, i) => it.node.style.display = (i != index) ? 'none' : '');
  }

  addItem(caption, title, className, content) {
    this.page = new Control(this.itemWrapper.node, 'div', 'pagebox__page');
    let titles= new Control(this.page.node, 'h2', 'pagebox__title', `Global ${title}`);
    this.titles.push(titles);
    let item = new className(this.page.node, content);
    this.items.push(this.page);
    this.pagination.addItem('div', caption);
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
}
