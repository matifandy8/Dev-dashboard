import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [menuCollapse, setMenuCollapse] = useState(false);

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  const data = [
    {
      title: "Dashboard",
      icon: "fas fa-home",
      link: "/dashboard",
    },
    {
      title: "Projects",
      icon: "fas fa-tasks",
      link: "/projects",
    },
    {
      title: "Learning",
      icon: "fas fa-pencil-alt",
      link: "/learning",
    },
    {
      title: "Calendar",
      icon: "fas fa-list-alt",
      link: "/calendar",
    },
    {
      title: "Social Media",
      icon: "fas fa-users",
      link: "/social-media",
    },
    {
      title: "Profile",
      icon: "fas fa-user",
      link: "/profile",
    },
  ];

  return (
    <div className="Sidebar">
      <div className="Sidebar__logo">
        <Link to="/home">
          <img src="https://i.pinimg.com/originals/ea/37/7c/ea377cec0a65ab19e4e2438de6993773.png" alt="logo" />
        </Link>
      </div>
      <div className="Sidebar__hamburger" onClick={menuIconClick}>
        <div className="Sidebar__hamburger-line"></div>
        <div className="Sidebar__hamburger-line"></div>
        <div className="Sidebar__hamburger-line"></div>
      </div>
      <ul className="Sidebar__list">
        {data.map((item, index) => {
          return (
            <li className="Sidebar__item" key={index}>
              {menuCollapse ? (
                <div className="Sidebar__item-collapse">
                  <div className="Sidebar__icon">
                    <i className={item.icon}></i>
                  </div>
                  <a className="Sidebar__link" href={item.link}>
                    {item.title}
                  </a>
                </div>
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
