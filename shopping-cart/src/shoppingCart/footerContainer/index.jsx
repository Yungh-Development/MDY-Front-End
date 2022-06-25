import React from "react";
import { FooterCategories } from "./categories";
import { SocialMedia } from "./socialMedia";
import { ExchangeCoin } from "./exchangeCoin";
import { HomeButton } from "../homePage/navBar/homeButton";
import { ContactCard } from "./contact";
import { MailTo } from "./mailto";

export const FooterContainer = () => (
  <div className="w-full h-full flex flex-wrap bg-[#24252B] font-black text-white justify-around items-center text-sm md:flex-row">
    <div className="flex mb-10">
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
