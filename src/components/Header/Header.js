import React, { useState } from "react";
import './Header.css';

import LogoImage from "../../assets/images/Logo.png";
import SearchIcon from "../../assets/images/search-normal.png";
import HeartIcon from "../../assets/images/heart.png";
import ShoppingBagIcon from "../../assets/images/shopping-bag.png";
import ProfileIcon from "../../assets/images/profile.png";
const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <header className="headerContainer">
      <div className="topSection">
        <div className="brandWrapper">
          <div
            className="menuToggle"
            onClick={() => setMenuActive(!menuActive)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="brandLogo">
            <img src={LogoImage} alt="Logo" width={25} height={25} />
          </div>
        </div>
        <nav className="centerNavigation">
          <h1 href="/">LOGO</h1>
        </nav>
        <div className="actionIcons">
        <img src={SearchIcon} alt="Search Logo" />
          <img src={HeartIcon} alt="Heart Icon" />
          <img src={ShoppingBagIcon} alt="Shopping Bag Icon" />
          <img
            className="hideOnMobile"
            src={ProfileIcon}
            alt="Profile"
          />
          <span>ENG ▼</span>
        </div>
      </div>
      <nav className="bottomSection desktopMenu">
        <a href="/#">SHOP</a>
        <a href="/#">SKILLS</a>
        <a href="/#">STORIES</a>
        <a href="/#">ABOUT</a>
        <a href="/#">CONTACT US</a>
      </nav>
      {menuActive && (
        <nav className="mobileNavigation">
          <a href="/#">SHOP</a>
          <a href="/#">SKILLS</a>
          <a href="/#">STORIES</a>
          <a href="/#">ABOUT</a>
          <a href="/#">CONTACT US</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
