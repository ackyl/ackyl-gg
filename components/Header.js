import Link from "next/link";
import { useState } from "react";

// create state of hideMenu

export default function Header() {
  const [hideMenu, setHideMenu] = useState(true);
  const [menuClickable, setMenuClickable] = useState(true);
  const [menuText, setMenuText] = useState(true);
  const [initiate, setInitiate] = useState(false);

  const onMenuClick = async () => {
    if (menuClickable) {
      setInitiate(true);
      setMenuClickable(false);
      setHideMenu(!hideMenu);
      document.body.style.overflow = hideMenu ? "hidden" : "visible";
      // delay 500ms before setting menuClickable to true
      setTimeout(() => {
        setMenuClickable(true);
        setMenuText(hideMenu ? false : true);
      }, 500);
    }
  };

  const renderMenu = () => {
    return (
      <div className={!initiate ? "menu__wrapper" : ""}>
        <div className={hideMenu ? "menu menu--hidden" : "menu"}>
          {/* <div className="ocean--2"></div> */}
          <div className="about__text">
            <p>i really enjoy to sit somewhere between technology, design, and art.</p>
            <p>especially in love with the escapist nature of a great video game.</p>
            <p>if you want to hire me profesionally, or</p>
            <p>just want to just collaborate with me, send me a message</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <header className="header">
        <Link href="/" className={menuText ? "header__title" : "header__title header__title--black"}>
          DIMAS ACKYL M.
        </Link>

        <a className={menuText ? "header__menu" : "header__menu header__menu--black"} onClick={onMenuClick}>
          {menuText ? "ABOUT ME" : "CLOSE"}
        </a>
      </header>

      {renderMenu()}
    </>
  );
}
