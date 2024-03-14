import Swiper, {
    Navigation,
    Scrollbar,
    Mousewheel,
    Pagination,
    EffectFade,
    Autoplay,
    Virtual,
    FreeMode 
  } from 'swiper';
  
import 'swiper/swiper.min.css';
// import 'swiper/components/scrollbar/scrollbar.min.css';

function reviewsSlider () {
    const slider = new Swiper('.reviews__slider', {
        modules: [Scrollbar, Mousewheel, Navigation],
        slidesPerView: 2.4,
        speed: 700,
        spaceBetween: 24,
        watchOverflow: true,
        mousewheelControl: true,
        freeMode: {
          enabled: true
        },
        mousewheel: {
          forceToAxis: true,
        },
        navigation: {
          nextEl: '.reviews__slider_btn--next',
          prevEl: '.reviews__slider_btn--prev',
        },
        breakpoints: {
          300: {
            slidesPerView: 1,
            spaceBetween: 16
          },
          700: {
            slidesPerView: 1.5,
            spaceBetween: 20
          },
          1300: {
            slidesPerView: 2.4,
            spaceBetween: 24
          },
        },
    });
}

export default reviewsSlider;