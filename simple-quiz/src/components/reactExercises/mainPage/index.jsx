import React from "react";

export const ExercisesMenu = () => {
  return (
    <>
      <nav className="bg-gradient-to-r from-[#4400ff] to-[#7affe7] h-20 ">
        <ul className="flex font-black justify-center">
          <li className="rounded-md bg-[#5ed6c0] h-8 m-4 p-1 items-center justify-center">
            <a className="p-2" href="/hello">
              Exercise 01
            </a>
          </li>
          <li className="rounded-md bg-[#5ed6c0] h-8 m-4 p-1 items-center justify-center">
            <a className="p-2" href="./renderingFromObjects">
              Exercise 02
            </a>
          </li>
          <li className="rounded-md bg-[#5ed6c0] h-8 m-4 p-1 items-center justify-center">
            <a className="p-2" href="./buildingLayout">
              Exercise 03
            </a>
          </li>
          <li className="rounded-md bg-[#5ed6c0] h-8 m-4 p-1 items-center justify-center">
            <a className="p-2" href="./buildingHtmlFromArray">
              Exercise 04
            </a>
          </li>
          <li className="rounded-md bg-[#5ed6c0] h-8 m-4 p-1 items-center justify-center">
            <a className="p-2" href="./mapingArrayObject">
              Exercise 05
            </a>
          </li>
          <li className="rounded-md bg-[#5ed6c0] h-8 m-4 p-1 items-center justify-center">
            <a className="p-2" href="./realComponent">
              Exercise 06
            </a>
          </li>{" "}
          <li className="rounded-md bg-[#5ed6c0] h-8 m-4 p-1 items-center justify-center">
            <a className="p-2" href="./componentProperties">
              Exercise 07
            </a>
          </li>
          <li className="rounded-md bg-[#5ed6c0] h-8 m-4 p-1 items-center justify-center">
            <a className="p-2" href="./jumbotron">
              Exercise 08
            </a>
          </li>
          <li className="rounded-md bg-[#5ed6c0] h-8 m-4 p-1 items-center justify-center">
            <a className="p-2" href="./secondStyles">
              Exercise 10
            </a>
          </li>
          <li className="rounded-md bg-[#5ed6c0] h-8 m-4 p-1 items-center justify-center">
            <a className="p-2" href="./ListeningEvents">
              Exercise 11
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
