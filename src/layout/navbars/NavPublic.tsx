import React from "react";
import Sidebar from "../sidebars/Sidebar";

const NavPublic = () => {
  return (
    <nav className="NavPublic">
      <Sidebar/>
      <ul className="NavPublic__list">
        <li className="NavPublic__item">          
          <a className="NavPublic__link" href="/login"> Register / Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavPublic;
