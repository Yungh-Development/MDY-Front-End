import React from "react";
import { SocialMediaIcons } from "../../constants";

export const SocialMedia = () => (
  <div className="text-center">
    <span className="font-black text-base lg:text-lg">FOLLOW US</span>
    <div className="flex mt-2 justify-center items-end">
      <div className="">
        <a href="www.google.com" className="hover:text-green-500">
          <SocialMediaIcons.WhatsappIcon width="20px" height="20px" />
        </a>
      </div>
      <div className="ml-4 mr-4">
        <a href="www.instagram.com" className="hover:text-fuchsia-400">
          <SocialMediaIcons.InstragramIcon width="20px" height="20px" />
        </a>
      </div>
      <div>
        <a href="www.facebook.com">
          <SocialMediaIcons.FacebookIcon width="20px" height="20px" />
        </a>
      </div>
    </div>
  </div>
);
