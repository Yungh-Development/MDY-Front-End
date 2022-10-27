import React from "react";
import { FooterCategories } from "./categories";
import { SocialMedia } from "./socialMedia";
import { ExchangeCoin } from "./exchangeCoin";
import { HomeButton } from "../header/navBar/homeButton";
import { ContactCard } from "./contact";
import { MailTo } from "./mailto";

export const FooterContainer = () => (
  <div className="flex flex-wrap bg-[#24252B] font-black text-white justify-around items-center text-sm mt-20 pb-10 pt-5">
    <div className="flex basis-1/2 lg:basis-1/3 xl:basis-1/4 mb-10">
      <HomeButton />
      <FooterCategories />
    </div>
    <div className="flex basis-1/2 lg:basis-1/3 xl:basis-1/4 mb-10">
      <ExchangeCoin />
      <MailTo />
    </div>
    <div className="flex md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
      <ContactCard />
      <SocialMedia />
    </div>
  </div>
);
