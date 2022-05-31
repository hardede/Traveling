import { v4 as uuidv4 } from "uuid";
import user from "../../assets/image/accPage/userAst.svg";
import cart from "../../assets/image/accPage/cart.svg";
import about from "../../assets/image/accPage/details1.svg";
import social from "../../assets/image/accPage/social1.svg";

export const accountPages = [
  {
    id: uuidv4(),
    name: "Account overview",
    icon: user,
    alt: "user",
    link: "/account",
  },
  {
    id: uuidv4(),
    name: "My orders",
    icon: cart,
    alt: "cart",
    link: "/account/orders",
  },
  {
    id: uuidv4(),
    name: "My details",
    icon: about,
    alt: "about",
    link: "/account/my-details",
  },
  {
    id: uuidv4(),
    name: "Social accounts",
    icon: social,
    alt: "social",
    link: "/account/social-accounts",
  },
  {
    id: uuidv4(),
    link: "/",
  },
  {
    id: uuidv4(),
    link: "/",
  },
  {
    id: uuidv4(),
    link: "/",
  },
];
