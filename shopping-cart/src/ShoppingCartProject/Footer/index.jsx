import React from "react";
// import { FooterCategories } from "./Categories";
import { SocialMedia } from "./SocialMedia";
import { ExchangeCoin } from "./ExchangeCoin";
import { HomeButton } from "../Header/HomeButton";
import { ContactCard } from "./Contact";
import { MailTo } from "./Mailto";

export const FooterContainer = () => (
  <footer className="bg-[#24252B] font-black text-white">
    <div className="py-7 flex text-center items-center justify-around">
      <div className="grid grid-cols-1 px-8 xl:grid-cols-5 xl:gap-4 lg:grid-cols-3 lg:gap-3 md:grid-cols-2 md:px-10 py-18">
        <div className="my-4 w-16 ml-20 md:mb-8 lg:ml-0">
          <HomeButton />
        </div>
        <div className="ml-0 my-4 md:ml-8 lg:ml-0">
          <ExchangeCoin />
        </div>
        <MailTo />
        <ContactCard />
        <div className="my-4 md:mt-6">
          <SocialMedia />
        </div>
      </div>
    </div>
  </footer>
);
