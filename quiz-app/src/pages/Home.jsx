import React, { forwardRef, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {} from "../store/store";
import { updateCategory, updateDifficulty } from "../store/questionSlice";
import { Button, Select, Form } from "../components";
import { updateError } from "../store/appSlice";
import { fetchQuestions } from "../store/questionSlice";
import { Container } from "./index";

const Home = () => {
  const [difficulty, setDifficulty] = useState("");
  const [category, setCategory] = useState(0);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = (e) => {
    dispatch(updateCategory(category));
    dispatch(updateDifficulty(difficulty));

    dispatch(fetchQuestions({ category, difficulty }));

    navigate("/quiz");
  };

  return (
    <Container>
      <h1 className="mb-16 text-7xl text-center text-[#1ea5fe]">
        Ultimate Quiz App
      </h1>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Select
          label={"Category"}
          options={[
            { value: 9, choice: "General Knowledge" },
            { value: 10, choice: "Entertainment: Books" },
            { value: 11, choice: "Entertainment: Films" },
            { value: 12, choice: "Entertainment: Music" },
            { value: 13, choice: "Entertainment: Musicals & Theatres" },
            { value: 14, choice: "Entertainment: Television" },
            { value: 15, choice: "Entertainment: Video Games" },
            { value: 16, choice: "Entertainment: Board Games" },
            { value: 17, choice: "Science & Nature" },
            { value: 18, choice: "Science: Computers" },
            { value: 19, choice: "Science: Mathematics" },
            { value: 20, choice: "Mythology" },
            { value: 21, choice: "Sports" },
            { value: 22, choice: "Geography" },
            { value: 23, choice: "History" },
            { value: 24, choice: "Politics" },
            { value: 25, choice: "Art" },
            { value: 26, choice: "Celebrities" },
            { value: 27, choice: "Animals" },
            { value: 28, choice: "Vehicles" },
            { value: 29, choice: "Entertainment: Comics" },
            { value: 30, choice: "Science: Gadgets" },
            { value: 31, choice: "Entertainment: Japanese Anime and Manga" },
            { value: 32, choice: "Entertainment: Cartoon & Animations" },
          ]}
          {...register("category", {
            required: true,
          })}
          onChange={(e) => setCategory(Number(e.target.value))}
          value={category}
        />

        <Select
          label={"Difficulty"}
          options={[{ value: "easy" }, { value: "medium" }, { value: "hard" }]}
          {...register("difficulty", {
            required: true,
          })}
          onChange={(e) => setDifficulty(e.target.value)}
          value={difficulty}
        />

        <Button
          type={"submit"}
          value={"Submit"}
          className="bg-green-600 text-white py-2 px-4 rounded-sm"
        />
      </Form>
    </Container>
  );
};

export default Home;
