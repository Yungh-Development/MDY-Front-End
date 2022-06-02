import React, { useState, useEffect } from "react";
import { ScoreBoard } from "./scoreBoard";
import { quisListKey } from "./constants";
import { Link } from "react-router-dom";

const loginKey = "ls_user";

export const Home = () => {
  const [userFirstName, SetUserFirstName] = useState();
  const [userLastName, SetUserLastName] = useState();
  const [user, setUser] = useState(null);
  const [quizList, setQuizList] = useState([]);

  const setFirstName = (data) => {
    SetUserFirstName(data);

    console.log(data);
  };

  const setLastName = (data) => {
    SetUserLastName(data);

    console.log(data);
  };

  const userLoginHandle = () => {
    localStorage.setItem(
      loginKey,
      JSON.stringify([userFirstName, userLastName])
    );
  };

  console.log(loginKey);

  const cleanLoginData = () => {
    localStorage.removeItem(quisListKey);
    setUser(null);
  };

  useEffect(() => {
    const userData = localStorage.getItem(loginKey);

    if (userData && userData.length > 0) {
      setUser(JSON.parse(userData));
    }
  }, []);

  useEffect(() => {
    const quizList = localStorage.getItem(quisListKey);

    if (quizList && quizList.length > 0) {
      setQuizList(JSON.parse(quizList));
    }
  }, []);

  return (
    <div className="relative homePage flex-col w-96 h-80 text-white bg-transparent flex items-center justify-center flex-col  p-2">
      {user ? (
        <div>
          <div className="absolute text-xl p-3 top-0 right-[-170px] flex items-center justify-center font-extrabold bg-gray-800 p-2  rounded-md hover:shadow-border-light">
            <Link to="/quiz">
              <button
                onClick={() => userLoginHandle()}
                className="hover:text-white"
              >
                Go To Quiz!
              </button>
            </Link>
          </div>
          <div className="bg-transparent">
            {quizList.map((xuxu) => (
              <div key={xuxu} className="text-xl m-5 p-3 top-0 right-[-150px] flex items-center justify-center font-extrabold bg-gray-800 p-2  rounded-md hover:shadow-border-light">
                <ScoreBoard xuxu={xuxu} className="bg-transparent" />
              </div>
            ))}
          </div>
          <div className="absolute text-xl p-3 top-0 left-[-180px] flex items-center justify-center font-extrabold bg-gray-800 p-2  rounded-md hover:shadow-border-light">
            <button
              onClick={() => cleanLoginData()}
              className="hover:text-white"
            >
              Clear History
            </button>
          </div>
        </div>
      ) : (
        <div className="relative homePage flex-col w-96 h-80 text-white bg-[#0f172a] flex items-center justify-center flex-col shadow-border-light rounded-md p-2">
          <form className="flex flex-col text-lg w-80 flex items-center justify-center">
            <h1 className="text-3xl font-extrabold mb-5 mt-4 flex items-center justify-center">
              Quiztionário!
            </h1>

            <label className="font-bold" htmlFor="fname">
              First name:
            </label>
            <input
              className="text-black font-extrabold p-1 rounded-md"
              type="text"
              value={userFirstName}
              onChange={(data) => setFirstName(data.target.value)}
            />
            <label className="font-bold" htmlFor="lname">
              Last name:
            </label>
            <input
              className="text-black font-extrabold p-1 rounded-md"
              type="text"
              value={userLastName}
              onChange={(data) => setLastName(data.target.value)}
            />
            <div className="text-xl w-50 flex items-center justify-center font-extrabold bg-gray-800 p-2  m-4 rounded-md hover:shadow-border-light">
              <Link to="/quiz">
                <button
                  onClick={() => userLoginHandle()}
                  className="hover:text-white"
                >
                  Go To Quiz!
                </button>
              </Link>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
