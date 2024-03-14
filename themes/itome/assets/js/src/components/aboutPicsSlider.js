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

function aboutPicsSlider () {
    const slider = new Swiper('.about_pics_slider', {
        modules: [Scrollbar, Mousewheel, Navigation],
        slidesPerView: 1.1,
        speed: 700,
        spaceBetween: 24,
        watchOverflow: true,
        mousewheelControl: true,
        centeredSlides: true,
        // freeMode: {
        //   enabled: true
        // },
        mousewheel: {
          forceToAxis: true,
        },
        navigation: {
          nextEl: '.about_pics_slider__btn--next',
          prevEl: '.about_pics_slider__btn--prev',
        },
        breakpoints: {
          300: {
            spaceBetween: 12
          },
          700: {
            spaceBetween: 20
          },
          1300: {
            spaceBetween: 24
          },
        },
        on: {
          afterInit: function() {
            this.slideTo(1)
            // console.log(this.slideTo(2))
          }
        }
    });
}

export default aboutPicsSlider;