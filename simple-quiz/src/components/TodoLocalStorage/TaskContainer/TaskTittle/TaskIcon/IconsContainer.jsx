import React from "react";
import { IconShort } from "./TaskIconSort";

export const IconsContainer = ({ items }) => {
  return (
    <div>
      <ul className="">
        {items.map((item) => (
          <li key={item}>
            <IconShort props={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
