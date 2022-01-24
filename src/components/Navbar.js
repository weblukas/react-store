import React, { useState } from "react";

import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaDev } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";
import useMediaQuery from "./hooks/useMediaQuery";
import MobileMenu from "./MobileMenu";
import MenuHamburger from "./MenuHamburger";
// import { DeviceSize } from "./responsive/DeviceSize";

const StyledNavbar = styled.div`
  background: linear-gradient(to right, #f6f6f9, #7799f0);
  color: #fff;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

const NavLink = styled(Link)`
  padding: 2rem;
  text-decoration: none;
  color: #343360;
  font-size: 1.3rem;
`;

const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  //  const isMobile = useMediaQuery(`maxWidth: ${DeviceSize.mobile}`) - doesn't work
  const isMobile = useMediaQuery(`(max-width: 960px)`);

  const handleClick = () => {
    setOpenMobileMenu(!openMobileMenu);
  };
  return (
    <>
      <StyledNavbar>
        <NavLink to="/">
          <FaDev className="logo-icon" />
        </NavLink>
        {!isMobile ? (
          <ul>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/gallery">Galery</NavLink>
            <NavLink to="/blog">Blog</NavLink>
          </ul>
        ) : null}
        {isMobile ? (
          <MenuHamburger
            handleClick={handleClick}
            openMobileMenu={openMobileMenu}
          />
        ) : null}
      </StyledNavbar>
      <AnimatePresence
        initial={true}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {openMobileMenu ? (
          <MobileMenu isMobile={isMobile} handleClick={handleClick} />
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
