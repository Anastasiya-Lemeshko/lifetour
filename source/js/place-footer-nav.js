import { COUNT_FOOTER_COLUMNS } from './constants.js';

const footer = document.querySelector('.footer-inner');
const footerLinks = footer.querySelectorAll('.navigation__item');

const lengthOfOneColumn = Math.ceil(footerLinks.length / COUNT_FOOTER_COLUMNS);

for (let i = 0; i < footerLinks.length; i++) {
  if (i < lengthOfOneColumn) {
    footerLinks[i].style.gridColumn = '1 / 2';
  } else {
    footerLinks[i].style.gridColumn = '2 / 3';
  }
}
