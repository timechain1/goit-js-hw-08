import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const TIME_CHAIN = 'videoplayer-current-time';
const player = new Player(iframe);
const onPlay = function (data) {
  localStorage.setItem(TIME_CHAIN, data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));
player.setCurrentTime(localStorage.getItem(TIME_CHAIN));
