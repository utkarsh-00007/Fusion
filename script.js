console.log("Welcome to Spotify");
// Initialize the varables
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems=document.getElementsByClassName('songItem');
let songs=[
    {songName: "abc", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "def", filePath:"songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName: "ghi", filePath:"songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName: "jkl", filePath:"songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName: "mno", filePath:"songs/5.mp3", coverPath:"covers/5.jpg"},
    {songName: "pqr", filePath:"songs/6.mp3", coverPath:"covers/6.jpg"},
    {songName: "Stu", filePath:"songs/7.mp3", coverPath:"covers/7.jpg"},
    {songName: "vwx", filePath:"songs/8.mp3", coverPath:"covers/8.jpg"},
    {songName: "yx", filePath:"songs/9.mp3", coverPath:"covers/9.jpg"},
];

songItems.forEach(element => {
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].filePath;
});

  
//Handle play pause click
masterPlay.addEventListener('click',()=>{
    if (audioElement.paused || audioElement.currentTime<0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

//Listen to events
audioElement.addEventListener('timeupdate',()=>{
    //upadate seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;
})