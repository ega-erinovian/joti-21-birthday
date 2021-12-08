import React from "react";
import "../index.css";

const Navigation = () => {
  return (
    <>
      <nav>
        <div className="navbar-wrapper">
          <a href="/">Home</a>
          <a href="/message">Message</a>
          <a href="/album">Gallery</a>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
