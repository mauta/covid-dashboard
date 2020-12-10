import Toggle from './toggle';
import Control from './control';

export default class ItemGroup extends Control {
  constructor(parentNode, wrapperClass, activeItemClass, inactiveItemClass) {
    super(parentNode, 'div', wrapperClass);
    this.activeItemClass = activeItemClass;
    this.inactiveItemClass = inactiveItemClass;
    this.items = [];
    this.onSelect;
  }

  addItem(caption) {
    const item = new Toggle(this.node, this.activeItemClass, this.inactiveItemClass, caption, () => {
      this.select(this.items.findIndex((it) => item === it));
    });
    this.items.push(item);
  }

  select(index) {
    this.items.forEach((it) => it.changeState(false));
    this.items[index].changeState(true);
    this.onSelect && this.onSelect(index);
  }
}
