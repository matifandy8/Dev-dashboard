import { getAuth, signOut } from "firebase/auth";
import React from "react";
import Sidebar from "../sidebars/Sidebar";

const NavPrivate = () => {
  const auth = getAuth();

  return (
    <nav className="NavPrivate">
      <Sidebar />
      <ul className="NavPrivate__list">
        <li className="NavPrivate__item">
          <a className="NavPrivate__link" onClick={() => signOut(auth)}>
            Logout
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavPrivate;
