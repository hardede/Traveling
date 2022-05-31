import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import useScrollPosition from "../../hooks/useScrollPosition";
import useWindowSize from "../../hooks/useWindowSize";
import travelLogo from "../assets/image/homePage/travelLogo.svg";
import BurgerModal from "../Modal/burgerModal/BurgerModal";
import Burger from "./Burger/Burger";
import { headerLink } from "./constants/headerLink";
import IconsRight from "./IconsRight";

const Header = () => {
  const [headerSticky, setHeaderSticky] = useState(false);
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [burgerShow, setBurgerShow] = useState(false)
  const scrollY = useScrollPosition();
  const size = useWindowSize();

  useEffect(() => {
    setHeaderSticky(scrollY >= 900);
  }, [scrollY]);

  useEffect(() => {
    setBurgerMenu(size.width <= 870)
  }, [size]);

  return (
    <header
      className={
        headerSticky
          ? "sticky left-0 top-0 w-full py-5 px-4 bg-[#A79997] z-40 transition-all"
          : "absolute left-0 top-0 w-full z-10 py-9 px-4 transition-all"
      }
    >
      <div className="flex justify-between items-center font-noto text-lg">
        <HashLink
          to="/#hero"
          smooth={true}
          duration={1000}
        >
          <img src={travelLogo} alt="site logo" />
        </HashLink>
        {burgerMenu ? (
          <Burger setBurgerShow={setBurgerShow} burgerShow={burgerShow} />
        ) : (
          <>
            <div>
              {headerLink.map(name => (
                <HashLink
                  smooth={true}
                  offset={name.offset}
                  duration={1000}
                  key={name.id}
                  to={name.url}
                  className="pr-12 last:pr-0 opacity-60 hover:opacity-100 cursor-pointer my_transition lg:pr-6"
                >
                  {name.nameLink}
                </HashLink>
              ))}
            </div>
            <IconsRight />
          </>
        )}
        <BurgerModal setBurgerShow={setBurgerShow} burgerShow={burgerShow} />
      </div>
    </header>
  );
};

export default Header;
