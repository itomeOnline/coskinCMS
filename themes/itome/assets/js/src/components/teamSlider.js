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

function teamSlider () {
    const slider = new Swiper('.team__slider', {
        modules: [Mousewheel, Navigation],
        slidesPerView: 1.1,
        speed: 700,
        spaceBetween: 24,
        watchOverflow: true,
        mousewheelControl: true,
        mousewheel: {
          forceToAxis: true,
        },
        centeredSlides: true,
        navigation: {
          nextEl: '.team__slider_btn--next',
          prevEl: '.team__slider_btn--prev',
        },
    });
}

export default teamSlider;