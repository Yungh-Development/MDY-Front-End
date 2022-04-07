import home from "../../public/icons/home.svg";
import hash from "../../public/icons/hash.svg";
import bell from "../../public/icons/bell.svg";
import message from "../../public/icons/message.svg";
import bookmark from "../../public/icons/bookmark.svg";
import list from "../../public/icons/list.svg";
import profile from "../../public/icons/profile.svg";
import threeDots from "../../public/icons/threeDots.svg";
import twitter from "../../public/icons/twitter.svg";

import BBBLogo from "../../public/imgs/bbbLogo.jpg";

export const Icons = {
  Home: home,
  Explore: hash,
  Notifications: bell,
  Messages: message,
  Bookmarks: bookmark,
  Lists: list,
  Profile: profile,
  More: threeDots,
};

export const Twitter = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    fill="#1D9BF0"
    class="bi bi-twitter"
    viewBox="0 0 16 16"
  >
    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
  </svg>
);

export const DotsNews = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-three-dots"
    viewBox="0 0 16 16"
  >
    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
  </svg>
);

export const Search = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-search"
    viewBox="0 0 16 16"
  >
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
  </svg>
);

export const Trends = [
  {
    Tittle: "Reality TV - LIVE",
    ShortHistory: "Os Tweets com tudo o que está rolando no BBB",
    Logo: BBBLogo,
  },
  {
    Tittle: "#ChampionsNaHBOMax",
    ShortHistory: "É hora de decisão. E, nessas horas nada mais importa.",
  },
  {
    Tittle: "Trending in Brazil",
    ShortHistory: "Lambendo",
    Logo: threeDots,
  },
  {
    Tittle: "Entertainment - Trending",
    ShortHistory: "Animais Fantásticos",
    Logo: threeDots,
  },
];
