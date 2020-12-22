import Control from '../utils/control';

export default class Chart extends Control {
  constructor(parentNode, dataForChart) {
    super(parentNode, 'canvas', 'canvas');
    this.parentNode = parentNode;

    this.addListener('onResize', () => {
      this.reRender();
    });
    this.data = dataForChart;
    this.render(this.data);
  }

  render(data) {
    const TOP_PDNG = 10;
    const SIZE_PDNG = 40;
    const AXE_PDNG = 20;
    this.data = data;
    this.dataArr = data.map((el) => el[0]);

    this.ctx = this.node.getContext('2d');
    const y = this.parentNode.offsetHeight - TOP_PDNG;
    const x = this.parentNode.offsetWidth - SIZE_PDNG;

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

    // this.ctx.fillText(`${this.valueYChart(this.maxY)}`, 3, AXE_PDNG, AXE_PDNG - 6);
    // this.ctx.fillText(`${this.valueYChart(Math.round(this.maxY * 0.25))}`, 3, AXE_PDNG + this.YLenght * 0.75, AXE_PDNG - 6);
    // this.ctx.fillText(`${this.valueYChart(Math.round(this.maxY * 0.5))}`, 3, AXE_PDNG + this.YLenght * 0.5, AXE_PDNG - 6);
    // this.ctx.fillText(`${this.valueYChart(Math.round(this.maxY * 0.75))}`, 3, AXE_PDNG + this.YLenght * 0.25, AXE_PDNG - 6);

    this.ctx.fillText(`${this.maxY}`, 3, AXE_PDNG, AXE_PDNG - 6);
    this.ctx.fillText(`${Math.round(this.maxY * 0.25)}`, 3, AXE_PDNG + this.YLenght * 0.75, AXE_PDNG - 6);
    this.ctx.fillText(`${Math.round(this.maxY * 0.5)}`, 3, AXE_PDNG + this.YLenght * 0.5, AXE_PDNG - 6);
    this.ctx.fillText(`${Math.round(this.maxY * 0.75)}`, 3, AXE_PDNG + this.YLenght * 0.25, AXE_PDNG - 6);

    this.ctx.fillText(`${data[data.length - 1][1]}`, this.XLenght - 5, AXE_PDNG * 1.7 + this.YLenght);
    this.ctx.fillText(`${data[Math.round(data.length / 2)][1]}`, AXE_PDNG + this.XLenght * 0.5, AXE_PDNG * 1.7 + this.YLenght);

    this.ctx.fillText(`${data[0][1]}`, AXE_PDNG + this.XLenght * 0, AXE_PDNG * 1.7 + this.YLenght);
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

  reRender() {
    this.clear();
    this.render(this.data);
  }

  update(data) {
    this.clear();
    this.render(data);
  }

  // valueYChart(val) {
  //   let valueY = val;
  //   if (val <= 1000) {
  //     valueY = '1k';
  //   }
  //   else if (val > 1000 && val <= 10000) {
  //     valueY = '10k';
  //   }
  //   else if (val > 10000 && val <= 100000) {
  //     valueY = '100k';
  //   }
  //   else if (val > 100000 && val <= 1000000) {
  //     valueY = '1M';
  //   }
  //   else if (val > 1000000 && val <= 10000000) {
  //     valueY = '10M';
  //   }
  //   else if (val > 10000000 && val <= 100000000) {
  //     valueY = '100M';
  //   }
  //   return valueY;
  // }

}
