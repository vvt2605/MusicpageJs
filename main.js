var song = document.getElementById("song");
var playpauseBtn = document.getElementById("play-pauseBtn");
var pauseBtn = document.getElementById("pauseBtn");
var nextBtn = document.getElementById("nextBtn");
var prevBtn = document.getElementById("prevBtn");
var randomBtn = document.getElementById("randomBtn");
var replayBtn = document.getElementById("replayBtn");


var volumeControl = document.getElementById("volumeControl");
// var songList = document.getElementById("songList").getElementsByTagName("li");
var songList = document.getElementsByClassName("center_trending_songs");
var songListTrend = document.getElementsByClassName("trending_song_items");
var songArtist = document.getElementById("songArtist");
var songTitle = document.getElementById("songTitle");
var albumArt = document.getElementById("albumArt");
var progressBar = document.getElementById("progressBar");
var timeSongbar = document.getElementById("timeSongbar");
var songData = [
  {
    title: "Anh thương em nhất mà",
    artist: "La. X Log X Tib",
    path: "./public/musicFile/anhthuongemnhatma.mp3",
    art: "#"
  },
  {
    title: "Ghé qua",
    artist: "Taynguyensound, Tofu",
    path: "./public/musicFile/ghequa.mp3",
    art: "#"
  },
  {
    title: "Già cùng nhau là được",
    artist: "TùngTeA",
    path: "./public/musicFile/giacungladuoc.mp3",
    art: "#"
  },
 
  {
    title: "Hẹn em kiếp sau",
    artist: "Duy Phúc",
    path: "./public/musicFile/henemkiepsau.mp3",
    art: "#"
  },

  {
    title: "Một đêm say",
    artist: "Thịnh Suy",
    path: "./public/musicFile/motdemsay.mp3",
    art: "#"
  },
  {
    title: "Lỡ Duyên",
    artist: " RUM ft NIT",
    path: "./public/musicFile/loduyen.mp3",
    art: "#"
  },
  {
    title: "Lửng và Lơ",
    artist: "Bray",
    path: "./public/musicFile/lunglo.mp3",
    art: "#"
  },
  {
    title: "Đi về nhà",
    artist: "Đen Vâu",
    path: "./public/musicFile/divenha.mp3",
    art: "#"
  },
  {
    title: "Suýt nữa thì",
    artist: "Andiez",
    path: "./public/musicFile/suynuathi.mp3",
    art: "#"
  },
  {
    title: "Tâm sự tuổi 30",
    artist: "Trịnh Thăng Bình",
    path: "./public/musicFile/tamsutuoi30.mp3",
    art: "#"
  },
  {
    title: "Chiều hôm ấy",
    artist: "JayKii",
    path: "./public/musicFile/chieuhomay.mp3",
    art: "#"
  },
  {
    title: "Mặt Mộc",
    artist: "Phạm Nguyên Ngọc & Uyên Nhi",
    path: "./public/musicFile/matmoc.mp3",
    art: "#"
  }
  // {
  //   title: "Giveon Heartbreak Anniversary",
  //   artist: "Giveon",
  //   path: "./public/musicFile/giveonHeartbreakAnniversary.mp3",
  //   art: "#"
  // }


]

var songDataTrend = [
  {
    title: "Lỡ Duyên",
    artist: " RUM ft NIT",
    path: "./public/musicFile/loduyen.mp3",
    art: "#"
  },
  {
    title: "Lửng và Lơ",
    artist: "Bray",
    path: "./public/musicFile/lunglo.mp3",
    art: "#"
  },
  {
    title: "Đi về nhà",
    artist: "Đen Vâu",
    path: "./public/musicFile/divenha.mp3",
    art: "#"
  },
  {
    title: "Suýt nữa thì",
    artist: "Andiez",
    path: "./public/musicFile/suytnuathi.mp3",
    art: "#"
  },
  {
    title: "Tâm sự tuổi 30",
    artist: "Trịnh Thăng Bình",
    path: "./public/musicFile/tamsutuoi30.mp3",
    art: "#"
  },
  {
    title: "Chiều hôm ấy",
    artist: "JayKii",
    path: "./public/musicFile/chieuhomay.mp3",
    art: "#"
  },
  {
    title: "Mặt Mộc",
    artist: "Phạm Nguyên Ngọc & Uyên Nhi",
    path: "./public/musicFile/matmoc.mp3",
    art: "#"
  }
]

console.log(songList[2].getAttribute("data-song-index"));

var currentIndex = 0 ;
var isplay = true;
song.src = songData[currentIndex].path;
songTitle.textContent = songData[currentIndex].title;
  songArtist.textContent = songData[currentIndex].artist;

// play button event 
pauseBtn.addEventListener("click", function() {
  
  if (isplay) {
    song.play();
    this.classList.remove("fa-circle-play");
    this.classList.add("fa-circle-pause");
    isplay = false;
   
  }
  else {
    song.pause();

    this.classList.remove("fa-circle-pause");
    this.classList.add("fa-circle-play");
    isplay = true;


  }
  


})

// pause button event 
// pauseBtn.addEventListener("click", function() {
//   song.pause();

// })

// previous button event 

prevBtn.addEventListener("click", function() {
  
  currentIndex = (currentIndex -1+songData.length)%songData.length;
  loadSong();

})

// random button event listener 
randomBtn.addEventListener("click", randomFun)
var isRandom = true;
// random function 
function randomFun(){
  if (isRandom) {
    randomBtn.classList.add("randomActive");
    isRandom = false;
  }
  else {
    randomBtn.classList.remove("randomActive");
    isRandom = true;
  }

  if (randomBtn.classList.contains("randomActive")) {
    song.addEventListener("ended",function() {
      currentIndex = Math.floor(Math.random()*songData.length);
    loadSong();
    })
  }

}

// Next button event listener
nextBtn.addEventListener("click", function() {


  currentIndex = (currentIndex +1)%songData.length;

  loadSong();
  });
  
  // Volume control event listener
  volumeControl.addEventListener("input", function() {
  song.volume = this.value;
  });
  replayBtn.addEventListener("click", function () {

    if (replayBtn.classList.contains("replayActive")) {
      replayBtn.classList.remove("replayActive")
    }
    else {
      replayBtn.classList.add("replayActive")
    }
    
  })
  // Song ended event listener
  if (replayBtn.classList.contains("replayActive")==false){
    song.addEventListener("ended", function() {
      nextBtn.click();
      });

  } 
 


  
  // Song timeupdate event listener
  song.addEventListener("timeupdate", function() {
  var percentage = (song.currentTime / song.duration) * 100;
  progressBar.style.width = percentage + "%";
  var timeSongSecond = Math.floor(song.duration)
  var timeMinnutes = Math.floor(timeSongSecond/60);
var timeSeconds = Math.floor(timeSongSecond-timeMinnutes*60);
  timeSongbar.textContent = timeMinnutes+ `:`+ timeSeconds;
  });
  

// Song list item event listener
for (var i = 0; i < songList.length; i++) {
  songList[i].addEventListener("click", function() {
    currentIndex = parseInt(this.getAttribute("data-song-index"));
    loadSong();
  });
  }

function loadSong() {
  song.src = songData[currentIndex].path;
  songTitle.textContent = songData[currentIndex].title;
  songArtist.textContent = songData[currentIndex].artist;
  for (var i =0; i<songList.length;i++) {
    songList[i].classList.remove("active");
  }
  songList[currentIndex].classList.add("active");
  song.play();
  pauseBtn.classList.remove("fa-circle-play");
  pauseBtn.classList.add("fa-circle-pause");
  isplay=false;
  pauseBtn.style.display = "inline-block";

}
for (var i = 0; i < songListTrend.length; i++) {
  songListTrend[i].addEventListener("click", function() {
      currentIndex = parseInt(this.getAttribute("data-song-index-trend"));
      loadSong();
    });
    }

function loadSong() {
  song.src = songDataTrend[currentIndex].path;
  songTitle.textContent = songDataTrend[currentIndex].title;
  songArtist.textContent = songDataTrend[currentIndex].artist;
  for (var i =0; i<songListTrend.length;i++) {
    songListTrend[i].classList.remove("active");
  }
  songListTrend[currentIndex].classList.add("active");
  song.play();
  pauseBtn.classList.remove("fa-circle-play");
  pauseBtn.classList.add("fa-circle-pause");
  isplay=false;
  pauseBtn.style.display = "inline-block";

}