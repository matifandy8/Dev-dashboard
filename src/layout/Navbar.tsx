import { useState } from "react";
import NavPrivate from "./navbars/NavPrivate";
import NavPublic from "./navbars/NavPublic";

const Navbar = () => {
  const isAuthenticated = false;
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return <>{isAuthenticated ? <NavPrivate /> : <NavPublic />}</>;
};

export default Navbar;
