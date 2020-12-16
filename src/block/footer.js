import Control from '../utils/control';

export default class Footer extends Control {
  constructor() {
    const inner = `Developed by <a class="footer__link footer__link--gh" href="https://github.com/mauta">Mauta</a> and
    <a class="footer__link footer__link--gh" href="https://github.com/viklysx"> Victorya</a>
    <span> in </span>
    <a class="footer__link footer__link--rs" href="https://rs.school/js/"></a>`;
    super(document.body, 'footer', 'footer', inner);
  }
}
