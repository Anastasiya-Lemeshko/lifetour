import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { DESKTOP_WIDTH } from './constants.js';
import { debounce } from './utils.js';

const advantagesSwiper = document.querySelector('.advantages__swiper');
const advantagesSwiperWrapper = advantagesSwiper.querySelector('.advantages__swiper-container');
const advantagesSlides = advantagesSwiper.querySelectorAll('.advantages__slide');

let advantagesSwiperContainer = null;

const addClass = () => {
  advantagesSwiper.classList.add('swiper');
  advantagesSwiperWrapper.classList.add('swiper-wrapper');
  advantagesSlides.forEach((slide) => {
    slide.classList.add('swiper-slide');
  });
};

const removeClass = () => {
  advantagesSwiper.classList.remove('swiper');
  advantagesSwiperWrapper.classList.remove('swiper-wrapper');
  advantagesSlides.forEach((slide) => {
    slide.classList.remove('swiper-slide');
  });
};

const addDuplicateSlides = () => {
  if (advantagesSlides.length < 8) {
    advantagesSlides.forEach((slide) => {
      const clonedSlide = slide.cloneNode(true);
      clonedSlide.classList.add('swiper-slide', 'virtual-slide');
      advantagesSwiperWrapper.appendChild(clonedSlide);
    });
  }
};

const removeDuplicateSlides = () => {
  const duplicateSlides = advantagesSwiper.querySelectorAll('.virtual-slide');

  if (duplicateSlides.length > 0) {
    duplicateSlides.forEach((slide) => {
      slide.remove();
    });
  }
};

const destroyAdvantagesSwiper = () => {
  if (advantagesSwiperContainer) {
    advantagesSwiperContainer.destroy();
    advantagesSwiperContainer = null;
    removeClass();
  }
};

const initAdvantagesSwiper = () => {
  addClass();

  advantagesSwiperContainer = new Swiper('.advantages__swiper', {
    modules: [Navigation],
    direction: 'horizontal',
    speed: 600,
    slidesPerView: 'auto',
    loop: true,
    slidesPerGroup: 2,
    spaceBetween: 30,
    centeredSlides: true,
    initialSlide: 2,
    allowTouchMove: true,

    navigation: {
      nextEl: '.advantages__button--next',
      prevEl: '.advantages__button--prev',
    },
  });
};

const checkAdvantagesSwiper = () => {
  if (DESKTOP_WIDTH.matches && !advantagesSwiperContainer) {
    addDuplicateSlides();
    initAdvantagesSwiper();

  } else if (!DESKTOP_WIDTH.matches && advantagesSwiperContainer) {
    destroyAdvantagesSwiper();
    removeDuplicateSlides();
  }
};

const debouncedCheckAdvantagesSwiper = debounce(checkAdvantagesSwiper, 50);

window.addEventListener('resize', debouncedCheckAdvantagesSwiper);

export { checkAdvantagesSwiper };
