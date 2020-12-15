import Chart from './chart';
import Popup from './popup';
import Control from '../utils/control';

export default class ChartWrapped extends Control {
  constructor(parentNode, data) {
    super(parentNode, 'div', 'canvas__wrapper');
    this.chart = new Chart(this.node, data);
    this.popup = new Popup(this.node, 'popup__wrapper', 'popup__wrapper--hidden');
    console.log(data);
    this.onMouseMove = () => {};
    this.node.addEventListener('mousemove', (ev) => {
      const rect = this.node.getBoundingClientRect();
      this.popup.setPosition(ev.clientX - rect.left, ev.clientY - rect.top);
      this.popup.show();
      this.onMouseMove(ev);
    });

    this.node.addEventListener('mouseleave', () => {
      this.popup.hide();
    });
  }
}
