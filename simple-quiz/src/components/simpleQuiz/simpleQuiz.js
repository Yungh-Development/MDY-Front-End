import React, { useState, useEffect } from "react";

import "./style.css";

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
    questionText: "how much is 5 x 99?",
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

export const SimpleQuiz = () => {
  const [storedAnswer, setStoredAnswer] = useState([]);
  const [mainQuestion, setMainQuestion] = useState(0);
  const [mainScore, setMainScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (data) => {
    if (data.label === true) {
      setScore(score + 1);
    }

    setStoredAnswer([...storedAnswer, data]);
    console.log(storedAnswer);

    // apontar as questões e quais foram corretas

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
            <div className="w-96 h-full">
              <div className="p-4 font-extrabold flex items-center justify-center">
                You scored {score} out of {questions.length}
              </div>
              <ul className="flex-col flex items-center justify-center">
                {storedAnswer.map((ResultButton, index) => (
                  <li className="p-4">
                    <p className="font-bold">{questions[index].questionText}</p>

                    {ResultButton.label ? (
                      <div className="flex-row flex ml-1">
                        Your Answer : {ResultButton.value}{" "}
                        <svg
                          className="mt-0.5 ml-2 font-semibold"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="green"
                          class="bi bi-check-lg"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                        </svg>
                      </div>
                    ) : (
                      <div className="flex-row flex ml-1">
                        Your Answer : {ResultButton.value}{" "}
                        <svg
                          className="mt-1.5 ml-2 font-semibold"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="red"
                          class="bi bi-x-lg"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
                          />
                          <path
                            fill-rule="evenodd"
                            d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
                          />
                        </svg>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <>
              <div>
                <div className="mt-5">
                  <span className="text-4xl">
                    Question {mainQuestion + 1} <i class="bi bi-check-lg"></i>
                  </span>
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
                      onClick={() => handleAnswerButtonClick(questionOptions)}
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
