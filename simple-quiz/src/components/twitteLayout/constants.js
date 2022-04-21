//General Icons
import home from "../../public/icons/home.svg";
import hash from "../../public/icons/hash.svg";
import bell from "../../public/icons/bell.svg";
import message from "../../public/icons/message.svg";
import bookmark from "../../public/icons/bookmark.svg";
import list from "../../public/icons/list.svg";
import profile from "../../public/icons/profile.svg";
import threeDots from "../../public/icons/threeDots.svg";
import { ReactComponent as CloseMenuIcon } from "../../public/icons/xIcon.svg";
import { ReactComponent as SideMenuNews } from "../../public/icons/newsIcon.svg";
import { ReactComponent as HamburguerMenu } from "../../public/icons/hamburguer.svg";

// Right Menu Icons
import BBBLogo from "../../public/imgs/bbbLogo.jpg";
import Dog from "../../public/imgs/Dog.JPG";
import UserPostedField from "../../public/imgs/Post.JPG";
import { ReactComponent as TwitterIcon } from "../../public/icons/twitter.svg";
import Search from "../../public/icons/search.svg";

//HOME POST ICONS fill="#4BAFF3" width="20"
import { ReactComponent as SendPicture } from "../../public/icons/image.svg";
import { ReactComponent as SendGif } from "../../public/icons/gifIcon.svg";
import { ReactComponent as SendGraph } from "../../public/icons/barsGraph.svg";
import { ReactComponent as SendEmoji } from "../../public/icons/emoji.svg";
import { ReactComponent as SendDate } from "../../public/icons/calendar.svg";
import { ReactComponent as SendLocation } from "../../public/icons/locationIcon.svg";

export const HomeMiddleContainerIcons = {
  SendPicture: SendPicture,
  SendGif: SendGif,
  SendGraph: SendGraph,
  SendEmoji: SendEmoji,
  SendDate: SendDate,
  SendLocation: SendLocation,
};

export const Icons = {
  Home: home,
  Explore: hash,
  Notifications: bell,
  Messages: message,
  Bookmarks: bookmark,
  Lists: list,
  Profile: profile,
  More: threeDots,
  CloseMenuIcon: CloseMenuIcon,
  Search: Search,
  SideMenuNews: SideMenuNews,
  HamburguerMenu: HamburguerMenu,
  Twitter: TwitterIcon,
};

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

export const Followes = [
  {
    UserImg: Dog,
    Name: "LordFloki",
    Account: "@Floki",
  },
  {
    UserImg: Dog,
    Name: "MijadorRei",
    Account: "@Oreo",
  },
  {
    UserImg: Dog,
    Name: "Sapeca",
    Account: "@Caramelo",
  },
];

// MIDDLE CONTAINER
export const Posts = [
  {
    UserImg: Dog,
    Name: "Farofa",
    Account: "@fafa",
    Posted: UserPostedField,
  },
  {
    UserImg: Dog,
    Name: "Bacon",
    Account: "@BaconDelicious",
    Posted: UserPostedField,
  },
];

// Styles
export const leftSideMenusTyle = (
  <style>{`
  .hideLeftMenu {
    display: none;
  }
  .showLeftMenu {
    display: block;
    position: absolute;
    width: 350px;
    height: 100%;
    top: 0;
    left: 0;
    background: #c4e7ff;
    z-index: 10;
    display: flex;
    flex-direction: column;
    padding-left: 10px
  }
`}</style>
);

export const rightSideMenusTyle = (
  <style>{`
  .hideRightMenu {
    display: none;
  }
  .showRightMenu {    
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;    
    right: 0;
    background: #c4e7ff;
    z-index: 10;
    display: flex;
    flex-direction: column;
    padding-left: 10px
  }
`}</style>
);
