function displayResult(result) {
  const gameStatus = document.getElementById("gameStatus");
  if (result === "Win") {
    gameStatus.textContent = "🎉 Congratulations, you won!";
    gameStatus.classList.add("text-green-600");
    gameStatus.classList.remove("text-red-600");
  } else {
    gameStatus.textContent = "😢 Oops, you lost!";
    gameStatus.classList.add("text-red-600");
    gameStatus.classList.remove("text-green-600");
  }
}

function simulateGame() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = Math.random() < 0.5 ? "Win" : "Lose";
      resolve(result);
    }, 2000);
  });
}

function startGame() {
  const gameStatus = document.getElementById("gameStatus");
  let countdown = 3;
  gameStatus.classList.remove("text-green-600", "text-red-600");
  gameStatus.textContent = `⏳ Game starting in ${countdown}...`;

  const intervalId = setInterval(() => {
    countdown--;
    if (countdown > 0) {
      gameStatus.textContent = `⏳ Game starting in ${countdown}...`;
    } else {
      clearInterval(intervalId);
      setTimeout(() => {
        gameStatus.textContent = "🎮 Game Starting...";
        simulateGame().then(displayResult);
      }, 1000);
    }
  }, 1000);
}
