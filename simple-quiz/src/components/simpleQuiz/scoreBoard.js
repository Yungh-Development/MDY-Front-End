import React from "react";
import { SimpleQuiz } from "./quiz";
import { questions } from "./constants";

export const ScoreBoard = (props) => {
  return (
    <div className="relative">
      <div className="w-96 h-full">
        <div className="p-2 font-extrabold flex items-center justify-center">
          You scored {props.score} out of {props.questionsScored}
        </div>
        <ul className="flex-col flex items-center justify-center">
          {props.xuxu.map((resultButton, index) => (
            <li className="p-3">
              <p className="font-bold">{questions[index].questionText}</p>
              {resultButton.label ? (
                <div className="flex-row flex ml-1">
                  Your Answer : {resultButton.value}{" "}
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
                  Your Answer : {resultButton.value}{" "}
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
    </div>
  );
};
