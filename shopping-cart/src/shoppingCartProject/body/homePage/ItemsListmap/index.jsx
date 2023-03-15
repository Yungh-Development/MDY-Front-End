import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Icons } from "../../../Constants";

import { ExchangeCoinContext } from "../../../ExchangeCoinContext";
// import { ItemsStoreContext } from "../../../ItemsStoreContext";
import { CartContextProvider } from "../../../CartItemsContext";
import { CollectionMock } from "../../../CollectionMock";
import getUniqueKeyFromItem from "../../../getUniqueKeyFromItem";
import arrayToOptions from "../../../arrayToOptions";

const itemPropType = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  discountPercentage: PropTypes.number,
  quantity: PropTypes.number,
  category: PropTypes.string,
  thumbnail: PropTypes.string,
  image: PropTypes.arrayOf(PropTypes.string),
  sizes: PropTypes.arrayOf(PropTypes.string),
  colors: PropTypes.arrayOf(PropTypes.string),
});

function Options({ name, options, value, onChange }) {
  return (
    <select
      name={name}
      id={name}
      value={value}
      onChange={(event) => {
        onChange(event.target.value);
      }}
    >
      <option value="">Select {name}</option>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
Options.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(itemPropType).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

function ItemsListMapping({ item }) {
  const currentCoin = useContext(ExchangeCoinContext);
  const { items, setItems } = CartContextProvider();
  const [optionals, setOptionals] = useState({});

  const handleOptionalChange = (key, value) => {
    setOptionals({ ...optionals, [key]: value });
  };

  const handleClickBuy = () => {
    if (!optionals.color) {
      // eslint-disable-next-line no-alert
      alert("You must pick a color!");
      return;
    }

    if (!optionals.size) {
      // eslint-disable-next-line no-alert
      alert("You must pick a size!");
      return;
    }

    const itemToStore = {
      id: item.id,
      ...optionals,
    };

    itemToStore.uniqueKey = getUniqueKeyFromItem(itemToStore);

    // Check if exists

    const existsIndex = items.findIndex(
      (storageItem) => storageItem.uniqueKey === itemToStore.uniqueKey,
    );

    if (existsIndex >= 0) {
      items[existsIndex].quantity += 1;
    } else {
      items.push({ ...itemToStore, quantity: 1 });
    }

    setItems([...items]);
  };

  return (
    <div key={item.id} className="flex  justify-evenly max-w-[350px]">
      <div className="rounded-md font-medium text-base p-4 border-2 w-[280px] shadow-[0_2px_1px_2px_rgba(0,0,0,0.2)]">
        <div className="flex relative flex-col grid justify-items-stretch justify-center">
          <img
            className="rounded-xl lg:max-w-[200px] opacity-80 hover:scale-110 duration-300 hover:opacity-100"
            src={item.image}
            alt={item.category}
          />
          <div className="flex flex-col flex ">
            <span className="text-center font-bold text-2xl pb-2">
              {item.name}
            </span>
            {currentCoin[0].value === "Dolar - $" ? (
              <span className="font-black text-xl text-sky-500">
                Price: {item.price}
              </span>
            ) : (
              <p className="font-black text-xl text-sky-500">
                Price: {(item.price * 5.1).toFixed(2)}
              </p>
            )}
            <span>Stock: {item.quantity}</span>
            <Options
              name="color"
              value={optionals.color ?? ""}
              options={arrayToOptions(item.colors)}
              onChange={(value) => {
                handleOptionalChange("color", value);
              }}
            />
            <Options
              name="size"
              value={optionals.size ?? ""}
              options={arrayToOptions(item.sizes)}
              onChange={(value) => {
                handleOptionalChange("size", value);
              }}
            />
          </div>
          <div className="relative pt-12 hover:opacity-80 hover:cursor-pointer">
            <div className="absolute bottom-0 right-2 flex border-solid border-2 border-sky-500  rounded-full p-1 float-right ">
              <Icons.CartIcon
                width="20px"
                height="20px"
                className=""
                fill="#3FBCF4"
              />
              <input
                type="button"
                value="Buy"
                className="pl-1 pr-1 text-black hover:cursor-pointer"
                onClick={handleClickBuy}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ItemsListMapping.propTypes = {
  item: itemPropType.isRequired,
};

const ProductList = () =>
  CollectionMock.map((product) => (
    <ItemsListMapping item={product} key={product.id} />
  ));

export default ProductList;
