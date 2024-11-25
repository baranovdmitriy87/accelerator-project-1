const tabs = document.querySelectorAll('.price__tab-link');
const cardItems = document.querySelectorAll('.price__cards');

const toggleTabPrice = () => {
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
      tabs.forEach((el) => {
        el.classList.remove('is-active');
      });
      tab.classList.add('is-active');
      cardItems.forEach((item) => {
        item.classList.add('is-hidden')
      });
      cardItems[i].classList.remove('is-hidden')
    });
  })
};

toggleTabPrice();

export { toggleTabPrice };
