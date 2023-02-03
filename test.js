
var playBtn = document.getElementById('btn_song1');
var song = document.getElementById('song')
var topSongIndex = 0;

var listSong = [
  {
    nameSong: 'Anh thương em nhất mà',
    nameFile: 'anhthuongemnhatma.mp3'
  },
  {
    nameSong: 'Ghé qua',
    nameFile: 'ghequa.mp3'
  },
  {
    nameSong: 'Già cùng nhau là được',
    nameFile: 'giacungnhauladuoc.mp3'
  },
  {
    nameSong: 'Hẹn em kiếp sau',
    nameFile: 'henemkiepsau.mp3'
  },
  
  {
    nameSong: 'Một đêm say',
    nameFile: 'motdemsay.mp3'
  }
  ,{
    nameSong: 'Lỡ duyên',
    nameFile: 'loduyen.mp3'
  },
  {
    nameSong: 'Giveon Heartbreak Anniversary',
    nameFile: 'giveonHeartbreakAnniversary.mp3'
  }
]
isPlaying = true;
// song.setAttribute("src",`./public/musicFile/${listSong[topSongIndex].nameFile}`);
// song.setAttribute("src",`./public/musicFile/anhthuongemnhatma.mp3`);
// playBtn.addEventListener('click', song.play())
// song.play();
playBtn.addEventListener('click',function() {
    song.play();
});
