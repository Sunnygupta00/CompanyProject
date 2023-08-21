import React from "react";
import cat from "../component/cat.png";
const Header = () => {
  const btn = {
    cursor: "pointer",
    border: "1px solid transparent",
    backgroundColor: "transparent",
    height: "50px",
    width: "200px",
    color: "black",
    fontSize: "1em"
  };
  const mystyle = {
    color: "white",
    backgroundColor: "transparent",
    padding: "10px",
    fontFamily: "Arial",
    display: "flex",
    justifyContent: "space-between"
  };
  return (
    <div style={mystyle}>
      <div className="first">
        <img src={cat} />
      </div>
      <div className="second">
        <button style={btn}>About</button>
        <button style={btn}>Blog</button>
        <button style={btn}>Contact</button>
        <button style={btn}>career</button>
      </div>
    </div>
  );
};

export default Header;
