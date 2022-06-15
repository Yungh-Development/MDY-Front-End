import React from "react";
import { buttonStyle } from "../../../constants";
import { containerStyle } from "../../../constants";
import { HomePageMenu } from "../../homePageMenu";

export const ButtonContainer = (buttonProps) => {
  return (
    <div className="">
      <div>
        <HomePageMenu />
      </div>
      <div className="flex mt-[15%] items-center justify-center">
        <button style={buttonStyle} type="button" className="btn btn-primary">
          {buttonProps.label}
          <span style={containerStyle} className="badge badge-light">
            {buttonProps.number}
          </span>
        </button>
      </div>
    </div>
  );
};
