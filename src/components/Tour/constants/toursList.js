import { v4 as uuidv4 } from "uuid";
import pic from "../../assets/image/homePage/Tour.png";
import pic1 from "../../assets/image/homePage/Tour1.png";
import pic2 from "../../assets/image/homePage/Tour2.png";

export const toursList = [
  {
    id: uuidv4(),
    placeImg: pic,
    placeAlt: "picture1",
    placeName: "Santorini, Oia Greece",
    placePrice: "2000",
    placeReviews: "5k Reviews",
    place: "odd",
  },
  {
    id: uuidv4(),
    placeImg: pic1,
    placeAlt: "picture2",
    placeName: "Santorini, Oia Greece",
    placePrice: "2000",
    placeReviews: "5k Reviews",
    place: "even",
  },
  {
    id: uuidv4(),
    placeImg: pic2,
    placeAlt: "picture3",
    placeName: "Santorini, Oia Greece",
    placePrice: "2000",
    placeReviews: "5k Reviews",
    place: "odd",
  },
];
