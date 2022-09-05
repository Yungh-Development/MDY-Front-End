/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { Icons } from "../../../../constants";

// const loginKey = "ls_user";

export const UserLoginRegister = () => {
  // const [user, setUser] = useState(null);
  // const [userLogin, setUserLogin] = useState();
  const [showForm, setShowForm] = useState(true);
  const [userLogin, SetUserLogin] = useState();
  const [userPassword, SetUserPassword] = useState();

  const userLoginHandler = (data) => {
    console.log(data);
  };

  // const clearLoginData = () => {};

  return (
    <div>
      <div className={`${showForm ? "block" : "hidden"} relative `}>
        <label htmlFor="userLogin" />
        <input
          type="button"
          id="userLogin"
          value="BOTÃO"
          onClick={() => setShowForm(!showForm)}
        />
      </div>

      {/* 
      <div>
        <div className="absolute text-xl p-3 top-0 right-[-170px] flex items-center justify-center font-extrabold bg-gray-800 p-2  rounded-md hover:shadow-border-light">
          <input
            type="button"
            value="Sign In"
            onClick={(event) => userLoginHandler(event.target.value)}
          />
        </div>

        <div className="absolute text-xl p-3 top-0 left-[-180px] flex items-center justify-center font-extrabold bg-gray-800 p-2  rounded-md hover:shadow-border-light">
          <input
            type="button"
            onClick={() => clearLoginData()}
            className="hover:text-white"
            value="Clear History"
          />
        </div>
      </div>
      */}

      <div
        className={`${
          showForm ? "hidden" : "block"
        } relative homePage flex-col w-[300px] h-auto border-1 shadow-[0_1px_4px_1px_rgba(256,256,256,0.4)] text-white bg-[#24252B] flex items-center justify-center flex-col shadow-border-light rounded-md p-2`}
      >
        <div
          className={`${
            showForm ? "hidden" : "block"
          } z-20 absolute top-2 right-2`}
        >
          <Icons.CloseListIcon
            width="20px"
            height="20px"
            fill="white"
            onClick={() => setShowForm(!showForm)}
          />
        </div>
        <form className="flex flex-col text-lg flex items-center justify-center">
          <h1>Wellcome Back!</h1>
          <label className="font-bold pt-4" htmlFor="userName">
            Username:
          </label>
          <input
            className="text-black font-extrabold p-1 rounded-md"
            type="text"
            value={userLogin}
            onChange={(data) => SetUserLogin(data.target.value)}
          />

          <label className="font-bold pt-4" htmlFor={userPassword}>
            Password:
          </label>
          <input
            className="text-black font-extrabold p-1 rounded-md"
            type="text"
            id={userPassword}
            value={userPassword}
            onChange={(data) => SetUserPassword(data.target.value)}
          />
          <div className="text-xl w-50 flex items-center justify-center font-extrabold bg-gray-800 p-2  m-4 rounded-md hover:shadow-border-light">
            <input
              type="button"
              value="CLIKA NEU"
              onClick={() => userLoginHandler()}
              className="hover:text-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
