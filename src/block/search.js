/* eslint-disable no-new */
import Control from '../utils/control';
import Toggle from '../utils/toggle';
import BtnSearch from './btn_search';
import CasesAPI from '../utils/cases_api';

export default class Search extends Control {
  constructor(parent, json) {
    super(parent, 'div', 'search-wrap');
    this.btnSearch = new BtnSearch(this.node);
    this.input = new Control(this.node, 'input', 'search__input');
    this.input.node.type = 'text';
    this.input.node.pattern = '^[a-zA-Z\s]+$';
    this.ul = new Control(this.node, 'ul', 'search__list search__list--hidden');
    this.json = json;
    let countries = [];
    this.json.forEach((key) => {
      if (key.country === 'Curaçao') {
        key.country = 'Curacao'
      };
      if (key.country === `Côte d'Ivoire`) {
        key.country = 'Ivory Coast'
      };
      if (key.country === `Réunion`) {
        key.country = 'Reunion'
      };
      countries.push(key.country);
    });
    countries = countries.map((item) => item.toLowerCase());

    this.items = countries.map((item) => {
      const jtem = new Toggle(this.ul.node, 'li', 'search__item--active', 'search__item', `${item}`);
      return jtem;
    });
    this.word = '';

    this.input.node.addEventListener('keyup', (e) => {
      this.ul.node.classList.remove('search__list--hidden');
      this.word = this.input.node.value;
      this.arrCountry = countries.filter((item) => item.startsWith(this.word));
      countries.forEach((item, ind) => {
        this.items[ind].node.style.display = item.startsWith(this.word) ? '' : 'none';
      });
      if (this.arrCountry.length === 0 && this.word.length !== 0) {
        this.input.node.classList.add('search__input--invalid');
      } else {
        this.input.node.classList.remove('search__input--invalid');
      }
      if (this.arrCountry.length === 0) {
        this.ul.node.classList.add('search__list--hidden');
      }

      if (e.key === 'Enter' && this.arrCountry.length === 1) {
        const country = this.arrCountry[0][0].toUpperCase() + this.arrCountry[0].slice(1);
        this.dispath('onSearchCountry', country);
      }
    });

    this.items.forEach((item) => {
      item.node.addEventListener('click', () => {
        const country = item.node.innerText;
        this.dispath('onSearchCountry', country[0].toUpperCase() + country.slice(1));
        this.input.node.value = '';
        this.items.forEach((key) => {
          key.node.style.display = 'none';
        });
        this.ul.node.classList.add('search__list--hidden');
      });
    });
  }
}
