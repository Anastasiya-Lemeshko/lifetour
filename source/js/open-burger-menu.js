import { isEscapeKey, getScrollWidth } from './utils.js';
import { debounce } from './utils.js';
import { DESKTOP_WIDTH } from './constants.js';

const header = document.querySelector('.header');
const burgerMenu = header.querySelector('.header__burger');
const navLinks = header.querySelectorAll('.navigation__link');
const lastLink = navLinks[navLinks.length - 1];

let scrollSize = 0;

const openMobileMenu = () => {
  header.classList.remove('header--menu-closed');
  header.classList.add('header--menu-opened');
  document.addEventListener('keydown', onDocumentKeydown);
  document.body.classList.add('page__scroll-lock');

  scrollSize = getScrollWidth();
  document.body.style.paddingRight = `${scrollSize }px`;
};

const closeMobileMenu = () => {
  header.classList.remove('header--menu-opened');
  header.classList.add('header--menu-closed');
  document.removeEventListener('keydown', onDocumentKeydown);
  document.body.classList.remove('page__scroll-lock');
  document.body.style.paddingRight = 0;
};

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeMobileMenu();
  }
}

const toggleBurgerMenu = () => {
  burgerMenu.addEventListener('click', () => {
    if (header.classList.contains('header--menu-opened')) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });
};

lastLink.addEventListener('focusout', () => {
  if (!DESKTOP_WIDTH.matches) {
    closeMobileMenu();
  }
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (!DESKTOP_WIDTH.matches) {
      closeMobileMenu();
    }
  });
});

window.addEventListener('resize', debounce(() => {
  if (header.classList.contains('header--menu-opened') && DESKTOP_WIDTH.matches) {
    closeMobileMenu();
  }
}, 50));

export { toggleBurgerMenu };
