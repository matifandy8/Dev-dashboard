import NavPrivate from "./navbars/NavPrivate";
import NavPublic from "./navbars/NavPublic";

const Navbar = () => {

  // get token
  const isAuthenticated = window.localStorage.getItem("token");

  return <>{isAuthenticated ? <NavPrivate /> : <NavPublic />}</>;
};

export default Navbar;
