import React, { useState } from "react";

const Sidebar = () => {
  const [menuCollapse, setMenuCollapse] = useState(false);

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  const data = [
    {
      title: "Dashboard",
      icon: "fas fa-tachometer-alt",
      link: "/dashboard",
    },
    {
      title: "Users",
      icon: "fas fa-users",
      link: "/users",
    },
    {
      title: "Posts",
      icon: "fas fa-pencil-alt",
      link: "/posts",
    },
    {
      title: "Categories",
      icon: "fas fa-list-alt",
      link: "/categories",
    },
    {
      title: "Comments",
      icon: "fas fa-comments",
      link: "/comments",
    },
  ];

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
        {data.map((item, index) => {
          return (
            <li className="Sidebar__item" key={index}>
              {menuCollapse ? (
                <>
                  <div className="Sidebar__icon">
                    <i className={item.icon}></i>
                  </div>
                  <a className="Sidebar__link" href={item.link}>
                    {item.title}
                  </a>
                </>
              ) : (
                <div className="Sidebar__icon">
                  <i className={item.icon}></i>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
