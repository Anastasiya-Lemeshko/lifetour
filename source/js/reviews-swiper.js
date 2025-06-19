import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import { debounce } from './utils.js';

const reviews = document.querySelector('.reviews');

const widthNoAutoHeight = window.matchMedia('(min-width: 390px)');
let reviewsSwiper = null;
let isAutoHeight = false;
let indexOfInitialSlide = 0;

const initReviewsSwiper = (setAutoHeight, setInitialSlide) => {
  reviewsSwiper = new Swiper('.reviews__swiper', {
    modules: [Navigation],
    direction: 'horizontal',
    speed: 500,
    slideActiveClass: 'reviews__slide--active',
    slidesPerView: 1,
    spaceBetween: 20,
    allowTouchMove: true,
    slidesPerGroup: 1,
    autoHeight: setAutoHeight,
    initialSlide: setInitialSlide,

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      390: {
        slidesPerView: 'auto',
        spaceBetween: 30,
      },

      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
      },

      1440: {
        slidesPerView: 'auto',
        spaceBetween: 120,
      },
    },

    navigation: {
      nextEl: '.reviews__button--next',
      prevEl: '.reviews__button--prev',
    },
  });
};

const destroyReviewsSwiper = () => {
  if (reviewsSwiper) {
    reviewsSwiper.destroy();
    reviewsSwiper = null;
  }
};

const findActiveSlide = () => {
  const slidesList = reviews.querySelectorAll('.reviews__slide');
  const activeSlide = reviews.querySelector('.reviews__slide--active');

  return Array.from(slidesList).indexOf(activeSlide);
};

const setReviewsSwiper = () => {
  isAutoHeight = false;
  indexOfInitialSlide = 0;

  if (!widthNoAutoHeight.matches) {
    isAutoHeight = true;
  }

  initReviewsSwiper(isAutoHeight, indexOfInitialSlide);
};

const changeReviewsSwiper = () => {
  if (reviewsSwiper && ((widthNoAutoHeight.matches && isAutoHeight) || (!widthNoAutoHeight.matches && !isAutoHeight))) {
    indexOfInitialSlide = findActiveSlide();
    destroyReviewsSwiper();
    isAutoHeight = !isAutoHeight;
    initReviewsSwiper(isAutoHeight, indexOfInitialSlide);
  }
};

const debouncedchangeReviewsSwiper = debounce(changeReviewsSwiper, 50);

window.addEventListener('resize', debouncedchangeReviewsSwiper);

export { setReviewsSwiper };
