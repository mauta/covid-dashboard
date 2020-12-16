import Control from '../utils/control';

export default class Popup extends Control {
  constructor(parentNode, className, hiddenClassName) {
    super(parentNode, 'div', className);
    this.className = className;
    this.hiddenClassName = hiddenClassName;
    this.hide();
  }

  setPosition(x, y) {
    this.node.style.left = `${x}px`;
    this.node.style.top = `${y}px`;
  }

  show() {
    this.node.className = this.className;
  }

  hide() {
    this.node.className = this.hiddenClassName;
  }
}
