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
      <div
        className={`${
          showForm ? " flex block items-center justify-center" : "hidden"
        }`}
      >
        <label htmlFor="userLogin" />
        <input
          type="button"
          id="userLogin"
          className="absolute right-0 mt-7 text-white mr-4 border-1 shadow-[0_1px_4px_1px_rgba(256,256,256,0.4)] rounded-md p-1 w-42 md:mt-14"
          value="Login"
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
        } absolute  flex-col w-[300px] h-auto left-0 top-10 border-1 shadow-[0_1px_4px_1px_rgba(256,256,256,0.4)] text-white bg-[#24252B] flex items-center justify-center flex-col shadow-border-light md:top-0 md:right-20 `}
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
        <form className="flex flex-col text-lg  flex items-center justify-center">
          <h1 className="mt-2 ">Wellcome Back!</h1>
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
          <div className="text-xl w-50 flex items-center justify-center border-1 shadow-[0_1px_4px_1px_rgba(256,256,256,0.4)] font-extrabold bg-gray-800 p-2  m-4 rounded-base hover:shadow-border-light">
            <input
              type="button"
              value="Loggin"
              onClick={() => userLoginHandler()}
              className="hover:text-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
