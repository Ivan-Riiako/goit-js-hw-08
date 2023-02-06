var _ = require('lodash');

// import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

if (!localStorage.getItem('videoplayer-current-time')) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(0));
}

player.on(
  'timeupdate',
  _.throttle(({ seconds } = currentTime) => {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
  }, 1000)
);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
