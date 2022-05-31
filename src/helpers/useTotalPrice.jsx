import { useContext } from "react";
import { AppContext } from "../components/AppContext";

const useTotalPrice = () => {
  const { bagItems } = useContext(AppContext);

  const totalSum =
    Math.floor(
      bagItems.reduce((sum, item) => Number(item.placePrice) + sum, 0) * Math.pow(10, 2)
    ) / Math.pow(10, 2);

  return { totalSum };
};

export default useTotalPrice;
