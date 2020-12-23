/* eslint-disable no-useless-escape */
/* eslint-disable no-param-reassign */
/* eslint-disable no-new */
import Control from '../utils/control';
import Toggle from '../utils/toggle';
import BtnSearch from './btn_search';

export default class Search extends Control {
  constructor(parent, json) {
    super(parent, 'div', 'search-wrap');
    this.btnSearch = new BtnSearch(this.node);
    this.input = new Control(this.node, 'input', 'search__input');
    this.input.node.type = 'text';
    this.input.node.pattern = '^[a-zA-Z\s]+$';
    this.ul = new Control(this.node, 'ul', 'search__list search__list--hidden');
    this.json = json;
    const countriesOriginal = [];
    this.json.forEach((key) => {
      if (key.country === 'Curaçao') {
        key.country = 'Curacao';
      }
      if (key.country === 'Côte d\'Ivoire') {
        key.country = 'Ivory Coast';
      }
      if (key.country === 'Réunion') {
        key.country = 'Reunion';
      }
      countriesOriginal.push(key.country);
    });
    const countries = countriesOriginal.map((item) => item.toLowerCase());

    this.items = countries.map((item) => {
      const jtem = new Toggle(this.ul.node, 'li', 'search__item--active', 'search__item', `${item}`);
      return jtem;
    });
    this.word = '';

    this.input.node.addEventListener('keyup', (e) => {
      this.ul.node.classList.remove('search__list--hidden');
      this.word = this.input.node.value;
      this.arrCountry = countries.filter((item) => item.startsWith(this.word.toLowerCase()));
      countries.forEach((item, ind) => {
        this.items[ind].node.style.display = item.startsWith(this.word.toLowerCase()) ? '' : 'none';
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
        const country = this.arrCountry[0];
        const ind = countries.indexOf(country);
        this.dispath('onSearchCountry', countriesOriginal[ind]);
        this.input.node.value = '';
        this.items.forEach((key) => {
          key.node.style.display = 'none';
        });
        this.ul.node.classList.add('search__list--hidden');
      }
    });

    this.items.forEach((item) => {
      item.node.addEventListener('click', () => {
        const country = item.node.innerText;
        const ind = countries.indexOf(country);
        this.dispath('onSearchCountry', countriesOriginal[ind]);
        this.input.node.value = '';
        this.items.forEach((key) => {
          key.node.style.display = 'none';
        });
        this.ul.node.classList.add('search__list--hidden');
      });
    });
  }
}
