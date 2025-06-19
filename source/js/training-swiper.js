import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { addActiveView } from './add-active-view';

let instructorsSwiper = null;
const instructors = document.querySelector('.instructors');

const initInstructorsSwiper = () => {
  instructorsSwiper = new Swiper('.instructors__swiper', {
    modules: [Navigation],
    direction: 'horizontal',
    speed: 500,
    slideActiveClass: 'instructors__slide--active',
    allowTouchMove: true,

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        initialSlide: 2,
      },

      476: {
        slidesPerView: 2,
        spaceBetween: 20,
        initialSlide: 0,
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 20,
        initialSlide: 0,
      },

      1002: {
        slidesPerView: 4,
        spaceBetween: 20,
        initialSlide: 0,
      }
    },

    navigation: {
      nextEl: '.instructors__button--next',
      prevEl: '.instructors__button--prev',
    },
  });
};

const setActiveInstructorsView = () => {
  if (instructorsSwiper) {
    const instructorsLinks = instructors.querySelectorAll('a');

    const addInstructorsActiveStyles = (element) => {
      element.classList.add('instructor-card__social--active');
    };

    const removeInstructorsActiveStyles = (element) => {
      element.classList.remove('instructor-card__social--active');
    };

    const addInstructorsHoverStyles = (element) => {
      element.classList.add('instructor-card__social--hover');
    };

    const removeInstructorsHoverStyles = (element) => {
      element.classList.remove('instructor-card__social--hover');
    };

    addActiveView(instructorsLinks, addInstructorsActiveStyles, removeInstructorsActiveStyles, addInstructorsHoverStyles, removeInstructorsHoverStyles);
  }
};

export { initInstructorsSwiper, setActiveInstructorsView };
