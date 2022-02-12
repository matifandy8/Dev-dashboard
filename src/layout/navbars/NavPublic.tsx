import React from "react";
import Sidebar from "../sidebars/Sidebar";

const NavPublic = () => {
  return (
    <nav className="NavPublic">
      <Sidebar/>
      <ul className="NavPublic__list">
        <li className="NavPublic__item">          
          <a className="NavPublic__link" href="/login"> <span className="NavPublic__link-icon">icon</span> Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavPublic;
