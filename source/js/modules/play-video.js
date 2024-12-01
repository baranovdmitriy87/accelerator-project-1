const playVideo = () => {
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  if (document.querySelector('.about__video') && document.querySelector('.about__link')) {
    let player = document.querySelector('.about__video');
    let link = document.querySelector('.about__link');

    link.addEventListener('click', (evt) => {
      evt.preventDefault();
      player.classList.add('is-show');
      new YT.Player(player, {
        videoId: '9TZXsZItgdw',
        events: {
          onReady: (e) => e.target.playVideo(),
        },
      });
      evt.stopPropagation();
    });
  }
};

export { playVideo };
