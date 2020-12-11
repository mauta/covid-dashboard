import Control from '../utils/control';

export default class Chart extends Control {
  constructor(parentNode, _data) {
    super(parentNode, 'canvas', 'canvas');


    this.ctx = this.node.getContext('2d');

    const y = parentNode.offsetHeight - 100;
    const x = parentNode.offsetWidth - 40;

    console.log(x);
    console.log(parentNode.clientWidth);

    this.node.width = x;
    this.node.height = y;

    this.ctx.fillStyle = '#008000';


    // this.ctx.beginPath();
    // this.ctx.arc(100, 100, 20, 0, Math.PI * 2);
    // this.ctx.closePath();
    this.ctx.fill();

    this.ctx.lineWidth = 2;
    this.ctx.strokeStyle = '#008000';
    this.ctx.moveTo(10, 10);
    this.ctx.lineTo(10, y - 10);
    this.ctx.moveTo(10, y - 10);
    this.ctx.lineTo(x - 10, y - 10);
    this.ctx.stroke();

    // this.ctx.strokeText("Hello world", 10, 50);

    const arr = [1, 5, 3, 6, 7, 9, 15, 26, 17, 15, 35, 15, 75];
    let xx = 10;
    const draw = (arr) => {
      arr.forEach((el) => {
        let yy = y - 10 - el;
        xx = xx + 3;
        this.ctx.fillStyle = '#008000';
        this.ctx.fillRect(xx, yy, 2, 2);
      });
    };
    draw(arr);
  }
}
