import Control from '../utils/control';


export default class Table extends Control {
  constructor(parentNode, data) {
    super(parentNode, 'table');
// тут тоже сама придумай какого типа и вида данные будут приходить и как их будешь вставлять
    this.title = new Control(this.node, 'tr', '', '<td></td><td>all</td><td>new</td>');
    this.cases = new Control(this.node, 'tr', '', `<td>cases</td><td>${data.allCases}</td><td>${data.newCases}</td>`);
    this.deaths = new Control(this.node, 'tr', '', `<td>deaths</td><td>${data.alldeaths}</td><td>${data.newdeaths}</td>`);
    this.recovered = new Control(this.node, 'tr', '', `<td>recovered</td><td>${data.allrecovered}</td><td>${data.newrecovered}</td>`);
  }
}
