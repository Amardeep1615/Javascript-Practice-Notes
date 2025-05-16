function generateResult() {
  const status = document.getElementById("status");
  status.textContent = "Generating your result...";


  new Promise((resolve, reject) => {
    setTimeout(() => {
      const score = Math.floor(Math.random() * 100); // 0 - 99
      if (score >= 40) {
        resolve(`✅ Pass! Your Score: ${score}`);
      } else {
        reject(`❌ Fail. Your Score: ${score}`);
      }
    }, 2000);
  })
  .then((result) => {
    status.textContent = result;
    status.classList.remove("text-red-600");
    status.classList.add("text-green-600");
  })
  .catch((error) => {
    status.textContent = error;
    status.classList.remove("text-green-600");
    status.classList.add("text-red-600");
  });
}
