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
import 'swiper/modules/pagination/pagination.min.css';

function aboutAdvanSlider () {
    const texts = ['Центр города', 'Удобная зона ожидания', 'Комфортные кабинеты', 'Чай, кофе и угощения', 'Wi-Fi', 'Парковка'];
    const slider = new Swiper('.about_advan_slider', {
      modules: [ Navigation, Scrollbar, Mousewheel, Autoplay, Pagination, EffectFade],
        slidesPerView: 1,
        speed: 700,
        spaceBetween: 8,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        effect: "fade",
        fadeEffect: {
          crossFade: true
        },
        loopedSlides: 4,
        pagination: {
          el: '.about_advan_slider__pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return '<div class="bullet ' + className + '">' + '<span class="number">0' + (index + 1) + '.</span> <span class="text">'  + (texts[index]) + '</span></span></div>';
          },
        },
    });
}

export default aboutAdvanSlider;