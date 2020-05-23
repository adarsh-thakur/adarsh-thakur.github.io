const {Howl} = require('howler');

var sound = new Howl({
    src: ['starwars.webm'],
    autoplay: true,
    loop: true,
    volume: 0.5
  });