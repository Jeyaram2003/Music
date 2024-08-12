const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause');
const progressBar = document.getElementById('progress');
const volumeSlider = document.getElementById('volume');
const playPauseIcon = playPauseBtn.querySelector('i');

let isPlaying = false;

// Play/Pause functionality
playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        playPauseIcon.classList.replace('fa-pause', 'fa-play');
    } else {
        audio.play();
        playPauseIcon.classList.replace('fa-play', 'fa-pause');
    }
    isPlaying = !isPlaying;
});

// Update progress bar as song plays
audio.addEventListener('timeupdate', () => {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progressPercent;
});

// Seek functionality
progressBar.addEventListener('input', () => {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
});

// Volume control
volumeSlider.addEventListener('input', () => {
    audio.volume = volumeSlider.value;
});
