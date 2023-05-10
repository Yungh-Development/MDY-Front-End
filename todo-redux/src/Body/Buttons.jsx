import React from "react";
import Link from "../Components/Link";

const Footer = () => {
  return (
    <div className="flex justify-around">
      <Link filter={"ShowAllTask"}>All</Link>
      <Link filter={"ShowActiveTask"}>Active</Link>
      <Link filter={"ShowCompleteTask"}>Complete</Link>
    </div>
  );
};

export default Footer;
