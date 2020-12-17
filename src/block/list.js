import ItemGroup from '../utils/item_group';

export default class List extends ItemGroup {
  constructor(parentNode, data) {
    super(parentNode, 'ul', 'list', 'list__item--active', 'list__item');
    this.data = data;
    this.countries = [];

    this.data.forEach((item) => {
      const inner = `
       <img class="list__flag" src="${item.src}" width="20" height="16" alt="${item.country}">
      <div class="list__country">${item.country}</div>
      <div class="list__count">${item.count.toLocaleString('ru-RU')}</div>`;
      this.addItem('li', inner, item.country);
      this.countries.push(item.country);
    });
  }
}
