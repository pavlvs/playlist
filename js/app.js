let playlist = new Playlist();

let hereComesTheSun = new Song('Here comes the Sun', 'The Beatles', '2:54');
let walkingOnSunshine = new Song('Walking on sunshine', 'Katrina and the Waves', '3:12');

playlist.add(hereComesTheSun);
playlist.add(walkingOnSunshine);

let playlistElement = document.getElementById('playlist');

playlist.renderIn(playlistElement);

let playButton = document.getElementById('play');
let nextButton = document.getElementById('next');
let stopButton = document.getElementById('stop');

playButton.addEventListener('click', function () { 
    playlist.play();
    playlist.renderIn(playlistElement);
});

nextButton.addEventListener('click', function () { 
    playlist.next();
    playlist.renderIn(playlistElement);
});

stopButton.addEventListener('click', function () { 
    playlist.stop();
    playlist.renderIn(playlistElement);
});
