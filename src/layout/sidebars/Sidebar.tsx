import React, { useState } from "react";

const Sidebar = () => {
    const [menuCollapse, setMenuCollapse] = useState(false)

    const menuIconClick = () => {
      menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

  return (
    <div className="Sidebar">
      <div className="Sidebar__hamburger" onClick={menuIconClick}>
        <div className="Sidebar__hamburger-line"></div>
        <div className="Sidebar__hamburger-line"></div>
        <div className="Sidebar__hamburger-line"></div>
      </div>
      <ul className="Sidebar__list">
        <li className="Sidebar__item">
        {menuCollapse ? (
            <>
            <div className="Sidebar__icon"></div>
            <a className="Sidebar__link" href="/settings">
            Settings
          </a>
            </>
            
          ) : (
            <div className="Sidebar__icon"></div>
          )}
        </li>
        <li className="Sidebar__item">
        {menuCollapse ? (
            <>
            <div className="Sidebar__icon"></div>
            <a className="Sidebar__link" href="/settings">
            Settings
          </a>
            </>
            
          ) : (
            <div className="Sidebar__icon"></div>
          )}
        </li>
        <li className="Sidebar__item">
        {menuCollapse ? (
            <>
            <div className="Sidebar__icon"></div>
            <a className="Sidebar__link" href="/settings">
            Settings
          </a>
            </>
            
          ) : (
            <div className="Sidebar__icon"></div>
          )}
        </li>
        <li className="Sidebar__item">
          {menuCollapse ? (
            <>
            <div className="Sidebar__icon"></div>
            <a className="Sidebar__link" href="/settings">
            Settings
          </a>
            </>
            
          ) : (
            <div className="Sidebar__icon"></div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
