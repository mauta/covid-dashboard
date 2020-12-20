import Control from '../utils/control';

export default class Header extends Control {
  constructor(parentNode, quater, tab) {
    super(parentNode, 'div', 'legend', '');
    this.titles = {
      globalCases: 'All Cases',
      globalDeaths: 'All Deaths',
      globalRecovered: 'All recovered',
      lastCases: 'Last cases',
      lastDeaths: 'Last deaths',
      lastRecovered: 'Last recovered',
      globalCases100: '1/100 000 cases',
      globalDeaths100: '1/100 000 deaths',
      globalRecovered100: '1/100 000 recovered',
      lastCases100: '1/100 000 last cases',
      lastDeaths100: '1/100 000 last deaths',
      lastRecovered100: '1/100 000 last recovered',
    };
    this.tab = tab;
    this.quater = quater;
    this.title = new Control(this.node, 'h3', 'legend__title', '');
    this.legendXS = new Control(this.node, 'div', 'legend__xs', '');
    this.legendS = new Control(this.node, 'div', 'legend__s', '');
    this.legendM = new Control(this.node, 'div', 'legend__m', '');
    this.legendL = new Control(this.node, 'div', 'legend__l', '');
    this.update(this.tab);
  }

  update(tab) {
    this.tab = tab;
    this.title.node.innerHTML = `${this.titles[this.tab]}`;
    this.legendXS.node.innerHTML = `< ${Math.round(this.quater * 0.25).toLocaleString('ru-RU')}`;
    this.legendS.node.innerHTML = `< ${Math.round(this.quater * 0.50).toLocaleString('ru-RU')}`;
    this.legendM.node.innerHTML = `< ${Math.round(this.quater * 0.75).toLocaleString('ru-RU')}`;
    this.legendL.node.innerHTML = `> ${Math.round(this.quater * 0.75).toLocaleString('ru-RU')}`;
  }
}
