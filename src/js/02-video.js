var _ = require('lodash');

const { times } = require("lodash");

// import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
player.on('play', function (timeupdate) {
    
// _.throttle(() => {
//       localStorage.setItem(
//         'videoplayer-current-time',
//         JSON.stringify(timeupdate.seconds)
//       );
//     }, 1000);



  console.log('played the video!');
   localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(timeupdate.seconds)
  );
});


if (!localStorage.getItem('videoplayer-current-time')) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(0));
  console.log('create Item');
}
let i = JSON.parse(localStorage.getItem('videoplayer-current-time'));
player.setCurrentTime(i);

