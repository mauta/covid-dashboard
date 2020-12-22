import Observer from './observer';

export default class Control extends Observer {
  constructor(parentNode, tag = 'div', className = '', content = '') {
    super();
    this.node = document.createElement(tag);
    this.node.className = className;
    this.node.innerHTML = content;
    parentNode.appendChild(this.node);
  }

  clear() {
    this.node.innerHTML = '';
  }
}
