const timerDisplay = document.createElement('div');
timerDisplay.style.fontSize = "24px";
timerDisplay.style.fontWeight = "bold";
timerDisplay.style.margin = "20px";
timerDisplay.style.textAlign = "center";
timerDisplay.style.position = "fixed";       // Make it stick to top
timerDisplay.style.top = "0";                // Align at top of page
timerDisplay.style.left = "0";
timerDisplay.style.right = "0";
timerDisplay.style.zIndex = "1000";  
timerDisplay.style.backgroundColor = "Red";
document.body.insertBefore(timerDisplay, document.body.firstChild);

let timeLeft = 10;
timerDisplay.textContent = `Time Remaining: ${timeLeft} seconds`;;

const countdown = setInterval(() => {
    timeLeft--;

if (timeLeft > 0) {
    timerDisplay.textContent = `Time Remaining : ${timeLeft} seconds`;
}
else {
    timerDisplay.textContent = "Time's up";
    clearInterval(countdown)

    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => radio.disabled = true);
} 

},1000);
