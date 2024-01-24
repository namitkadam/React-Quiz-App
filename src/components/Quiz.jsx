import { useState, useCallback } from "react";

import QUESTIONS from "./question.js";
import Question from "./Question.jsx";
import Summary from "./Summarys.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const hadleSelectAnswer = useCallback(function hadleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevUsersAnswers) => {
      return [...prevUsersAnswers, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => hadleSelectAnswer(null),
    [hadleSelectAnswer]
  );
  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={hadleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
