function PlayMusic() {
    let duration;
    let curTime = 0;
    let playing = false;
    let clickedTime = null;
  
    function setAudioData() {
      const audio = document.getElementById("audio");
      if (audio) {
        duration = audio.duration;
        curTime = audio.currentTime;
      }
    }
  
    function setAudioTime() {
      curTime = audio.currentTime;
      console.log("audio.currentTime", audio.currentTime);
    }
  
    function setPlaying(value) {
      playing = value;
    }
  
    function setClickedTime(value) {
      clickedTime = value;
    }
  
    function cleanup() {
      const audio = document.getElementById("audio");
      audio.removeEventListener("loadeddata", setAudioData);
      audio.removeEventListener("timeupdate", setAudioTime);
    }
  
    function effect() {
      const audio = document.getElementById("audio");
  
      audio.addEventListener("loadeddata", setAudioData);
      audio.addEventListener("timeupdate", setAudioTime);
  
      if (playing) {
        audio.play();
      } else {
        audio.pause();
      }
  
      if (clickedTime !== null && clickedTime !== curTime) {
        audio.currentTime = clickedTime;
        clickedTime = null;
      }
  
      return cleanup;
    }
  
    effect();
  
    return {
      clickedTime,
      curTime,
      duration,
      playing,
      setPlaying,
      setClickedTime,
    };
  }
  
  export default PlayMusic;
  