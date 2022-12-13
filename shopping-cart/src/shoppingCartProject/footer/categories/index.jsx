import React, { useContext } from "react";
import { FilteredContextList, CategoryItems } from "../../filterContext";

export const FooterCategories = () => {
  const [categoryList, setCategoryList] = useContext(FilteredContextList);

  const onCategorySelectHandler = (data) => {
    setCategoryList({ ...categoryList, category: data });
  };
  return (
    <div className="w-full">
      <ul>
        <select
          className="bg-[#ffffff] text-black text-lg font-black h-8 mt-2 md:block md:mt-7"
          defaultValue={categoryList.value}
          onChange={(event) => onCategorySelectHandler(event.target.value)}
        >
          {CategoryItems.map((option) => (
            <option
              key={option.value}
              value={option.value}
              label={option.label}
              className="font-black "
            />
          ))}
        </select>
      </ul>
    </div>
  );
};
