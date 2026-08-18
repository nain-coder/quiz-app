import { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";
import quizCompleteImg from "../assets/quiz-complete.png";
import Question from "./Question.jsx";

export default function Quiz() {
  const [userAnswer, setUserAnswer] = useState([]);

  const activeQuestionIndex = userAnswer.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer,
  ) {
    setUserAnswer((prevUserAnswer) => {
      return [...prevUserAnswer, selectedAnswer];
    });
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer],
  );

  if (quizIsComplete) {
    const correctAnswersCount = userAnswer.reduce((count, answer, index) => {
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

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSkipAnswer={handleSkipAnswer}
        onSelectAnswer={handleSelectAnswer}
      />
    </div>
  );
}
