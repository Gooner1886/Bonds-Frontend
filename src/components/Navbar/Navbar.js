import React from "react";

import "./Navbar.css";

const navbar = () => {
  return (
    <div className="Navbar">
      <div className="Navlinks">
        <p style={{fontSize: "larger", fontWeight: '900', }}>DBonds</p>
        <p>Home</p>
        <p>About</p>
        <p>Sign In</p>
      </div>
    </div>
  );
};

export default navbar;
