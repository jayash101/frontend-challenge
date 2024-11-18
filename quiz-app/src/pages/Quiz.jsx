import React from "react";
import { Container } from "./index";
import { RadioButton, Button, Form } from "../components";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateCurrentQuestionIndex } from "../store/currentQuestionSlice";
import parse from "html-react-parser";
import { updateUserAnswers } from "../store/userAnswersSlice";
import { useState } from "react";
import { updateScore } from "../store/scoreSlice";

const Quiz = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const { isLoading, error } = useSelector((state) => state.app);

  const { currentQuestionIndex } = useSelector(
    (state) => state.currentQuestion
  );

  const { questions } = useSelector((state) => state.questions);


  const currentQuestion = questions[currentQuestionIndex];

  const correctAnswer = currentQuestion.correct_answer;
  const incorrectAnswers = currentQuestion.incorrect_answers;

  let answers = [];
  answers = answers.concat(correctAnswer, incorrectAnswers);

  // Randomize answers
  answers = answers.sort((a, b) => Math.random() - 0.5);

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const handleAnswer = () => {
    dispatch(
      updateUserAnswers({ questionIndex: currentQuestionIndex, answer: selectedAnswer })
    );

    if(selectedAnswer === correctAnswer) {
      dispatch(updateScore(1));
    }

    if (currentQuestionIndex === questions.length - 1) {
      navigate("/result");
      setSelectedAnswer("");
    }

    dispatch(updateCurrentQuestionIndex(currentQuestionIndex + 1));
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleAnswer)} className={`w-1/3 space-y-4`}>
        <h1 className="text-3xl font-bold text-blue-900 [text-shadow:0_0_0.2rem]">
          QUIZ NO. {currentQuestionIndex + 1}
        </h1>

        <div
          className={`text-center bg-[#F0EEB3] text-lg py-2 px-4 w-full text-black/80`}
        >
          {currentQuestion.question && <p>{parse(currentQuestion.question)}</p>}
        </div>

        <ul className="bg-[#F0EEB3] text-black/80 py-2 w-full flex flex-col items-center">
          {/* Radiobutton with checked option */}
          {answers.map((answer, index) => (
            <li key={index} className="w-1/2 capitalize">
              <RadioButton
                label={answer}
                value={answer}
                {...register("radio", {
                  required: true,
                })}
                name="answer"
                id={`answer${index}`}
                className="mr-3"
                checked={selectedAnswer === answer}
                onChange={handleAnswerChange}
              />
            </li>
          ))}
        </ul>

        <Button type={"submit"} value={"Next"} />
      </Form>
    </Container>
  );
};

export default Quiz;
