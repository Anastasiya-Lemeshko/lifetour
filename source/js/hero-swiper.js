import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import { addActiveView } from './add-active-view';

const hero = document.querySelector('.hero');
let heroSwiper = null;

const initHeroSwiper = () => {
  heroSwiper = new Swiper('.hero__swiper', {
    modules: [Pagination],
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    speed: 500,
    autoHeight: true,
    slideActiveClass: 'hero__slide--active',
    allowTouchMove: true,

    breakpoints: {
      500: {
        speed: 600,
      },

      768: {
        speed: 700,
      },

      1440: {
        allowTouchMove: false,
        speed: 800,
      }
    },

    pagination: {
      el: '.hero__swiper-pagination',
      bulletElement: 'button',
      bulletClass: 'hero__pagination-bullet',
      bulletActiveClass: 'hero__pagination-bullet--active',
      clickable: true,
    },

    on: {
      slideChange: function () {
        this.slides.forEach((slide, index) => {
          const isActive = index === this.activeIndex;
          slide.querySelectorAll('a, button, input, textarea, select, [tabindex]')
            .forEach((el) => {
              el.tabIndex = isActive ? 0 : -1;
            });
        });
      },
    },
  });
};

const addButtonDescription = () => {
  if (heroSwiper) {
    const bullets = hero.querySelectorAll('.hero__pagination-bullet');

    bullets.forEach((bullet, index) => {
      bullet.insertAdjacentHTML('afterbegin', `<span class="visually-hidden">Слайд ${index + 1}</span>`);
      bullet.setAttribute('type', 'button');
    });
  }
};

const setActiveHeroView = () => {
  if (heroSwiper) {
    const heroLinks = hero.querySelectorAll('a');

    const addHeroActiveStyles = (element) => {
      element.classList.add('hero__link--active');
    };

    const removeHeroActiveStyles = (element) => {
      element.classList.remove('hero__link--active');
    };

    const addHeroHoverStyles = (element) => {
      element.classList.add('hero__link--hover');
    };

    const removeHeroHoverStyles = (element) => {
      element.classList.remove('hero__link--hover');
    };

    addActiveView(heroLinks, addHeroActiveStyles, removeHeroActiveStyles, addHeroHoverStyles, removeHeroHoverStyles);
  }
};

export { initHeroSwiper, addButtonDescription, setActiveHeroView };
