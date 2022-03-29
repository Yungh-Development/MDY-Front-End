import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const [userFirstName, SetUserFirstName] = useState();
  const [userLastName, SetUserLastName] = useState();
  const [userLogin, SetUserLogin] = useState([]);

  const [teste, SetTeste] = useState();

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
    SetTeste([userFirstName, userLastName]);

    console.log(teste);
  };

  return (
    <div className="homePage flex-col w-96 h-80 text-white bg-[#0f172a] flex items-center justify-center flex-col shadow-border-light rounded-md p-2">
      <form
        className="flex flex-col text-lg w-80 flex items-center justify-center"
        onClick={(data) => userLoginHandle(data)}
      >
        <h1 className="text-3xl font-extrabold mb-5 mt-4 flex items-center justify-center">
          Quiztionário!
        </h1>

        <label className="font-bold" for="fname">
          First name:
        </label>
        <input
          className="text-black font-extrabold p-1 rounded-md"
          type="text"
          id="fname"
          name="fname"
          onChange={(data) => getFirstName(data)}
        />
        <label className="font-bold" for="lname">
          Last name:
        </label>
        <input
          className="text-black font-extrabold p-1 rounded-md"
          type="text"
          id="lname"
          name="lname"
          onChange={(data) => getLastName(data)}
        />
        <div className="text-xl w-50 flex items-center justify-center font-extrabold bg-gray-800 p-2  m-4 rounded-md hover:shadow-border-light ">
          <Link to="/quiz">Go To Quiz!</Link>
        </div>
      </form>
    </div>
  );
};
