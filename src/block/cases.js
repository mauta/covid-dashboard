import Control from '../utils/control';
import BtnSearch from './btn_search';

export default class Cases extends Control {
  constructor(parent, data) {
    const inner = '<h2 class = "cases__title"> All cases</h2>';
    super(parent.node, 'section', 'cases', inner);
    this.allCases = new Control(this.node, 'p', 'cases__all', data);
    this.btnSearch = new BtnSearch(this.node);
  }
}
