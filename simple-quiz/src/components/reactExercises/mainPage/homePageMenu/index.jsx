import React from "react";

export const HomePageMenu = () => {
  return (
    <nav className="bg-gradient-to-r from-[#4400ff] to-[#7affe7] h-20 ">
      <ul className="flex font-black justify-center">
        <li className="rounded-md bg-[#5ed6c0] h-8 m-4 p-1 items-center justify-center shadow-[2px_4px_2px_2px_rgba(0,0,0,1) hover:font-black">
          <a className="p-2" href="/">
            Home Page
          </a>
        </li>
      </ul>
    </nav>
  );
};
