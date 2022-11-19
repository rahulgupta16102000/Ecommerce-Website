import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";
import { HashLink } from "react-router-hash-link";
import { AuthContext } from "../context/AuthContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import { color } from "@mui/system";
const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const navigate = useNavigate();
  const store = useContext(AuthContext);
  console.log(store);

  const { logout } = React.useContext(AuthContext);
  const handlelogout = async () => {
    await logout();
    navigate("/login");
  };
  return (
    <nav>
      <div className="MENUHEADER"
       
      >
        <HashLink to={"/#home"}>
          <h2 id="topposition" style={{ fontFamily: "cursive" }}>
            TopTrend
          </h2>
        </HashLink>
        <a
          style={{ background: "transparent", border: "none" }}
          className="navsecond"
          onClick={Opentmenu}
        >
          <div
            style={{
              width: "60px",
              background: "black",
              height: "4px",
              margin: "3px",
            }}
          ></div>
          <div
            style={{
              width: "60px",
              background: "black",
              height: "4px",
              margin: "3px",
            }}
          ></div>
          <div
            style={{
              width: "60px",
              background: "black",
              height: "4px",
              margin: "3px",
            }}
          ></div>
        </a>
      </div>
      <div className="navdiv" id="navdiv">
        <Link to={"/"}>Home</Link>
        <HashLink to={"#footerfirst"}>Contact Us</HashLink>
        <a
          style={{
            border: "none",
            background: "transparent",
            fontSize: "large",
            color: "blueviolet",
            cursor: "pointer",
          }}
          onClick={handlelogout}
        >
          LogOut
        </a>
        <Link to={"/cart"}>
          <FiShoppingBag />
          <p>{cartItems.length}</p>
        </Link>
      </div>
    </nav>
  );
};
function Opentmenu() {
  let val = document.getElementById("navdiv");
  if (window.getComputedStyle(val).display === "block") {
    val.style.display = "none";
  } else {
    val.style.display = "block";
  }
}
export default Header;
