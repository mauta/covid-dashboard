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

  addItem(tagItem, caption) {
    const item = new Toggle(this.node, tagItem, this.activeItemClass, this.inactiveItemClass, caption, () => {
      this.select(this.items.findIndex((it) => item === it));
    });
    this.items.push(item);
  }

  // addItem(caption) {
  //   const item = new Toggle(this.node, 'div', this.activeItemClass, this.inactiveItemClass, caption, () => {
  //     this.select(this.items.findIndex((it) => item === it));
  //   });
  //   this.items.push(item);
  // }

  select(index, noEvent) {
    this.items.forEach((it) => it.changeState(false));
    this.items[index].changeState(true);
    !noEvent && this.onSelect && this.onSelect(index);
  }
}
