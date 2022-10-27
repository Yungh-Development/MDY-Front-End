import React from "react";

import { SocialMedia } from "../../../../footer/socialMedia";
import { HomeButton } from "../../../../header/navBar/homeButton";
import { ContactCard } from "../../../../footer/contact";
import { MailTo } from "../../../../footer/mailto";

export const CheckoutFooter = () => (
  <div className="flex flex-wrap bg-[#24252B] font-black text-white justify-around items-center text-sm mt-20 pb-10 pt-5">
    <div className="flex basis-1/2 lg:basis-1/3 xl:basis-1/4 mb-10">
      <HomeButton />
    </div>
    <div className="flex basis-1/2 lg:basis-1/3 xl:basis-1/4 mb-10">
      <MailTo />
    </div>
    <div className="flex md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
      <ContactCard />
      <SocialMedia />
    </div>
  </div>
);
