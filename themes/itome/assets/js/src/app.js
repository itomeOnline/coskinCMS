import LazyLoad from "vanilla-lazyload";
import LocomotiveScroll from 'locomotive-scroll';
import InputPhone from "./components/inputs/inputPhone";
import Input from "./components/inputs/input";
import validationMessages from "./components/inputs/validationMessages";
import IMask from "imask";
import SimpleBar from "simplebar";
import "simplebar/dist/simplebar.css";
import ModalDispatcher from "./components/modalDispatcher";
import formSubmit from "./components/form";
import advantagesSlider from "./components/advanSlider";
import modalMenuLinks from "./components/modalMenuLinks";
import faqDropdown from "./components/faqDropdown";
import reviewsSlider from "./components/reviewsSlider";
import aboutPicsSlider from "./components/aboutPicsSlider";
import aboutAdvanSlider from "./components/aboutAdvanSlider";
import teamSlider from "./components/teamSlider";
import showInfo from "./components/showInfo";
import Dropdown from './components/dropdown';
import { servicesTable } from "./components/servicesTable";

setTimeout(() => { 
    document.querySelector('body').classList.add('on-loaded');
}, 1000)

document.addEventListener("DOMContentLoaded", _ => {
    if (!sessionStorage.activeSession) {
        
        setTimeout(() => {
            document.querySelector('body').classList.add('disabled');
        }, 3500)
        
        sessionStorage.activeSession = 1;
    } else {
        document.querySelector('body').classList.add('disabled');
    }

    formSubmit();
    ModalDispatcher.init();

    advantagesSlider();
    reviewsSlider();
    aboutPicsSlider();
    aboutAdvanSlider();
    teamSlider();

    modalMenuLinks();
    faqDropdown();

    if (document.querySelector('.team')) {
        showInfo();
    }

    document.querySelectorAll('[data-dropdown]').forEach(el => {
        new Dropdown(el);
    })

    let scroll = new LocomotiveScroll({ 
        getDirection: true,
    });

    let scrollText = new LocomotiveScroll({ 
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
    });
    
    const lazyLoadInstance = new LazyLoad({
        elements_selector: '[data-lazy]'
    });

    setTimeout( _ => {
        scroll.update();


        scroll.on('scroll', (args) => {
        if (args.scroll.y > 100) {
            document.body.dataset.scrollDirection = args.direction;
        }
        else {
            document.body.dataset.scrollDirection = '';
        }
        });
        
        scroll.on('call', func => {
            statsCounter();
        })  
    }, 0)

    // BTN SCROLL TO TOP

    document.querySelector('[data-btn-top=""]').addEventListener('click', _ => {
        window.scrollTo(0,0);
    })

    

    // PRIVACY
    
    if (document.querySelector('.privacy')) {
        let containers = document.querySelectorAll('[data-sector]');
        let links = document.querySelectorAll('.privacy_pagination__link');
        let anchorLinks = document.querySelectorAll('[data-anchor-link]');
      
        function intersectionHandler(entries) {
            [].forEach.call(entries, function(entry) {
                let sector = entry.target.dataset.sector;
                let link = [].find.call(links, link =>  link.getAttribute('href').replace('#', '') === sector);
                if (entry.isIntersecting) {
                    link.classList.add('is-active');
                }
                else {
                    link.classList.remove('is-active');
                }
      
            });
        }
      
        let observerSector = new IntersectionObserver(intersectionHandler, {  threshold: .1, rootMargin: '-20% 0% -50%'});
        [].forEach.call(containers, function(entry) {
            observerSector.observe(entry);
        });
      
        [].forEach.call(anchorLinks, function(link) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
      
                const sector = link.getAttribute('href').replace('#', '');
                const pos = document.querySelector(`[data-sector="${sector}"]`).offsetTop;
                window.scrollTo(0, pos);
            });
        });
      
      }
      
    // ANCHOR LINKS

    const anchorLinks = document.querySelectorAll('[data-anchor]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', evt => {
            evt.preventDefault();
            const target = document.querySelector(`[data-scroll-id=${link.dataset.anchor}]`);
            scroll.scrollTo(target);
        });
    });

    // INPUTS

    const inputs = document.querySelectorAll('.input_wrapper__input');


    document.querySelectorAll('[name="phone"]').forEach((el) => {
        new InputPhone(el);
    });

    inputs.forEach(item => {
        new Input(item, validationMessages);
    })


    servicesTable().init()
});