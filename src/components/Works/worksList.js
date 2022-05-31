import { v4 as uuidv4 } from "uuid";
import map from "../assets/image/homePage/map.png";
import binocular from "../assets/image/homePage//binocular.png";
import backpack from "../assets/image/homePage/backpack.png";
import ukelele from "../assets/image/homePage/ukelele.png";

export const worksList = [
  {
    id: uuidv4(),
    imgUrl: map,
    title: "Choose Destination",
    text: "Lorem Ipsum is simply dummy text of the printing setting",
  },
  {
    id: uuidv4(),
    imgUrl: binocular,
    title: "Explore The Place",
    text: "Lorem Ipsum is simply dummy text of the printing setting",
  },
  {
    id: uuidv4(),
    imgUrl: backpack,
    title: "Start Your Journey",
    text: "Lorem Ipsum is simply dummy text of the printing setting",
  },
  {
    id: uuidv4(),
    imgUrl: ukelele,
    title: "Let’s Enjoy",
    text: "Lorem Ipsum is simply dummy text of the printing setting",
  },
];