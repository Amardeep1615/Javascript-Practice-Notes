let globalAnswers = {};
let quizTimer;
let timeLeft = 30;

function saveQuestion() {
  const question = document.getElementById("question").value.trim();
  const options = {
    A: document.getElementById("optionA").value.trim(),
    B: document.getElementById("optionB").value.trim(),
    C: document.getElementById("optionC").value.trim(),
    D: document.getElementById("optionD").value.trim()
  };
  const correct = document.getElementById("correctOption").value.trim().toUpperCase();

  if (!question || !options.A || !options.B || !options.C || !options.D || !"ABCD".includes(correct)) {
    alert("Please fill all fields correctly.");
    return;
  }

  const quizData = JSON.parse(localStorage.getItem("quizQuestions")) || [];
  quizData.push({ question, options, correct });
  localStorage.setItem("quizQuestions", JSON.stringify(quizData));

  document.querySelectorAll("input").forEach(input => input.value = "");
  alert("Question saved!");
}

function startQuiz() {
  const quizData = JSON.parse(localStorage.getItem("quizQuestions")) || [];
  if (quizData.length === 0) return alert("No questions available.");

  document.getElementById("quizArea").innerHTML = "";
  globalAnswers = {};
  let quizHTML = `<form id="quizForm">`;

  quizData.forEach((q, i) => {
    quizHTML += `<div class="mb-4">
      <p class="font-semibold mb-2">${i + 1}. ${q.question}</p>`;
    for (let key in q.options) {
      quizHTML += `
        <label class="block">
          <input type="radio" name="q${i}" value="${key}" onchange="storeAnswer(${i}, this.value)">
          ${key}: ${q.options[key]}
        </label>`;
    }
    quizHTML += `</div>`;
  });
   
  quizHTML += `
    <p id="timer" class="text-red-500 font-bold">Time left: 30 seconds</p>
    <button type="button" onclick="submitNow()" class="mt-4 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">Submit Quiz Now</button>
  </form>`;
     
  document.getElementById("quizArea").innerHTML = quizHTML;
  startTimer();
}

function storeAnswer(index, answer) {
  globalAnswers[index] = answer;
}

function startTimer() {
  timeLeft = 30;
  document.getElementById("timer").textContent = `Time left: ${timeLeft} seconds`;
  quizTimer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").textContent = `Time left: ${timeLeft} seconds`;
    if (timeLeft === 15) alert("⏳ 15 seconds left!");
    if (timeLeft <= 0) {
      clearInterval(quizTimer);
      submitQuiz();
    }
  }, 1000);
}

function submitNow() {
  clearInterval(quizTimer);
  submitQuiz();
}

function submitQuiz() {
  const quizData = JSON.parse(localStorage.getItem("quizQuestions")) || [];
  let score = 0;

  quizData.forEach((q, i) => {
    if (globalAnswers[i] === q.correct) score++;
  });

  setTimeout(() => showResult(score, quizData.length), 2000);
}

function showResult(score, total) {
  document.getElementById("result").textContent = `✅ You scored ${score} out of ${total}`;
  document.getElementById("quizArea").innerHTML = "";
}
