import Control from '../utils/control';
import Chart from './chart';

class Popup extends Control{
  constructor(parentNode, className, hiddenClassName){
    super(parentNode, 'div', className);
    this.className = className;
    this.hiddenClassName = hiddenClassName;
    this.hide();
  }

  setPosition(x, y){
    this.node.style.left = `${x}px`;
    this.node.style.top = `${y}px`;
  }

  show(){
    this.node.className = this.className;
  }

  hide(){
    this.node.className = this.hiddenClassName;
  }
}

export default class ChartWrapped extends Control {
  constructor(parentNode, data){
    super(parentNode, 'div', 'canvas__wrapper');
    this.chart = new Chart(this.node, data);
    this.popup = new Popup(this.node, 'popup__wrapper', 'popup__wrapper--hidden');

    this.onMouseMove = ()=>{}
    this.node.addEventListener('mousemove', (ev)=>{
      let rect = this.node.getBoundingClientRect();
      this.popup.setPosition(ev.clientX - rect.left, ev.clientY - rect.top);
      this.popup.show();
      this.onMouseMove(ev);
    });

    this.node.addEventListener('mouseleave', ()=>{
      this.popup.hide();
    })
  }
}
