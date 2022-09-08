/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from "react";
import { Icons } from "../../../../constants";

const loginKey = "ls_user";

export const UserLoginRegister = () => {
  // const [user, setUser] = useState(null);
  // const [userLogin, setUserLogin] = useState();
  const [showForm, setShowForm] = useState(true);
  const [userLogin, setUserLogin] = useState();
  const [userPassword, SetUserPassword] = useState();
  const [userData, setUserData] = useState(null);

  const userLoginHandler = (data) => {
    setUserLogin(data);
  };

  const userPasswordHandler = (data) => {
    SetUserPassword(data);
  };

  const onUserLogin = () => {
    localStorage.setItem(loginKey, JSON.stringify([userLogin, userPassword]));
  };

  console.log(userLogin);
  console.log(userPassword);
  console.log(userData);
  // const clearLoginData = () => {};

  useEffect(() => {
    const storagedUser = localStorage.getItem(loginKey);
    if (userData && userData.length > 0) {
      setUserData(JSON.parse(storagedUser));
    }
    console.log(storagedUser);
  }, []);

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
          className="absolute right-0 mt-7 text-white mr-4 border-1 shadow-[0_1px_4px_1px_rgba(256,256,256,0.4)] rounded-sm p-1 w-42 md:top-[-4px] md:mr-8"
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
        } absolute flex-col w-[300px] h-auto right-[-40px] top-0 z-50 border-1 shadow-[0_1px_4px_1px_rgba(256,256,256,0.4)] text-white bg-[#24252B] flex 
        items-center justify-center flex-col shadow-border-light md:top-0 md:right-0`}
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
            className="text-black font-extrabold p-1 rounded-sm"
            type="text"
            id="userName"
            onChange={(data) => userLoginHandler(data.target.value)}
          />

          <label className="font-bold pt-4" htmlFor="userPassword">
            Password:
          </label>
          <input
            className="text-black font-extrabold p-1 rounded-sm"
            type="password"
            id="userPassword"
            onChange={(data) => userPasswordHandler(data.target.value)}
          />
          <div className="text-xl w-50 flex items-center justify-center border-1 shadow-[0_1px_4px_1px_rgba(256,256,256,0.4)] font-extrabold bg-gray-800 p-1 m-4 rounded-sm  hover:shadow-border-light">
            <input
              type="button"
              value="Loggin"
              onClick={() => onUserLogin()}
              className="hover:text-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
