import Control from '../utils/control';

export default class Header extends Control {
  constructor() {
    const inner = '<h1 class = "header__title"> Covid Dashboard</h1>';
    super(document.body, 'header', 'header', inner);
  }
}
