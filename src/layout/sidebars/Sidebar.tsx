import React from "react";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="Sidebar__hamburger">
        <div className="Sidebar__hamburger-line"></div>
        <div className="Sidebar__hamburger-line"></div>
        <div className="Sidebar__hamburger-line"></div>
      </div>
      <ul className="Sidebar__list">
        <li className="Sidebar__item">
          <div className="Sidebar__icon"></div>
          <a className="Sidebar__link" href="/dashboard">
            Dashboard
          </a>
        </li>
        <li className="Sidebar__item">
          <div className="Sidebar__icon"></div>
          <a className="Sidebar__link" href="/favorites">
            Favorites
          </a>
        </li>
        <li className="Sidebar__item">
          <div className="Sidebar__icon"></div>
          <a className="Sidebar__link" href="/tools">
            Tools
          </a>
        </li>
        <li className="Sidebar__item">
          <div className="Sidebar__icon"></div>
          <a className="Sidebar__link" href="/settings">
            Settings
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
