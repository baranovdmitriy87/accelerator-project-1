// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

const tabs = document.querySelectorAll('.price__tab-link');
const tabList = document.querySelector('.price__tabs-list');
const cardItems = document.querySelectorAll('.price__cards');


const toggleTab = () => {
  if (tabList) {
    tabList.classList.remove('price__tabs--nojs');
    cardItems.forEach((cardItems) => {
      cardItems.classList.remove('price__cards--nojs');
    });

    tabs.forEach((tab, i) => {
      tab.addEventListener('click', (evt) => {
        evt.preventDefault();
        tabs.forEach((el) => {
          el.classList.remove('is-active');
        });
        tab.classList.add('is-active');
        cardItems.forEach((cardItems) => {
          cardItems.classList.add('is-hidden');
        });
        cardItems[i].classList.remove('is-hidden');
      });
    });
  }
};

toggleTab();

export { toggleTab };
