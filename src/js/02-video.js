import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const video = document.querySelector('iframe');
const player = new Player(video);

// włączenie nasłuchiwania zmiany znacznika czasu przy włączonym odtwarzaniu
const timeUpdate = function (currentTime) {
  // console.log(currentTime);
  sessionStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(currentTime)
  );
};
// metoda trottle pozwala zapisać bieżący czas do sessionStorage raz na 1000ms
// test poprawnego załadowania biblioteki lodash
// const result = _.add(2, 3);
// console.log(result);
// player.on('timeupdate', _.throttle(timeUpdate, 1000));
player.on('timeupdate', throttle(timeUpdate, 1000));

const onPlay = function () {
  // console.log('Player on');
  // ładuję z sessionStorage zapisany czas i wyciągam z niego startowe sekundy
  // jak nie ma zapisanego czasu, to przyjmuję 0 sekund
  const timeInStorage = sessionStorage.getItem('videoplayer-current-time');
  const startSeconds =
    timeInStorage === null ? 0 : JSON.parse(timeInStorage).seconds;
  // console.log('Startowe sekundy:');
  // console.log(startSeconds);

  // ustawiam czas pobrany z sessionStorage jako czas bieżący playera
  player.setCurrentTime(startSeconds);
};
player.on('play', onPlay);

// const onPlay = function () {
//   console.log('Player on');
//   // ładuję z sessionStorage zapisany czas i wyciągam z niego startowe sekundy
//   // jak nie ma zapisanego czasu, to przyjmuję 0 sekund
//   const readTimeStamp = () => {
//     try {
//       const timeInStorage = sessionStorage.getItem('videoplayer-current-time');
//       return timeInStorage === null ? 0 : JSON.parse(timeInStorage).seconds;
//     } catch (error) {
//       console.error('Get state error: ', error.message);
//     }
//   };
//   const startSeconds = readTimeStamp();
// console.log(startSeconds);

// ustawiam czas pobrany z sessionStorage jako czas bieżący playera
//   player
//     .setCurrentTime(startSeconds)
//     .then(function (seconds) {
//       // seconds = the actual time that the player seeked to
//       // player.on('timeupdate', timeUpdate);
//     })
//     .catch(function (error) {
//       switch (error.name) {
//         case 'RangeError':
//           // the time was less than 0 or greater than the video’s duration
//           window.alert("Niepoprawny zakres czasu")
//           break;
//         default:
//           // some other error occurred
//           window.alert("Błąd")
//           break;
//       }
//     });
// };
// player.on('play', onPlay);
