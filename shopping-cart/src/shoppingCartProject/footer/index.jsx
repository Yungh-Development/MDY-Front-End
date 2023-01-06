import React from "react";
import { FooterCategories } from "./Categories";
import { SocialMedia } from "./SocialMedia";
import { ExchangeCoin } from "./ExchangeCoin";
import { HomeButton } from "../Header/HomeButton";
import { ContactCard } from "./Contact";
import { MailTo } from "./Mailto";

export const FooterContainer = () => (
  <footer className="bg-[#24252B] font-black text-white">
    <div className="py-7 flex text-center align-center justify-around">
      <div className=" grid grid-cols-1 px-8 grid-cols-1 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-2 gap-4 md:px-10 py-18">
        <div className="mt-6 w-16 ml-20 lg:ml-0">
          <HomeButton />
        </div>
        <div className="ml-0 md:ml-8 lg:ml-0">
          <FooterCategories />
        </div>
        <ExchangeCoin />
        <MailTo />
        <ContactCard />
        <SocialMedia />
      </div>
    </div>
  </footer>
);
