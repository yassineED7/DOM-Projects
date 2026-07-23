// Variables for time values

let seconds = 0;
let minutes = 0;
let hours = 0;

// Variables for leading zero formatting
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// Variables for setInterval and timer status
let timerInterval = null;
let timerStatus = "stopped";

// Stop Watch Logic Function
function stopWatch() {
    seconds++;

    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }

    // Add leading zero if less than 10
    if (seconds < 10) {
        leadingSeconds = "0" + seconds.toString();
    } else {
        leadingSeconds = seconds;
    }

    if (minutes < 10) {
        leadingMinutes = "0" + minutes.toString();
    } else {
        leadingMinutes = minutes;
    }

    if (hours < 10) {
        leadingHours = "0" + hours.toString();
    } else {
        leadingHours = hours;
    }

    // Display the updated timer values to HTML
    let displayTimer = document.getElementById('timer').innerText = 
        leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}

// Start / Stop Button Event Listener
const startStopBtn = document.getElementById('startStopBtn');
const playIcon = document.getElementById('play');

startStopBtn.addEventListener('click', function() {
    if (timerStatus === "stopped") {
        timerInterval = window.setInterval(stopWatch, 1000);
        playIcon.classList.remove('fa-play');
        playIcon.classList.add('fa-pause');
        timerStatus = "started";
    } else {
        window.clearInterval(timerInterval);
        playIcon.classList.remove('fa-pause');
        playIcon.classList.add('fa-play');
        timerStatus = "stopped";
    }
});

// Reset Button Event Listener
const resetBtn = document.getElementById('resetBtn');

resetBtn.addEventListener('click', function() {
    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    
    document.getElementById('timer').innerText = "00:00:00";
    
    playIcon.classList.remove('fa-pause');
    playIcon.classList.add('fa-play');
    timerStatus = "stopped";
});