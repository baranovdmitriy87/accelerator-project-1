// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
import 'swiper/css';
import { toggleTabPrice } from './modules/toggle-tab-price';
// import { playVideo } from './modules/play-video';


window.addEventListener('load', () => {
  toggleTabPrice();
});
