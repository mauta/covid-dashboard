import Control from '../utils/control';

export default class Chart extends Control {
  constructor(parentNode, data) {
    super(parentNode, 'canvas', 'canvas');
    const TOP_PDNG = 100;
    const SIZE_PDNG = 40;
    const AXE_PDNG = 20;
    const arr = [
      [68, '15.03.20'],
      [32, '15.03.20'],
      [82, '16.06.20'],
      [1, '15.08.20'],
      [122, '15.03.20'],
      [12, '15.03.20'],
      [25, '20.12.20'],
    ];

    this.dataArr = arr.map((el) => el[0]);

    this.ctx = this.node.getContext('2d');

    const y = parentNode.offsetHeight - TOP_PDNG;
    const x = parentNode.offsetWidth - SIZE_PDNG;

    this.node.width = x;
    this.node.height = y;
    this.ctx.strokeStyle = '#008000';
    this.ctx.lineWidth = 1;
    this.ctx.moveTo(AXE_PDNG, AXE_PDNG);
    this.ctx.lineTo(AXE_PDNG, y - AXE_PDNG);
    this.ctx.moveTo(AXE_PDNG, y - AXE_PDNG);
    this.ctx.lineTo(x - AXE_PDNG, y - AXE_PDNG);
    this.ctx.stroke();

    this.YLenght = y - 2 * AXE_PDNG;
    this.XLenght = x - 2 * AXE_PDNG;
    this.maxY = Math.max.apply(null, this.dataArr);
    this.XKoef = this.XLenght / this.dataArr.length;
    this.YKoef = this.YLenght / this.maxY;
    this.ctx.fillStyle = '#008000';
    this.ctx.fillText(`${this.maxY}`, 3, AXE_PDNG, AXE_PDNG - 6);
    this.ctx.fillText(`${Math.round(this.maxY * 0.25)}`, 3, AXE_PDNG + this.YLenght * 0.75, AXE_PDNG - 6);
    this.ctx.fillText(`${Math.round(this.maxY * 0.5)}`, 3, AXE_PDNG + this.YLenght * 0.5, AXE_PDNG - 6);
    this.ctx.fillText(`${Math.round(this.maxY * 0.75)}`, 3, AXE_PDNG + this.YLenght * 0.25, AXE_PDNG - 6);

    this.ctx.fillText(`${arr[arr.length-1][1]}`, this.XLenght - 5, AXE_PDNG * 1.7 + this.YLenght);
    this.ctx.fillText(`${arr[Math.round(arr.length / 2)][1]}`, AXE_PDNG + this.XLenght * 0.5, AXE_PDNG * 1.7 + this.YLenght);

    this.ctx.fillText(`${arr[0][1]}`, AXE_PDNG + this.XLenght * 0, AXE_PDNG * 1.7 + this.YLenght);
    this.ctx.fill();

    const draw = (param) => {
      for (let i = 0; i < param.length; i += 1) {
        const curentY = y - AXE_PDNG - param[i] * this.YKoef;
        this.ctx.fillStyle = '#008000';
        this.ctx.fillRect(i * this.XKoef + AXE_PDNG, curentY, this.XKoef, param[i] * this.YKoef);
      }
    };
    draw(this.dataArr);
  }
}
