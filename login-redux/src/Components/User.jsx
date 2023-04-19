import React from "react";
import { useSelector } from "react-redux";

export const User = () => {
  const { name } = useSelector((state) => state.user);

  return (
    <div>
      <h1>User: {name}</h1>
    </div>
  );
};
