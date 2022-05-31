import { v4 as uuidv4 } from "uuid";
import pic1 from "../assets/image/homePage/place_1.png";
import pic2 from "../assets/image/homePage/place_2.png";
import pic3 from "../assets/image/homePage/place_3.png";

export const picturesInfo = [
  {
    id: uuidv4(),
    picUrl: pic1,
    name: "Cuba City",
    altPic: "pic1",
  },
  {
    id: uuidv4(),
    picUrl: pic2,
    name: "Paris",
    altPic: "pic2",
  },
  {
    id: uuidv4(),
    picUrl: pic3,
    name: "Japan",
    altPic: "pic3",
  },
];
