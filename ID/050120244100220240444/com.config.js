
const ClickButton = document.querySelector('.ClickButton');
const BoldButton = document.querySelector('.BoldButton');
const TextContentData = document.querySelector('.TextContentData');
const NextButton = document.querySelector('.NextButton');
const Certificate = document.querySelector('.Certificate');
const PausePlayButton = document.querySelector('.PausePlayButton');
const PlayerSong = document.querySelector('.PlayerSong')
const PlayButton = document.querySelector('.PlayButton');
const PauseButton = document.querySelector('.PauseButton');
const TimeLap = document.querySelector('.TimeLap');
const Player = document.querySelector('.Player');
const NextButtonPlayer = document.querySelector('.NextButtonPlayer');
const Gallery = document.querySelector('.Gallery');
const Refresh = document.querySelector('.Refresh');


let Step = 0;

ClickButton.addEventListener('click', Activate);

function Activate(){

    document.body.classList.add('Show')

}


let BoldStatus = false;

BoldButton.addEventListener('click', SwitchBold);

function SwitchBold(){

    if(BoldStatus == false){

        TextContentData.classList.add('BoldLetter');

        BoldStatus = true;

    }else if(BoldStatus == true){

        TextContentData.classList.remove('BoldLetter');

        BoldStatus = !true;


    }

}

NextButton.addEventListener('click', HideOldData);

function HideOldData(e){

    if(Step == 0){

        document.querySelector('.Showing').style.display = "none";
        BoldButton.style.display = "none";
        ClickButton.style.background = "transparent";
        Player.style.display = "flex";
        PlayerSong.play()

        Step = 1
        
    }else if(Step == 1){

        Gallery.style.display = "flex";
        Player.style.display = "none";

    }

}


//Player


let Playing = true;

PausePlayButton.addEventListener('click', CheckPlayStatus);

function CheckPlayStatus(e){

    if(Playing == true){

        PlayerSong.pause()
        PauseButton.style.display = "none";
        PlayButton.style.display = "flex";
        Playing = false;

    }else if(Playing == false){

        PlayerSong.play();
        PauseButton.style.display = "flex";
        PlayButton.style.display = "none";
        Playing = true

    }

}

var playerSong = document.querySelector(".PlayerSong");
var timeLapElement = document.querySelector(".TimeLap");

playerSong.addEventListener("timeupdate", function() {
    var currentTime = playerSong.currentTime;
    var duration = playerSong.duration;

    var currentFormatted = formatTime(currentTime);
    var durationFormatted = formatTime(duration);

    timeLapElement.textContent = currentFormatted + " / " + durationFormatted;
});

function formatTime(seconds) {
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = Math.floor(seconds % 60);

    minutes = (minutes < 10) ? "0" + minutes : minutes;
    remainingSeconds = (remainingSeconds < 10) ? "0" + remainingSeconds : remainingSeconds;

    return minutes + ":" + remainingSeconds;
}


NextButtonPlayer.addEventListener('click', e=>{

    Player.style.display = "none";
    Certificate.style.display = "flex";

})


Refresh.addEventListener('click', e=>{

    window.location.reload()

})