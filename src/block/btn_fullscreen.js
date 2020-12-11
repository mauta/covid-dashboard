import Control from '../utils/control';

export default class BtnFullScreen extends Control {
  constructor(parent, onClick) {
    const inner = '<span class="visually-hidden">Open on full screen</span>';
    super(parent, 'button', 'btn btn--full-screen', inner);
    this.node.setAttribute('type', 'button');

    this.node.onclick = onClick;
  }
}
