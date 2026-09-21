const startQuizButton = document.querySelector('#start-quiz');
const finishQuizButton = document.querySelector('#finish-quiz');

const question1 = document.querySelector('#question-1');
const question2 = document.querySelector('#question-2');
const question3 = document.querySelector('#question-3');

const scoreBoard = document.querySelector('#score-board');
const score = document.querySelector('#score');
let totalScore = 0;

startQuizButton.addEventListener('click', () => {
  console.log('Quiz iniciado');
  startQuizButton.classList.add('quiz__btn--hidden');
  question1.classList.remove('quiz__question--hidden');
});

question1.addEventListener('submit', (event) => {
  event.preventDefault();

  const selectedAnswer = event.submitter;
  const answer = selectedAnswer.textContent.trim();
  const isCorrect = answer === 'Brasília';

  selectedAnswer.classList.add(
    isCorrect ? 'quiz__button--correct' : 'quiz__button--incorrect',
  );

  question1.querySelectorAll('.quiz__button--answer').forEach((button) => {
    button.disabled = true;
  });

  if (isCorrect == true) {
    totalScore++;
    console.log(totalScore);
  }

  question2.classList.remove('quiz__question--hidden');
});

question2.addEventListener('submit', (event) => {
  event.preventDefault();
  const selectedAnswer = event.submitter;
  const answer = selectedAnswer.textContent.trim();
  const isCorrect = answer === 'São Paulo';

  selectedAnswer.classList.add(
    isCorrect ? 'quiz__button--correct' : 'quiz__button--incorrect',
  );

  question1.querySelectorAll('.quiz__button--answer').forEach((button) => {
    button.disabled = true;
  });

  if (isCorrect == true) {
    totalScore++;
    console.log(totalScore);
  }

  question3.classList.remove('quiz__question--hidden');
});

question3.addEventListener('submit', (event) => {
  event.preventDefault();
  const selectedAnswer = event.submitter;
  const answer = selectedAnswer.textContent.trim();
  const isCorrect = answer === 'Amazonas';

  selectedAnswer.classList.add(
    isCorrect ? 'quiz__button--correct' : 'quiz__button--incorrect',
  );

  question1.querySelectorAll('.quiz__button--answer').forEach((button) => {
    button.disabled = true;
  });

  if (isCorrect == true) {
    totalScore++;
    console.log(totalScore);
  }

  finishQuizButton.classList.remove('quiz__btn--hidden');
  scoreBoard.classList.remove('quiz__score-card--hidden');
});

finishQuizButton.addEventListener('click', () => {
  console.log('Quiz finalizado');
});
