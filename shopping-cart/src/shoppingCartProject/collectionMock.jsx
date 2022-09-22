import React, { useState, useContext, createContext } from "react";

import { FilteredContextList } from "./filterContext";
import { searchFilterContext } from "./searchFilterContext";
import ShoesImg from "../public/imgs/ShoesImg.jpg";
import TShirtImg from "../public/imgs/T-ShirtImg.png";
import ShortsImg from "../public/imgs/ShortsImg.png";

export const CollectionMockContext = createContext([null, () => {}]);

export const CollectionMock = [
  {
    id: 1,
    name: "Normal T-Shirt",
    price: 69.99,
    inStock: true,
    quantity: 20,
    colors: ["White", "Black", "Green", "Yellow"],
    sizes: ["P", "M", "G", "GG"],
    category: "TShirts",
    subCategory: "Male",
    image: TShirtImg,
  },
  {
    id: 2,
    name: "Ultra T-Shirts",
    price: 69.99,
    inStock: true,
    quantity: 20,
    colors: ["White", "Black", "Green", "Yellow"],
    sizes: ["P", "M", "G", "GG"],
    category: "TShirts",
    subCategory: "Female",
    image: TShirtImg,
  },
  {
    id: 3,
    name: "Camisetona",
    price: 59.99,
    inStock: true,
    quantity: 20,
    colors: ["White", "Black", "Green", "Yellow"],
    sizes: ["P", "M", "G", "GG"],
    category: "TShirts",
    subCategory: "Male",
    image: TShirtImg,
  },
  {
    id: 4,
    name: "Camisetuxa",
    price: 59.99,
    inStock: true,
    quantity: 20,
    colors: ["White", "Black", "Green", "Yellow"],
    sizes: ["P", "M", "G", "GG"],
    category: "TShirts",
    subCategory: "Female",
    image: TShirtImg,
  },
  {
    id: 5,
    name: "Normal Shorts",
    price: 49.99,
    inStock: true,
    quantity: 20,
    colors: ["White", "Black", "Green", "Yellow"],
    sizes: ["P", "M", "G", "GG"],
    category: "Shorts",
    subCategory: "Male",
    image: ShortsImg,
  },
  {
    id: 6,
    name: "Ultra Shorts",
    price: 39.99,
    inStock: true,
    quantity: 20,
    colors: ["White", "Black", "Green", "Yellow"],
    sizes: ["P", "M", "G", "GG"],
    category: "Shorts",
    subCategory: "Female",
    image: ShortsImg,
  },
  {
    id: 7,
    name: "Shortin",
    price: 49.99,
    inStock: true,
    quantity: 20,
    colors: ["White", "Black", "Green", "Yellow"],
    sizes: ["P", "M", "G", "GG"],
    category: "Shorts",
    subCategory: "Male",
    image: ShortsImg,
  },
  {
    id: 8,
    name: "Carçola",
    price: 59.99,
    inStock: true,
    quantity: 20,
    colors: ["White", "Black", "Green", "Yellow"],
    sizes: ["P", "M", "G", "GG"],
    category: "Shorts",
    subCategory: "Female",
    image: ShortsImg,
  },
  {
    id: 9,
    name: "Normal Shoes",
    price: 49.99,
    inStock: true,
    quantity: 20,
    colors: ["White", "Black", "Green", "Yellow"],
    sizes: ["P", "M", "G", "GG"],
    category: "Shoes",
    subCategory: "Male",
    image: ShoesImg,
  },
  {
    id: 10,
    name: "Ultra Shoes",
    price: 39.99,
    inStock: true,
    quantity: 20,
    colors: ["White", "Black", "Green", "Yellow"],
    sizes: ["P", "M", "G", "GG"],
    category: "Shoes",
    subCategory: "Female",
    image: ShoesImg,
  },
  {
    id: 11,
    name: "Sapatin",
    price: 49.99,
    inStock: true,
    quantity: 20,
    colors: ["White", "Black", "Green", "Yellow"],
    sizes: ["P", "M", "G", "GG"],
    category: "Shoes",
    subCategory: "Male",
    image: ShoesImg,
  },
  {
    id: 12,
    name: "Chinela",
    price: 59.99,
    inStock: true,
    quantity: 20,
    colors: ["White", "Black", "Green", "Yellow"],
    sizes: ["P", "M", "G", "GG"],
    category: "Shoes",
    subCategory: "Female",
    image: ShoesImg,
  },
];

export const CollectionMockProvider = ({ children }) => {
  const [mockContext] = useState(CollectionMock);
  const [filteredList] = useContext(FilteredContextList);
  const [searchField] = useContext(searchFilterContext);

  const filteredListHandler = mockContext.filter((item) => {
    if (searchField) {
      if (
        !item.name.toLowerCase().includes(searchField.searchData.toLowerCase())
      ) {
        return false;
      }
    }

    if (!filteredList.category || filteredList.category === "categories") {
      return true;
    }
    if (item.category !== filteredList.category) {
      return false;
    }

    return true;
  });
  return (
    // const [filter] = useContext(filterContext);

    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <CollectionMockContext.Provider value={[filteredListHandler]}>
      {children}
    </CollectionMockContext.Provider>
  );
};
