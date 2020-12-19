import Control from '../utils/control';

export default class Header extends Control {
  constructor(parentNode, quater, tab) {
    super(parentNode, 'div', 'legend', '');
    const titles = {
      globalCases: 'All Cases',
      globalDeaths: 'All Deaths',
      globalRecovered: 'All recovered',
      lastCases : 'Last cases',
      lastDeaths: 'Last deaths',
      lastRecovered : 'Last recovered',
      globalCases100: '1/100 000 cases',
      globalDeaths100: '1/100 000 deaths',
      globalRecovered100 : '1/100 000 recovered',
      lastCases100 : '1/100 000 last cases',
      lastDeaths100 : '1/100 000 last deaths',
      lastRecovered100: '1/100 000 last recovered',
    };

      new Control(this.node,'h3','legend__title', `${titles[tab]}`);
    new Control(this.node,'div','legend__xs',`< ${Math.round(quater * 0.25).toLocaleString('ru-RU')}`);
    new Control(this.node,'div','legend__s',`< ${Math.round(quater * 0.50).toLocaleString('ru-RU')}`);
    new Control(this.node,'div','legend__m',`< ${Math.round(quater * 0.75).toLocaleString('ru-RU')}`);
    new Control(this.node,'div','legend__l',`> ${Math.round(quater * 0.75).toLocaleString('ru-RU')}`);
  }
}
