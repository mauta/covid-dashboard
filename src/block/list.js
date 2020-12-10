import Control from '../utils/control';
import ListLine from './list_line';

export default class List extends Control {
  constructor(parentNode, data) {
    // `<h2 class = "list__title"> Cases by country</h2>';
    super(parentNode, 'ul', 'list');


    data.forEach(element => {
      new ListLine(this.node, element);
    });
  }
}
