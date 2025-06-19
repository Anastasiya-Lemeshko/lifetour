import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';

const initTourSwiper = () => {
  new Swiper('.tours__swiper', {
    modules: [Navigation],
    direction: 'horizontal',
    speed: 500,
    slideActiveClass: 'tours__slide--active',
    spaceBetween: 18,
    allowTouchMove: true,

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 18,
      },

      628: {
        slidesPerView: 2,
        spaceBetween: 18,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },

      1020: {
        slidesPerView: 3,
        spaceBetween: 30,
      }
    },

    navigation: {
      nextEl: '.tours__button--next',
      prevEl: '.tours__button--prev',
    },
  });
};

export { initTourSwiper };
