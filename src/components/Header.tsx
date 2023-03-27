import Link from "next/link";
import { useState } from "react";

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
          <div className="menu__item">
            <Link href="/" onClick={onMenuClick}>
              Project
            </Link>
            <div className="menu__line"></div>
          </div>
          <div className="menu__item">
            <div className="menu__line"></div>
            <Link href="/" onClick={onMenuClick}>
              Blog
            </Link>
          </div>
          <div className="menu__item">
            <Link href="/" onClick={onMenuClick}>
              Contact
            </Link>
            <div className="menu__line"></div>
          </div>
          <div className="menu__message">
            <p>
              This website is still under construction and is best viewed on
              desktop.
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <header className="header">
        <Link
          href="/"
          className={
            menuText ? "header__title" : "header__title header__title--black"
          }
        >
          ackyl.gg
        </Link>

        <a
          className={
            menuText ? "header__menu" : "header__menu header__menu--black"
          }
          onClick={onMenuClick}
        >
          {menuText ? "menu" : "close"}
        </a>
      </header>

      {renderMenu()}
    </>
  );
}
