import { Link } from "react-router-dom";

const NavPublic = () => {
  return (
    <nav className="NavPublic">
      <div className="NavPublic__logo">
      <Link to="/home">
          <img src="https://i.pinimg.com/originals/ea/37/7c/ea377cec0a65ab19e4e2438de6993773.png" alt="logo" />
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
