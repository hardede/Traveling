import { observer } from "mobx-react-lite";
import React, { FC, useContext, useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppContext } from "./components/AppContext";
import AppRouter from "./components/AppRouter";
import { toursList } from "./components/Tour/constants/toursList";
import { toursOffer } from "./components/Tour/constants/toursOffer";
import { Context } from "./index";

const App: FC = () => {
  const { store } = useContext(Context);
  const [items, setItems] = useState(toursList);
  const [offers, setOffers] = useState(toursOffer);
  const [modalAcc, setModalAcc] = useState(false);
  const [bagItems, setBagItems] = useState<any>(
    JSON.parse(localStorage.getItem("bag")!) || []
  );
  const [favoriteItems, setFavoriteItems] = useState<any>(
    JSON.parse(localStorage.getItem("favorites")!) || []
  );
  const [orderItems, setOrderItems] = useState<any>(
    JSON.parse(localStorage.getItem("orders")!) || []
  );

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, [store]);

  useEffect(
    () => localStorage.setItem("bag", JSON.stringify(bagItems)),
    [bagItems]
  );

  useEffect(
    () => localStorage.setItem("favorites", JSON.stringify(favoriteItems)),
    [favoriteItems]
  );
  useEffect(
    () => localStorage.setItem("orders", JSON.stringify(orderItems)),
    [orderItems]
  );

  const onAddToBag = (item: any) => {
    setBagItems([...bagItems, item]);
  };

  const onAddToFavorite = async (item: any) => {
    try {
      const findFavoriteItem = favoriteItems.find(
        (favorite: any) => favorite.id === item.id
      );
      console.log(findFavoriteItem);

      if (findFavoriteItem) {
        setFavoriteItems(favoriteItems.filter((t: any) => t.id !== item.id));
        localStorage.removeItem(item);
      } else {
        setFavoriteItems([...favoriteItems, item]);
      }
    } catch {
      alert("Error");
    }
  };

  const onAddToFavoriteTimeOut = (item: any) => {
    setFavoriteItems([...favoriteItems, ...item]);
  };

  const onAddToOrders = (item: any) => {
    setOrderItems([...orderItems, ...item]);
  };

  const deleteItemsBag = (item: any) => {
    setBagItems(bagItems.filter((t: any) => t !== item));
  };

  const deleteItemsFavorite = (item: any) => {
    setFavoriteItems(favoriteItems.filter((t: any) => t !== item));
  };

  const isItemAddFav = (id: any) => {
    return favoriteItems.some((item: any) => item.id === id);
  };

  if (store.isLoading) {
    return (
      <div className="block border-4 border-red-500 rounded-full border-dashed w-50 h-50 mx-auto mt-40 text-center py-20 text-red-500 animate-rotateLoader">
        Loading...
      </div>
    );
  }

  return (
    <AppContext.Provider
      value={{
        items,
        setItems,
        offers,
        setOffers,
        modalAcc,
        setModalAcc,
        bagItems,
        setBagItems,
        orderItems,
        setOrderItems,
        onAddToBag,
        onAddToFavorite,
        onAddToOrders,
        favoriteItems,
        setFavoriteItems,
        deleteItemsBag,
        deleteItemsFavorite,
        onAddToFavoriteTimeOut,
        isItemAddFav,
      }}
    >
      <Router>
        <h1 className="bg-red-300 text-center">
          {store.isAuth &&
            (store.user.isActivated ? "" : "Verify your account!!!")}
        </h1>
        <AppRouter />
      </Router>
    </AppContext.Provider>
  );
};

export default observer(App);
