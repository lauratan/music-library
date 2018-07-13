const util = require('util');

function Library(name, creator){
    this.name = name,
    this.creator = creator,
    this.playlists = []
}

Library.prototype.addPlaylist = function(playlistName){
    this.playlists.push(playlistName);
}

function Playlist(playlistname, rating){
    this.name = playlistname;
    this.track = [];
}

Playlist.prototype.overallRating = function(tracks){
    let sum = 0;
    for (let track of this.track){
        sum += track.rating;
    }
    return (Math.round(sum/this.track.length, 2))
}

Playlist.prototype.totalDuration = function(tracks){
    let total = 0;
    for (let track of this.track){
        total += track.length;
    }
    return (Math.round(total/this.track.length, 2))
}

Playlist.prototype.addTrack = function(trackName){
    this.track.push(trackName)
}

function Track(title, rating, length){
    this.title = title;
    this.rating = rating;
    this.length = length;
}


const musiclibrary = new Library('library one', 'Laura');
const playlistOne = new Playlist('p01');
const playlistTwo = new Playlist('p02');
const trackOne = new Track('t01', 5, 60);
const trackTwo = new Track('t02', 3, 180);
const trackThree = new Track('t03', 1, 120);
const trackFour = new Track('t04', 2, 90);
const trackFive = new Track('t05', 4, 170);
const trackSix = new Track('t06', 5, 200);

musiclibrary.addPlaylist(playlistOne)
musiclibrary.addPlaylist(playlistTwo)
playlistOne.addTrack(trackOne)
playlistOne.addTrack(trackThree)
playlistTwo.addTrack(trackTwo)
playlistOne.addTrack(trackFour)
playlistTwo.addTrack(trackFive)
playlistTwo.addTrack(trackSix)
console.log(playlistOne.overallRating());
console.log(playlistOne.totalDuration());
console.log(playlistTwo.overallRating());
console.log(playlistTwo.totalDuration());
console.log(util.inspect(musiclibrary, false, null))
