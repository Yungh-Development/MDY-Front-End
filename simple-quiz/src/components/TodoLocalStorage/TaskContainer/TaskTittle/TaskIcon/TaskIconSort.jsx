import React from "react";
import { Icons } from "../../../constants";

export const IconShort = ({ props }) => {
  const getIcon = Icons[props];

  return <img alt="short icon" className="w-[22px] ml-2 mr-4" src={getIcon} />;
};
