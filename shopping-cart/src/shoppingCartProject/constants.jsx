import { ReactComponent as SearchIcon } from "../public/icons/search.svg";
import { ReactComponent as HamburguerListIcon } from "../public/icons/hamburguer.svg";
import { ReactComponent as CloseListIcon } from "../public/icons/xIcon.svg";
import { ReactComponent as WhatsappIcon } from "../public/icons/whatsapp.svg";
import { ReactComponent as InstragramIcon } from "../public/icons/instagram.svg";
import { ReactComponent as FacebookIcon } from "../public/icons/facebook.svg";
import photo01 from "../public/imgs/photo01.jpg";
import photo02 from "../public/imgs/photo02.jpg";
import photo03 from "../public/imgs/photo03.jpg";

export const CategoryItems = [
  { value: "categories", label: "Chose a Category" },
  { value: "TShirts", label: "T-Shirt" },
  { value: "Shorts", label: "Shorts" },
  { value: "Shoes", label: "Shoes" },
];

export const Icons = {
  SearchIcon,
  HamburguerListIcon,
  CloseListIcon,
};

export const SocialMediaIcons = {
  WhatsappIcon,
  InstragramIcon,
  FacebookIcon,
};

export const FooterCategoryItems = [
  { value: "TShirts", label: "T-Shirt" },
  { value: "Shorts", label: "Shorts" },
  { value: "Shoes", label: "Shoes" },
];

export const CoinSelection = [
  { value: "Real", label: "Real - R$" },
  { value: "Dolar", label: "Dolar - $" },
];

export const CarouselImgs = {
  photo01,
  photo02,
  photo03,
};
