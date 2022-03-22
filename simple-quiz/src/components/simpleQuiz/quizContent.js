import React from "react";
import "./style.css";

export const QuizContent = () => {
  const labelStyle = "hover:shadow-border-light rounded-md p-2 pb-1.5";
  const buttonStyle =
    "hover:shadow-border-light hover:bg-gray-600 rounded-md p-2 pb-1.5 mt-5 mb-2 bg-gray-700 float-right";

  const quizHandler = (data) => {
    data.preventDefault();
    console.log(data);
    console.log("foi");
  };

  return (
    <div>
      <div className=" centerContent flex items-center justify-center rounded shadow-3xl mb-20">
        <div className="p-5">
          <form
            className="quizOne"
            onSubmit={(event) => quizHandler(event.target.value)}
          >
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat ?
            </p>
            <div className="flex flex-col">
              <label className={labelStyle}>
                <input
                  type="radio"
                  value="A"
                  name="firstQuestion"
                  className="mr-4"
                  checked={true}
                />
                Answer A
              </label>
              <label className={labelStyle}>
                <input
                  type="radio"
                  value="B"
                  name="firstQuestion"
                  className="mr-4 "
                  checked={true}
                />
                Answer B
              </label>
              <label className={labelStyle}>
                <input
                  type="radio"
                  value="C"
                  name="firstQuestion"
                  className="mr-4"
                  checked={true}
                />
                Answer C
              </label>
              <label className={labelStyle}>
                <input
                  type="radio"
                  value="D"
                  name="firstQuestion"
                  className="mr-4"
                  checked={true}
                />
                Answer D
              </label>
            </div>
            <button>
              type="submit"
              value="Next Question"
              className={buttonStyle}
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
};
