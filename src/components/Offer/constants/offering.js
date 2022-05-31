import { v4 as uuidv4 } from "uuid";
import user2 from "../../assets/image/homePage/user2.svg";
import world from "../../assets/image/homePage/world.svg";
import headset from "../../assets/image/homePage/headset.svg";

export const offering = [
  {
    id: uuidv4(),
    benefitsUrl: user2,
    benefitsAlt: "user2",
    benefitsTitle: "Best Travel Guide Always For Your Services",
    benefitsText:
      "Travel has helped us to understands the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes. Travel has helped us to understand the meaning of life",
  },
  {
    id: uuidv4(),
    benefitsUrl: world,
    benefitsAlt: "world",
    benefitsTitle: "World Class Services Provide For You",
    benefitsText:
      "Travel has helped us to understands the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes. Travel has helped us to understand the meaning of life",
  },
  {
    id: uuidv4(),
    benefitsUrl: headset,
    benefitsAlt: "headset",
    benefitsTitle: "24/7 Strong Customer Support",
    benefitsText:
      "Travel has helped us to understands the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes. Travel has helped us to understand the meaning of life",
  },
];
