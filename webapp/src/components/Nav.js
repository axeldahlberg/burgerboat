
import styled from 'styled-components';

import React from 'react';
import propTypes from 'prop-types';

const Nav = styled.nav`
`;

const Ul = styled.ul`
`;

const BurgerBoatNav = (props) => {
  return (
    <Nav>
      <Ul>{props.children}</Ul>
    </Nav>
  )
}

const NavItem = (props) => {
  return (
    <li className="nav-item">
      <a href="#" className="icon-button">{props.icon}</a>
    </li>
  )
};


export { BurgerBoatNav as default, Nav, Ul, NavItem}

