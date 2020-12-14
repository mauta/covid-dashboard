import Control from '../utils/control';
import ListLine from './list_line';

export default class List extends Control {
  constructor(parentNode, data) {
    super(parentNode, 'ul', 'list');
    data.forEach(element => {
      new ListLine(this.node, element);
    });

    // переделать на item group
  }
}
