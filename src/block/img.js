import Control from '../utils/control';

export default class Img extends Control {
  constructor(parentNode, className, src, alt) {
    super(parentNode, 'img', className);
    this.node.src = src;
    this.node.alt = alt;
  }
}
