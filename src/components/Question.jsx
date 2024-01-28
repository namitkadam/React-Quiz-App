import { useState, useEffect, useCallback } from "react";

import Answers from "./Answers.jsx";
import QUESTIONS from "./question.js";

export default function Question({ index, onSelectAnswer, onSkipAnswer }) {
  const [remainingTime, setRemainingTime] = useState(30);
  const [intervalID, setIntervalID] = useState(null);
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 1);
    }, 1000);
    setIntervalID(interval);

    return () => {
      clearTimeout(interval);
    };
  }, []);

  if (answer.selectedAnswer) {
    clearInterval(intervalID);
  }

  function hadleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[index].answers[0] === answer,
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }

  useEffect(() => {
    if (remainingTime < 0) {
      onSkipAnswer();
    }
  }, [remainingTime]);

  let answerState = "";

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <div id="question">
      <>
        <div id="remainingTime">{remainingTime}</div>
      </>
      <h2>{QUESTIONS[index].text}</h2>
      <Answers
        answers={QUESTIONS[index].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={hadleSelectAnswer}
      />
    </div>
  );
}
