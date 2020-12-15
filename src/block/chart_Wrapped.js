/* eslint-disable max-len */
import Chart from './chart';
import Popup from './popup';
import Control from '../utils/control';

export default class ChartWrapped extends Control {
  constructor(parentNode, data) {
    super(parentNode, 'div', 'canvas__wrapper');
    this.chart = new Chart(this.node, data);
    this.popup = new Popup(this.node, 'popup__wrapper', 'popup__wrapper--hidden');
    this.onMouseMove = () => {};
    this.height = this.node.offsetHeight;

    this.node.addEventListener('mousemove', (ev) => {
      const rect = this.node.getBoundingClientRect();
      const chartRect = this.chart.node.getBoundingClientRect();
      if ((ev.clientX - chartRect.left - 20) > 0 && (chartRect.right - ev.clientX - 20) > 0) {
        this.popup.setPosition(ev.clientX - rect.left, ev.clientY - rect.top);
        this.popup.show(chartRect.right - ev.clientX - 20);
        this.onMouseMove(ev);
      }
    });

    this.chart.node.addEventListener('mouseleave', () => {
      this.popup.hide();
    });
  }
}
