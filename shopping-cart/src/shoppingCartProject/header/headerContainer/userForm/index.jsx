/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect, useContext } from "react";

import { Icons } from "../../../constants";
import { UserCartContainer } from "../userCartContainer";
import { UserLoginDataContext } from "../../../userLoginDataContext";
import { CartItemsContext } from "../../../cartItemsContext";

const loginKey = "ls_user";

export const UserLoginRegister = () => {
  // const [user, setUser] = useState(null);

  const [showForm, setShowForm] = useState(true);
  const [showCart, setShowCart] = useState(true);
  const [userLoginData, setUserLoginData] = useContext(UserLoginDataContext);
  const [cartItems] = useContext(CartItemsContext);
  const [, SetUserPassword] = useState();

  const userLoginHandler = (data) => {
    setUserLoginData(data);
  };

  const userPasswordHandler = (data) => {
    SetUserPassword(data);
  };

  const onUserLogin = () => {
    localStorage.setItem(loginKey, JSON.stringify([userLoginData]));
  };

  const onUserLogout = () => {
    localStorage.removeItem(loginKey);
    setUserLoginData(null);
  };

  useEffect(() => {
    const storagedUser = localStorage.getItem(loginKey);
    if (storagedUser && storagedUser.length > 0) {
      setUserLoginData(JSON.parse(storagedUser));
    }
  }, []);

  return (
    <div>
      {userLoginData ? (
        <div className="flex">
          <div
            className={`${
              showForm
                ? "flex block items-center justify-center h-[38px] text-white mr-4 border-1 shadow-[0_1px_4px_1px_rgba(256,256,256,0.4)] rounded-sm p-1 w-42 md:top-[-4px]"
                : "hidden"
            }`}
          >
            <label htmlFor="userData" />
            <input
              type="button"
              id="userData"
              className="cursor-pointer"
              value={userLoginData}
              onClick={() => setShowCart(!showCart)}
            />
            <div className="flex">
              <Icons.CartIcon className="ml-1 mr-1 mt-[2px]"> </Icons.CartIcon>
              {cartItems.length === 0 ? (
                <div />
              ) : (
                <span className="text-sm">{cartItems.length}</span>
              )}
            </div>
          </div>

          <div
            className={`${
              showForm
                ? " flex block items-center justify-center h-[38px] text-white mr-4 border-1 shadow-[0_1px_4px_1px_rgba(256,256,256,0.4)] rounded-sm p-1 w-42 md:top-[-4px]"
                : "hidden"
            }`}
          >
            <div>
              <label htmlFor="userLogout" />
              <input
                type="button"
                id="userLogout"
                className="cursor-pointer"
                value="Logout"
                onClick={() => onUserLogout()}
              />
            </div>
          </div>
          <div className="relative">
            {showCart ? (
              <div className="absolute z-50 right-0 top-[-15px] transition-all ease-in-out duration-800 bg-[#fff] ">
                <UserCartContainer />
                <div
                  className={`${
                    showCart ? "block" : "hidden"
                  } z-20 absolute top-2 right-2`}
                >
                  <Icons.CloseListIcon
                    width="20px"
                    height="20px"
                    fill="black"
                    onClick={() => setShowCart(!showCart)}
                  />
                </div>
              </div>
            ) : (
              <div className="hidden" />
            )}
          </div>
        </div>
      ) : (
        <div
          className={`${
            showForm ? " flex block items-center justify-center" : "hidden"
          }`}
        >
          <label htmlFor="userLogin" />
          <input
            type="button"
            id="userLogin"
            className="cursor-pointer text-white mr-4 border-1 shadow-[0_1px_4px_1px_rgba(256,256,256,0.4)] rounded-sm p-1 w-42 "
            value="Login"
            onClick={() => setShowForm(!showForm)}
          />
        </div>
      )}

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
              type="submit"
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
