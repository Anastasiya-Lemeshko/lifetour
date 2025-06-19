import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { DESKTOP_WIDTH } from './constants.js';
import { debounce } from './utils.js';

const gallerySwiper = document.querySelector('.gallery__swiper');
const gallerySwiperWrapper = gallerySwiper.querySelector('.gallery__swiper-container');
const gallerySlides = gallerySwiper.querySelectorAll('.gallery__slide');

let gallerySwiperContainer = null;

const addClass = () => {
  gallerySwiper.classList.add('swiper');
  gallerySwiperWrapper.classList.add('swiper-wrapper');
  gallerySlides.forEach((slide) => {
    slide.classList.add('swiper-slide');
  });
};

const removeClass = () => {
  gallerySwiper.classList.remove('swiper');
  gallerySwiperWrapper.classList.remove('swiper-wrapper');
  gallerySlides.forEach((slide) => {
    slide.classList.remove('swiper-slide');
  });
};

const destroyGallerySwiper = () => {
  if (gallerySwiperContainer) {
    gallerySwiperContainer.destroy();
    gallerySwiperContainer = null;
    removeClass();
  }
};

const initGallerySwiper = () => {
  addClass();

  gallerySwiperContainer = new Swiper('.gallery__swiper', {
    modules: [Navigation],
    direction: 'horizontal',
    speed: 500,
    spaceBetween: 5,
    slidesPerView: 'auto',
    allowTouchMove: true,
    loop: true,

    navigation: {
      nextEl: '.gallery__button--next',
      prevEl: '.gallery__button--prev',
    },
  });
};

const checkGallerySwiper = () => {
  if (DESKTOP_WIDTH.matches && gallerySwiperContainer) {
    destroyGallerySwiper();

  } else if (!DESKTOP_WIDTH.matches && !gallerySwiperContainer) {
    initGallerySwiper();
  }
};

const debouncedCheckGallerySwiper = debounce(checkGallerySwiper, 50);

window.addEventListener('resize', debouncedCheckGallerySwiper);

export { checkGallerySwiper };
