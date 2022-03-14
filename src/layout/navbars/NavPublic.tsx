import { Link } from "react-router-dom";

const NavPublic = () => {
  return (
    <nav className="NavPublic">
      <div className="NavPublic__logo">
        <Link to="/">
          <img src="https://images-platform.99static.com//Wrisfu9BQQZDWOgH8lqGSwcxR9s=/702x3277:1300x3876/fit-in/500x500/99designs-contests-attachments/121/121844/attachment_121844903" alt="logo" />
        </Link>
      </div>
      <ul className="NavPublic__list">
        <li className="NavPublic__item">          
          <a className="NavPublic__link" href="/login">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavPublic;
