import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
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
            <p>I really enjoy crafting digital products that intertwine technology, design, and art.</p>
            <p>Especially in love with the escapist nature of a great video game;</p>
            <p>And the way interactive websites can spark conversations and boost engagement.</p>
            <p>If you are keen to create cool things together, let&apos;s talk~</p>
          </div>

          <div className="about__icons">
            <a href="mailto:ackylmohamad@gmail.com" target="_blank" class="about__link">
              <EmailIcon fontSize="large" />
            </a>
            <a href="https://www.instagram.com/ac.kyl/" target="_blank" class="about__link">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="https://www.linkedin.com/in/ackyl/" target="_blank" class="about__link">
              <LinkedInIcon fontSize="large" />
            </a>
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
