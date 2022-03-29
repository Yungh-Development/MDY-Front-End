import React, { useState } from "react";

export const Home = () => {
  const [userFirstName, SetUserFirstName] = useState();
  const [userLastName, SetUserLastName] = useState();
  const [userLogin, SetUserLogin] = useState();

  const getFirstName = (data) => {
    const addFirstName = data.target.value;
    SetUserFirstName(addFirstName);
    console.log(data.target.value);
  };

  const getLastName = (data) => {
    const addLastName = data.target.value;
    SetUserLastName(addLastName);

    console.log(data.target.value);
  };

  const userLoginHandle = (data) => {
    data.preventDefault();
    console.log(data.target.username);
  };

  return (
    <div className="homePage flex-col w-96 h-80 text-white bg-[#0f172a] flex items-center justify-center flex-col shadow-border-light rounded-md p-2">
      <form
        className="flex flex-col text-xl font-extrabold w-80 flex items-center justify-center"
        onClick={(data) => userLoginHandle(data)}
      >
        <h1 className="mb-10 mt-10 flex items-center justify-center">
          Página Inicial
        </h1>

        <label className="" for="fname">
          First name:
        </label>
        <input
          className="text-black font-extrabold p-1 rounded-md"
          type="text"
          id="fname"
          name="fname"
          onChange={(data) => getFirstName(data)}
        />
        <label for="lname">Last name:</label>
        <input
          className="text-black font-extrabold p-1 rounded-md"
          type="text"
          id="lname"
          name="lname"
          onChange={(data) => getLastName(data)}
        />
        <button
          className="text-xl  w-50 font-extrabold bg-gray-800 p-2  m-4 rounded-md hover:shadow-border-light "
          type="submit"
        >
          Go To Quiz!
        </button>
      </form>
    </div>
  );
};
