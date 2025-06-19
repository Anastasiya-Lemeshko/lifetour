import { drawTitleShadow } from './draw-title-shadow.js';
import { toggleBurgerMenu } from './open-burger-menu.js';
import { initHeroSwiper, addButtonDescription, setActiveHeroView } from './hero-swiper.js';
import { initTourSwiper } from './tour-swiper.js';
import { initInstructorsSwiper, setActiveInstructorsView } from './training-swiper.js';
import { setReviewsSwiper } from './reviews-swiper.js';
import { checkAdvantagesSwiper } from './adv-swiper.js';
import { checkGallerySwiper } from './gallery-swiper.js';
import { setFormValidate, formatPhone } from './callback-form-validate.js';
import './place-footer-nav.js';

document.addEventListener('DOMContentLoaded', () => {
  drawTitleShadow();
  toggleBurgerMenu();
  initHeroSwiper();
  addButtonDescription();
  setActiveHeroView();
  initTourSwiper();
  initInstructorsSwiper();
  setActiveInstructorsView();
  setReviewsSwiper();
  checkAdvantagesSwiper();
  checkGallerySwiper();
  setFormValidate();
  formatPhone();
});
