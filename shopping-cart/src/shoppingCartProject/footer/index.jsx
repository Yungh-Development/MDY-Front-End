import React from "react";
import { FooterCategories } from "./categories";
import { SocialMedia } from "./socialMedia";
import { ExchangeCoin } from "./exchangeCoin";
import { HomeButton } from "../header/navBar/homeButton";
import { ContactCard } from "./contact";
import { MailTo } from "./mailto";

export const FooterContainer = () => (
  <div className="flex flex-wrap bg-[#24252B] font-black text-white justify-evenly items-center text-sm mt-20 pb-10 pt-5">
    <div className="flex mt-10 mb-10 ml-10">
      <HomeButton />
      <FooterCategories />
    </div>
    <div className="flex mb-10">
      <ExchangeCoin />
      <MailTo />
    </div>
    <div className="flex">
      <ContactCard />
      <SocialMedia />
    </div>
  </div>
);
