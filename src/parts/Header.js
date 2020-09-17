import React from "react";
import styled from "styled-components";

const TopBar = styled.div`
  width: 100%;
  display: flex;
  background-color: white;
  font-size: 1.6rem;
  border-bottom: 1px solid #c3c3c3;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const NavBar = styled.div`
  background-color: white;

  & nav ul {
    list-style: none;
    display: flex;
  }

  & nav ul li {
    padding: 0.5rem;
  }
`;

export default function Header() {
  return (
    <header>
      <TopBar>
        <div>Script Kid - Playground</div>
        <NavBar>
          <nav>
            <ul>
              <li>Home</li>
              <li>Cards</li>
              <li>Grids</li>
            </ul>
          </nav>
        </NavBar>
      </TopBar>
    </header>
  );
}
