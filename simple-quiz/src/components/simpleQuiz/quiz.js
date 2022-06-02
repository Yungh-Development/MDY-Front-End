import { questions } from "./constants";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { quisListKey } from "./constants";

import "./style.css";
import { ScoreBoard } from "./scoreBoard";

const buttonStyle =
  "hover:shadow-border-light hover:bg-gray-600 rounded-md p-4 m-4 bg-gray-700 float-right hover:scale-125 duration-100 ease-linear";

export const SimpleQuiz = () => {
  const [storedAnswer, setStoredAnswer] = useState([]);
  const [mainQuestion, setMainQuestion] = useState(0);
  const [mainScore, setMainScore] = useState(false);
  const [mainRender, setMainRender] = useState(true);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (data) => {
    if (data.label === true) {
      setScore(score + 1);
    }

    setStoredAnswer([...storedAnswer, data]);
    console.log(storedAnswer);

    const nextQuetions = mainQuestion + 1;

    if (nextQuetions < questions.length) {
      setMainQuestion(nextQuetions);
    } else {
      const quizList = JSON.parse(localStorage.getItem(quisListKey) ?? "[]");
      localStorage.setItem(
        quisListKey,
        JSON.stringify([...quizList, storedAnswer])
      );
      setMainScore(true);
    }
  };

  const renderNew = () => {
    setMainRender(false);
  };

  return (
    <div className="bgImg">
      <div className="absolute w-full h-full z-10 bg-white opacity-40"></div>
      <div className="absolute container flex items-center justify-center z-30 ml-44 mt-60">
        <div className="bg-[#0f172a] flex items-center justify-center flex-col shadow-border-light rounded-md p-2">
          {mainRender ? (
            <div className="w-96 h-96 flex items-center justify-center flex-col">
              <div className="text-justify">
                <h1 className="text-xl font-extrabold text-center">
                  Quiz Rules
                </h1>
                <p className="p-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div>
                <input
                  className="absolute mt-[50px] ml-[85px] p-3 bg-[#0f172a] text-lg font-extrabold  hover:shadow-border-light hover:bg-gray-800 rounded-md bg-gray-900"
                  type="button"
                  value="Let's Quiz!"
                  onClick={renderNew}
                />
              </div>
            </div>
          ) : (
            <div>
              {mainScore ? (
                <div className="relative">
                  <ScoreBoard
                    xuxu={storedAnswer}
                    score={score}
                    questionsScored={questions.length}
                  />
                  <div className="absolute top-0 m-[-8px] ml-[20px] z-40 left-full bg-[#0f172a] hover:shadow-border-light hover:bg-gray-800 p-3  rounded-md bg-gray-900">
                    <Link
                      className="font-extrabold text-lg hover:text-white"
                      to="/"
                    >
                      Home
                    </Link>
                  </div>
                </div>
              ) : (
                <>
                  <div className="text-center">
                    <div className="mt-5">
                      <span className="text-4xl">
                        Question {mainQuestion + 1}{" "}
                        <i className="bi bi-check-lg"></i>
                      </span>
                    </div>
                    <div className="text-xl mt-5">
                      {questions[mainQuestion].questionText}
                    </div>
                  </div>

                  <div className="p-10  flex-col ">
                    {questions[mainQuestion].questionOptions.map(
                      (questionOptions, index) => (
                        <button
                          key={`button-${index}`}
                          className={buttonStyle}
                          onClick={() =>
                            handleAnswerButtonClick(questionOptions)
                          }
                        >
                          {questionOptions.value}
                        </button>
                      )
                    )}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
