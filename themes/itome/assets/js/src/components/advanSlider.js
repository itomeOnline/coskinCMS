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

function advantagesSlider () {
    const slider = new Swiper('.advantages__slider', {
        modules: [Scrollbar, Mousewheel, FreeMode ],
        slidesPerView: 4,
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
        scrollbar: {
          el: '.advantages__scroll',
        },
        breakpoints: {
          1000: {
            slidesPerView: 3,
            spaceBetween: 24
          },
          1800: {
            slidesPerView: 4,
            spaceBetween: 24
          },
        },
    });
}

export default advantagesSlider;