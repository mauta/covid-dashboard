import Chart from './chart';
import Popup from './popup';
import Control from '../utils/control';

export default class ChartWrapped extends Control {
  constructor(parentNode, data) {
    super(parentNode, 'div', 'canvas__wrapper');
    this.chart = new Chart(this.node, data);
    this.popup = new Popup(this.node, 'popup__wrapper', 'popup__wrapper--hidden');
    this.onMouseMove = () => {};
    this.count = data.length;
    this.height = this.node.offsetHeight;
    this.dataArr = data.map((el) => el[0]);
    this.maxY = Math.max.apply(null, this.dataArr);

    this.node.addEventListener('mousemove', (ev) => {
      const rect = this.node.getBoundingClientRect();
      const chartRect = this.chart.node.getBoundingClientRect();
      const posX = ev.clientX - chartRect.left - 20;
      const lengthX = chartRect.width - 40;
      const YKoef = (chartRect.height - 40) / this.maxY;
      const step = lengthX / this.count;
      const dataIndex = Math.floor(posX / step);
      const posY = ev.clientY - chartRect.top - 20;
      const diffY = chartRect.height - 40 - posY - YKoef * this.dataArr[dataIndex];
      const diffYbottom = diffY + YKoef * this.dataArr[dataIndex];
      const diffLeft = ev.clientX - chartRect.left - 20;
      const diffRight = chartRect.right - ev.clientX - 20;

      if (diffLeft > 0 && diffRight > 0 && diffY < 0 && diffYbottom > 0) {
        this.popup.setPosition(ev.clientX - rect.left, ev.clientY - rect.top);
        this.popup.show(data[dataIndex]);
        this.onMouseMove(ev);
      } else {
        this.popup.hide();
      }
    });

    this.chart.node.addEventListener('mouseleave', () => {
      this.popup.hide();
    });
  }
}
