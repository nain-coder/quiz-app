import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";

export default function Summary({ userAnswers }) {
  const correctAnswersCount = userAnswers.reduce((count, answer, index) => {
    if (answer === QUESTIONS[index].answers[0]) {
      return count + 1;
    }
    return count;
  }, 0);

  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Trophy icon" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">
            {correctAnswersCount} / {QUESTIONS.length}
          </span>
          <span className="text">Your Score</span>
        </p>
      </div>
    </div>
  );
}
