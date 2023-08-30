import React, { useState } from "react";
import logo from "../assets/logo.png";
import flag from "../assets/flag.png";
import cart from "../assets/cart.png";
import user from "../assets/user.png";
import arrow from "../assets/arrow.png";
import {  FaSearchengin, FaWix } from "react-icons/fa";
import { FaAlignJustify, FaClosedCaptioning, FaList, FaXmark } from "react-icons/fa6";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="nav contact">
      <a href="/">
        <img src={logo} />
      </a>
      <div className="links">
        <a className="link" href="#">
          Store
        </a>
        <a className="link" href="#">
          About
        </a>
        <a className="link" href="#">
          Contact
        </a>
        <a className="link" href="#">
          Blog
        </a>
      </div>
      <div className="search">
        <FaSearchengin className="search_icon" />
        <input type="text" placeholder="Search" className="search_input" />
      </div>

      <div className="flex">
        <a href="#">
          <img src={flag} width={30} alt="flag" className="link" />
        </a>
        <a href="#">
          <img src={cart} alt="cart" width={35} className="link" />
        </a>
        <div className="user link">
          <a href="#">
            <img src={user} alt="user" width={18} />
            <img src={arrow} alt="arrow" />
          </a>
        </div>
      </div>
      <div className="menu">
        {toggle ? (
          <FaXmark size={20} onClick={() => setToggle(!toggle)} />
        ) : (
          <FaList size={20} onClick={() => setToggle(!toggle)} />
        )}
        <div
          className={`${
            !toggle ? "hidden" : "show"
          } p-6 black-gradient absolute top-10 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
        >
          <div className="navlinks">
            <a className="link" href="#">
              Store
            </a>
            <a className="link" href="#">
              About
            </a>
            <a className="link" href="#">
              Contact
            </a>
            <a className="link" href="#">
              Blog
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
