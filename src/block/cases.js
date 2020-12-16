import Control from '../utils/control';
import Search from './search';

export default class Cases extends Control {
  constructor(parent, data) {
    const inner = '<h2 class = "cases__title"> Global cases</h2>';
    super(parent.node, 'section', 'cases', inner);
    this.allCases = new Control(this.node, 'p', 'cases__all', data);
    this.search = new Search(this.node);
  }
}
