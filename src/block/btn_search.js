import Control from '../utils/control';

export default class BtnSearch extends Control {
  constructor(parent) {
    const inner = '<span class="visually-hidden">Search</span>';
    super(parent, 'button', 'btn btn--search', inner);
    this.node.setAttribute('type', 'button');
  }
}
