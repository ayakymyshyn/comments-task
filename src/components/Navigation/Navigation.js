import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledUL = styled.ul`
  @import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");
  li {
    a {
      text-decoration: none;
      text-transform: uppercase;
      color: #fff;
    }
  }
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  font-size: 1.2em;
  background-color: #fd3838;
  padding: 20px;
  margin: 0;
`;

const NavWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.5);
`;

const Navigation = () => (
  <NavWrapper>
    <StyledUL>
      <li>
        <Link to="/">main page</Link>
      </li>
      <li>
        <Link to="/favorites">favorites</Link>
      </li>
      <li>
        <Link to="/add-new-comment">add comment</Link>
      </li>
    </StyledUL>
  </NavWrapper>
);

export default Navigation;
