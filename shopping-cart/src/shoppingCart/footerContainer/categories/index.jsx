import React from "react";
import { FooterCategoryItems } from "../../constants";

export const FooterCategories = () => (
  <div className="w-10 ml-10 ">
    <ul>
      <span>CATEGORIES</span>
      <div className="">
        {FooterCategoryItems.map((item) => (
          <li key={item.value} className="ml-2">
            {item.label}
          </li>
        ))}
      </div>
    </ul>
  </div>
);
