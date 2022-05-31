import { v4 as uuidv4 } from "uuid";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineLocalOffer } from "react-icons/md";
import { BiTrip } from "react-icons/bi";
import { VscPreview } from "react-icons/vsc";
import { FiMapPin } from "react-icons/fi";

export const headerLink = [
  {
    id: uuidv4(),
    nameLink: "Home",
    url: "/#hero",
    offset: -200,
    imgUrl: <AiOutlineHome />,
  },
  {
    id: uuidv4(),
    nameLink: "Destination",
    url: "/#destination",
    offset: -150,
    imgUrl: <FiMapPin />,
  },
  {
    id: uuidv4(),
    nameLink: "Offer",
    url: "/#offer",
    offset: -100,
    imgUrl: <MdOutlineLocalOffer />,
  },
  {
    id: uuidv4(),
    nameLink: "Tour",
    url: "/#tour",
    offset: -150,
    imgUrl: <BiTrip />,
  },
  {
    id: uuidv4(),
    nameLink: "Blog",
    url: "/#testimonial",
    offset: -150,
    imgUrl: <VscPreview />,
  },
];
