import React from "react";
import Sidebar from "../sidebars/Sidebar";

const NavPrivate = () => {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <nav className="NavPrivate">
      <Sidebar />
      <ul className="NavPrivate__list">
        <li className="NavPrivate__item">
          <a className="NavPrivate__link" onClick={logout}>
            Logout
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavPrivate;
