import React, { useState, useEffect } from "react";

import "./style.css";

export const SimpleQuiz = () => {
  const labelStyle = "hover:shadow-border-light rounded-md p-2 pb-1.5 ";
  const buttonStyle =
    "hover:shadow-border-light hover:bg-gray-600 rounded-md p-4 m-4 bg-gray-700 float-right hover:scale-125 duration-100 ease-linear";

  const questions = [
    {
      questionText: "How much is 2 x 8?",
      questionOptions: [
        { value: "15", label: false },
        { value: "16", label: true },
        { value: "19", label: false },
        { value: "24", label: false },
      ],
    },
    {
      questionText: "How much is 6 x 6?",
      questionOptions: [
        { value: "30", label: false },
        { value: "32", label: false },
        { value: "72", label: false },
        { value: "36", label: true },
      ],
    },
    {
      questionText: "How much is 0 x 5?",
      questionOptions: [
        { value: "1", label: false },
        { value: "0", label: true },
        { value: "5", label: false },
        { value: "-5", label: false },
      ],
    },
    {
      questionText: "how much is 5 x 99??",
      questionOptions: [
        { value: "99", label: false },
        { value: "495", label: true },
        { value: "490", label: false },
        { value: "499", label: false },
      ],
    },
    {
      questionText: "How much is 4 + 2?",
      questionOptions: [
        { value: "9", label: false },
        { value: "12", label: false },
        { value: "6", label: true },
        { value: "10", label: false },
      ],
    },
  ];

  const [mainQuestion, setMainQuestion] = useState(0);
  const [mainScore, setMainScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (label) => {
    if (label === true) {
      setScore(score + 1);
    }

    const nextQuetions = mainQuestion + 1;

    if (nextQuetions < questions.length) {
      setMainQuestion(nextQuetions);
    } else {
      setMainScore(true);
    }
  };

  return (
    <>
      <div className="container flex items-center justify-center">
        <div className=" bg-[#0f172a] flex items-center justify-center flex-col shadow-border-light rounded-md p-2">
          {mainScore ? (
            <div className="p-5">
              You scored {score} out of {questions.length}
            </div>
          ) : (
            <>
              <div>
                <div className="mt-5">
                  <span className="text-4xl">Question {mainQuestion + 1}</span>
                </div>
                <div className="text-xl mt-5">
                  {questions[mainQuestion].questionText}
                </div>
              </div>

              <div className="p-10  flex-col ">
                {questions[mainQuestion].questionOptions.map(
                  (questionOptions) => (
                    <button
                      className={buttonStyle}
                      onClick={() =>
                        handleAnswerButtonClick(questionOptions.label)
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
      </div>
    </>
  );
};
