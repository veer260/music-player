let prevBtn = document.querySelector("#prev");
let nextBtn = document.querySelector("#next");
let playBtn = document.querySelector("#play");
// console.log(playBtn);
let songTitle = document.querySelector("#title");
let audio = document.querySelector("#audio");
let coverImage = document.querySelector("#cover");
let musicContainer = document.querySelector(".music-container");
let progressDiv = document.querySelector(".progress");
// let progressContainer = document.querySelector(".progress-container");

const progressContainer = document.getElementById('progress-container');


let songs = ['hey', 'summer', 'ukulele'];
let songIndex = 0;
loadSong(songs[songIndex]);

function loadSong(song){
    songTitle.textContent = song;
    coverImage.src = `./images/${song}.jpg`;
    audio.src = `./music/${song}.mp3`;
}

function pauseSong(){
    musicContainer.classList.remove("play");
    playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    audio.pause();

}

function playSong(){
    musicContainer.classList.add("play");
    playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    audio.play();
}



function updateProgress(event){
    const {duration, currentTime} = event.target;
    // console.log(duration);
    // console.log(currentTime);
    let w = (currentTime/duration)*100;
    progressDiv.style.width = `${w}%`;
}



function setProgress(e){
    // const wid = this.clientWidth;
    // console.log(wid);
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
  
    audio.currentTime = (clickX / width) * duration;
    // console.log(progressContainer.clientWidth);
}

playBtn.addEventListener("click", function(){
    ispalying = musicContainer.classList.contains("play");
    if(ispalying){
        pauseSong();  
    }else{
        playSong();
    }
})

prevBtn.addEventListener("click", function(){
    songIndex--;
    if(songIndex < 0){
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
})

nextBtn.addEventListener("click", function(event){
    songIndex++;
    if(songIndex > songs.length - 1){
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
})
nextBtn.addEventListener('click', function(){
    console.log("hello");
});
// audio.addEventListener("timeupdate", updateProgress);

// progressContainer.addEventListener("click", setProgress);
