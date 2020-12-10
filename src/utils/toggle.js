import Control from './control';

export default class Toggle extends Control {
  constructor(parentNode, tag, activeClass, inactiveClass, caption, onClick) {
    super(parentNode, tag, inactiveClass, caption);
    this.activeClass = activeClass;
    this.inactiveClass = inactiveClass;
    this.onClick = onClick;
    this.isToggled;
    this.changeState(false);

    this.node.onclick = () => {
      this.changeState();
      this.onClick && this.onClick(this.isToggled);
    };
  }

  changeState(state) {
    if (state === undefined) {
      this.isToggled = !this.isToggled;
    } else {
      this.isToggled = state;
    }
    this.node.className = this.isToggled ? this.activeClass : this.inactiveClass;
    this.onChange && this.onChange(this.isToggled);
    return this.isToggled;
  }
}
