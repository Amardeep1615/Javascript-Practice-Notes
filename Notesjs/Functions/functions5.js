// Quiz Yourself App

function addFlashcard(question, answer, quizCards) {
    quizCards.push({ question, answer });
  }
  
  
  function startQuiz(quizCards) {
    let score = 0;
    quizCards.forEach(card => {
      let userAnswer = prompt(card.question);
      if (checkAnswer(userAnswer, card.answer)) {
        score++;
      }
    });
    console.log("Quiz completed! Your score: " + score);
  }
  
  
  function checkAnswer(userAnswer, correctAnswer) {
    return userAnswer.toLowerCase() === correctAnswer.toLowerCase();
  }
  
  
  function calculateScore(total, correct) {
    return (correct / total) * 100;
  }
  
  
  let quizCards = [];
  addFlashcard('What is the capital of France?', 'Paris', quizCards);
  addFlashcard('What is 5 + 3?', '8', quizCards);
  startQuiz(quizCards);
  