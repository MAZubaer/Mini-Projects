let timer = null;
let currentTime = 0;
const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

function updateDisplay() {
    // Format as MM:SS
    let minutes = Math.floor(currentTime / 60);
    let seconds = currentTime % 60;
    let minStr = minutes.toString().padStart(2, '0');
    let secStr = seconds.toString().padStart(2, '0');
    display.textContent = `${minStr}:${secStr}`;
}

function startTimer() {
    if (timer !== null || currentTime >= 30) return;
    timer = setInterval(() => {
        if (currentTime < 30) {
            currentTime += 3;
            if (currentTime > 30) currentTime = 30;
            updateDisplay();
            if (currentTime >= 30) stopTimer();
        } else {
            stopTimer();
        }
    }, 1000);
}

function stopTimer() {
    if (timer !== null) {
        clearInterval(timer);
        timer = null;
    }
}

function resetTimer() {
    stopTimer();
    currentTime = 0;
    updateDisplay();
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

updateDisplay();
