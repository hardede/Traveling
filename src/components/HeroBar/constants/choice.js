import { v4 as uuidv4 } from "uuid";
import Calender from "../Calender/Calender";
import SelectCountry from "../OptionCountry/SelectCountry";
import SelectPrice from "../OptionPrice/SelectPrice";

export const choice = [
  {
    id: uuidv4(),
    name: "Destinations",
    choiceName: <SelectCountry />,
  },
  {
    id: uuidv4(),
    name: "Check In",
    choiceName: <Calender />,
  },
  {
    id: uuidv4(),
    name: "Price Range",
    choiceName: <SelectPrice />,
  },
];
