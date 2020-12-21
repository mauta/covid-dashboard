/* eslint-disable max-len */
import Toggle from './toggle';
import Control from './control';

export default class ItemGroup extends Control {
  constructor(parentNode, tag, wrapperClass, activeItemClass, inactiveItemClass) {
    // super(parentNode, 'div', wrapperClass);
    super(parentNode, tag, wrapperClass);
    this.activeItemClass = activeItemClass;
    this.inactiveItemClass = inactiveItemClass;
    this.items = [];
    this.onSelect;
    this.tag = tag;
  }

  addItem(tagItem, caption, data) {
    const item = new Toggle(this.node, tagItem, this.activeItemClass, this.inactiveItemClass, caption, data, () => {
      this.select(this.items.findIndex((it) => item === it));
    });
    this.items.push(item);
  }

  select(index, noEvent) {
    this.items.forEach((it) => it.changeState(false));
    this.items[index].changeState(true);
    const currentCountry = this.items[index].data;
    this.dispath('onSelectedCountry', currentCountry);
    !noEvent && this.onSelect && this.onSelect(index);
  }

  clearItems() {
    this.items.forEach((el) => {
      el.clear();
    });
    this.items = [];
  }
}
