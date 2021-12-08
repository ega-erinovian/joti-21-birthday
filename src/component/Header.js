import React from "react";
import Navbar from "./Navigation";
import AudioControl from "./AudioControl";

const Header = () => {
  return (
    <>
      <header>
        <Navbar />
        <AudioControl />
      </header>
    </>
  );
};

export default Header;
