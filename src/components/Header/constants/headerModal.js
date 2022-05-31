import { FaRegAddressCard } from "react-icons/fa";
import { ImAirplane } from "react-icons/im";
import { v4 as uuidv4 } from "uuid";
import { ReactComponent as Orders } from "../../assets/image/homePage/cart.svg";
import { ReactComponent as Users } from "../../assets/image/homePage/userAst.svg";

export const headerModal = [
  {
    id: uuidv4(),
    linkName: "My Account",
    linkUrl: "/account",
    imgUrl: <Users />,
    alt: "user",
  },
  {
    id: uuidv4(),
    linkName: "My Orders",
    linkUrl: "/account/orders",
    imgUrl: <Orders />,
    alt: "orders",
  },
  {
    id: uuidv4(),
    linkName: "My Details",
    linkUrl: "/account/my-details",
    imgUrl: <FaRegAddressCard />,
    alt: "details",
  },
  {
    id: uuidv4(),
    linkName: "All offers",
    linkUrl: "/offers",
    imgUrl: <ImAirplane />,
    alt: "offers",
  },
];
