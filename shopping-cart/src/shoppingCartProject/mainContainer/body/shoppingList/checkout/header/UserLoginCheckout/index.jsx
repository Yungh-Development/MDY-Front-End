/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect, useContext } from "react";

import { Icons } from "../../../../../../constants";
import { CartItemsContext } from "../../../../../../cartItemsContext";

const loginKey = "ls_user";

export const UserLoginRegister = () => {
  // const [user, setUser] = useState(null);

  const [showForm, setShowForm] = useState(true);
  const [showCart, setShowCart] = useState(true);
  const [userLoginData, setUserLoginData] = useState();
  const [cartItems] = useContext(CartItemsContext);

  const userGetter = localStorage.getItem(loginKey);

  const onUserLogout = () => {
    localStorage.removeItem(loginKey);
    setUserLoginData(null);
  };

  console.log(cartItems);
  console.log(userLoginData);

  useEffect(() => {
    const storagedUser = localStorage.getItem(loginKey);
    if (storagedUser && storagedUser.length > 0) {
      setUserLoginData(storagedUser);
      console.log(storagedUser);
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
              value={userGetter}
              onClick={() => setShowCart(!showCart)}
            />
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
    </div>
  );
};
