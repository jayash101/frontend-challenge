import React from "react";
import { Container } from "./index";
import { useDispatch, useSelector } from "react-redux";
import { updateScore } from "../store/scoreSlice";

const Result = () => {
  const dispatch = useDispatch();

  const { questions } = useSelector((state) => state.questions);

  const { userAnswers } = useSelector((state) => state.userAnswers);

  const { score } = useSelector((state) => state.score);

  const result = score >= 0.5 ? " passed " : " failed ";

  const color =
    score >= 0.5
      ? "text-green-500 animate-bounce"
      : "text-red-500 animate-pulse";

  return (
    <Container>
      <section>
        <h2>Your Score</h2>
        <p>Total Questions: {questions.length}</p>
        {/* <p>Correct Answers: {correctAnswer}</p> */}
        <p>Final Score: {score}/10</p>
        <p>
          You <span className={`font-bold ${color}`}>{result}</span>{" "}
        </p>
      </section>

      <p
        className={`font-bold text-3xl font-mono [text-shadow:0_0.3vw_0.5vw] ${color}`}
      >
        {result === " failed " ? "Better luck next time" : "You're a genius"}
      </p>
    </Container>
  );
};

export default Result;
