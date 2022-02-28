import { getAuth, signOut } from "firebase/auth";
import React from "react";
import Sidebar from "../sidebars/Sidebar";

const NavPrivate = () => {
  const auth = getAuth();

  const Logout = () => {
   const token = localStorage.getItem("token");
    if (token) {
      localStorage.removeItem("token");
      // reload
      window.location.reload();
    }
    signOut(auth);

  };

  return (
    <nav className="NavPrivate">
      <Sidebar />
      <ul className="NavPrivate__list">
        <li className="NavPrivate__item">
          <a className="NavPrivate__link" onClick={() => Logout()}>
            Logout
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavPrivate;
