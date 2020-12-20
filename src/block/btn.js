import Control from '../utils/control';

export default class Btn extends Control {
  constructor(parent, className, title, onClick) {
    const inner = `<span class="visually-hidden">${title}</span>`;
    super(parent, 'button', className, inner);
    this.node.setAttribute('type', 'button');
    this.node.onclick = onClick;
  }
}
