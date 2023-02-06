var _ = require('lodash');

const { times } = require("lodash");


const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
document.addEventListener(
  'click',
  _.throttle(() => {
    player.on('play', function (timeupdate) {
      console.log('played the video!');
      localStorage.setItem(
        'videoplayer-current-time',
        JSON.stringify(timeupdate.seconds)
      );
    });
  }, 1000)
);

    if (!localStorage.getItem('videoplayer-current-time')) {
      localStorage.setItem('videoplayer-current-time', JSON.stringify(0));
      console.log('create Item');
    }
    let currentTime = JSON.parse(
      localStorage.getItem('videoplayer-current-time')
    );
    player.setCurrentTime(currentTime);

   
 