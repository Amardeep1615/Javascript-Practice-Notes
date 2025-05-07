const quizForm = document.getElementById("quizForm");
    const scoreDisplay = document.getElementById("score");

    const correctAnswers = {
      q1: "Paris",
      q2: "4",
      q3: "Joe Biden"
    };

    quizForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission
      let score = 0;

      // Loop through each question and check answers
      Object.keys(correctAnswers).forEach((question) => {
        const userAnswer = document.querySelector(`input[name="${question}"]:checked`);
        if (userAnswer && userAnswer.value === correctAnswers[question]) {
          score++;
        }
      });

      scoreDisplay.textContent = score; // Update score display
    });