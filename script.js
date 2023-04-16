let songs = [    
    {trackName: 'River: Miley Cyrus', filePath: '/songs/1.mp3', duration: '2:42' , coverPath: '/img/1.webp'},
    {trackName: "All The Girls You Loved Before: Taylor Swift", filePath: '/songs/2.mp3', duration: '3:41' , coverPath: '/img/2.webp'},
    {trackName: "How I'm Feeling Now: Lewis Calpadi", filePath: '/songs/3.mp3', duration: '3:46' , coverPath: '/img/3.webp'},
    {trackName: "It's Your Thing: Jason Derulo ", filePath: '/songs/4.mp3', duration: '2:57' , coverPath: '/img/4.webp'},
    {trackName: 'Invisible Songs Of Surrender: U2', filePath: '/songs/5.mp3', duration: '4:23' , coverPath: '/img/5.webp'},
    {trackName: "Safe & Sound(Taylor;s Version):Taylor Swift", filePath: '/songs/6.mp3', duration: '3:59' , coverPath: '/img/6.webp'},
    {trackName: 'Maan Meri Jaan(Afterlife):King,Nick Jonas', filePath: '/songs/7.mp3', duration: '3:06' , coverPath: '/img/7.webp'},
    {trackName: 'Miracle:Calvin Harris, Ellie Goulding', filePath: '/songs/8.mp3', duration: '3:06' , coverPath: '/img/8.webp'},
    {trackName: 'The Hard Way:PNAU,Khalid', filePath: '/songs/9.mp3', duration: '3:03' , coverPath: '/img/9.webp'},
    {trackName: 'RUN IT UP: Raja Kumari', filePath: '/songs/10.mp3', duration: '2:23' , coverPath: '/img/10.webp'},
]

let audioElement = new Audio('/songs/1.mp3') ;
var songIndex = 0;
let songItems = Array.from(document.querySelectorAll('.song'));
let masterPlay = document.getElementById('masterPlay') ;
let myProgressBar = document.getElementById('myProgressBar') ;
let masterSongName = document.getElementById('masterSongName') ;


//setting image , song name and durartion for each element
songItems.forEach((element,i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath ;
    element.getElementsByClassName("songName")[0].innerText = songs[i].trackName ;
    element.getElementsByClassName('duration')[0].innerText = songs[i].duration ;
});


//setting duration to right position
var i=0 , len=5;
Array.from(document.querySelectorAll(".duration")).forEach((element)=>{
    element.style.right = 10 + 'vw';
    element.style.top += i + len  + 'vh' ;
    i += 8.3 ;
    len+=1.2;
})

//setting play icon to right position
var i=0 , len=5;
Array.from(document.querySelectorAll(".song i")).forEach((element)=>{
    element.style.right = 7.5 + 'vw';
    element.style.top += i + len  + 'vh' ;
    i += 8.3 ;
    len+=1.2;
})

// setting id to all play icon
Array.from(document.querySelectorAll(".song i")).forEach((element,index)=>{
    element.setAttribute('id', index);
})

//play icon ko use kr song play krna 
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click', function(e){
        makeAllPlays() ;
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        songIndex = parseInt(this.id);
        audioElement.src = '/songs/' + (songIndex+1) + '.mp3';
        audioElement.currentTime = 0 ;
        audioElement.play() ;
        masterSongName.innerText = songs[songIndex].trackName ;
        gif.src = '/img/' + (songIndex+1) + '.webp' ;
        masterPlay.classList.remove('fa-play-circle') ;
        masterPlay.classList.add('fa-pause-circle') ;
    })
})

//ek bar me ek hi play button chle
function makeAllPlays(){
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

// previous button use kr traverse krna
var newSongIndex ;
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex == 0){
        newSongIndex = 9 ;
    }
    else{
        newSongIndex = songIndex - 1 ;
    }
    
    
    var prev = document.getElementById(newSongIndex);
    prev.classList.remove('fa-play-circle');
    prev.classList.add('fa-pause-circle');

    var curr = document.getElementById(songIndex);
    curr.classList.remove('fa-pause-circle');
    curr.classList.add('fa-play-circle');

    audioElement.src = '/songs/' + (newSongIndex+1) + '.mp3';
    audioElement.currentTime = 0 ;
    audioElement.play() ;
    gif.src = '/img/' + (newSongIndex + 1) + '.webp' ;
    masterSongName.innerText = songs[newSongIndex].trackName ;
    console.log(masterSongName);
    masterPlay.classList.remove('fa-play-circle') ;
    masterPlay.classList.add('fa-pause-circle') ;
    songIndex = newSongIndex ;
})


//next button use kr traverse krna
document.getElementById('next').addEventListener('click', ()=>{
    console.log(songIndex);
    if(songIndex == 9){
        newSongIndex = 0 ;
    }
    else{
        newSongIndex = songIndex + 1 ;
    }

    // if(songIndex == 1){
    //     newSongIndex = 1 ;
    // }

    var next = document.getElementById(newSongIndex);
    next.classList.remove('fa-play-circle');
    next.classList.add('fa-pause-circle');

    var curr = document.getElementById(songIndex);
    curr.classList.remove('fa-pause-circle');
    curr.classList.add('fa-play-circle');
        
    audioElement.src = '/songs/' + (newSongIndex+1) + '.mp3';
    audioElement.currentTime = 0 ;
    audioElement.play() ;
    gif.src = '/img/' + (newSongIndex + 1) + '.webp';
    masterPlay.classList.remove('fa-play-circle') ;
    masterPlay.classList.add('fa-pause-circle') ;
    masterSongName.innerText = songs[newSongIndex].trackName ;
    songIndex = newSongIndex ;
})

//pause play buttons
var pauseThis ;
masterPlay.addEventListener('click' , function (){
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play() ;
        masterPlay.classList.remove('fa-play-circle') ;
        masterPlay.classList.add('fa-pause-circle') ;
        pauseThis = document.getElementById(songIndex) ;
        pauseThis.classList.add('fa-pause-circle');
        pauseThis.classList.remove('fa-play-circle');  
    }
    else{
        audioElement.pause() ;
        masterPlay.classList.remove('fa-pause-circle') ;
        masterPlay.classList.add('fa-play-circle') ;
        pauseThis = document.getElementById(songIndex) ;
        pauseThis.classList.remove('fa-pause-circle');
        pauseThis.classList.add('fa-play-circle');  
    }
}) ;


//progressBar
audioElement.addEventListener('timeupdate' , ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100) ;
    myProgressBar.value = progress ;
}) ;

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100 ;
});






