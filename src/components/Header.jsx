import React from "react";
import { HEADER_TEXT } from "../utils/Constants";

function Header() {
  return (
    <header>
      <h2 className="text-bg-dark p-4" style={{textAlign:"left"}}>{HEADER_TEXT}</h2>
    </header>
  );
}

export default Header;
