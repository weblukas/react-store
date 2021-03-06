import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavbar = styled.nav`
  background: linear-gradient(to right, #f6f6f9, #7799f0);
  color: #fff;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;

  .logo-icon {
    font-size: 4rem;
    color: #df82d2;
  }

  .links-list {
    display: flex;
  }
  .cart-icon {
    margin-left: 10px;
    cursor: pointer;

    @media screen and (max-width: 768px){
      color: black;
    }
  }

  .cart-link {
    display: flex;

    > * {
      margin-right: 10px;
    }
  }

  .mobile-hamburger-container {
    display: flex;
    align-items: center;

    &>* {
      margin-right: 8px;
    }
  }
`;

export const StyledNavLink = styled(Link)`
  padding: 2rem;
  text-decoration: none;
  color: #343360;
  font-size: 1.3rem;
`;
