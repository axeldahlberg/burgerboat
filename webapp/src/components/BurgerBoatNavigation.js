

import BurgerBoatSvg from '../icon/burgerboatsvg.svg';
import styled from 'styled-components';
import propTypes from 'prop-types';


const BurgerBoatLogo = styled.img`
  width: 62px;
  cursor: pointer;
`;

const Header = styled.header`
  position: fixed;
  display: flex;
  background: #231f20;
  justify-content: space-between;
  width: 100%;  
  
  padding: 25px 50px 20px 30px;
`;

const LeftSide = styled.section`
  display: flex;  
  justify-content: space-between;  
  cursor: pointer;
  
`;

const Nav = styled.nav`
  margin-top: 15px;
  & > li {
    display: inline;
    margin-right: 50px;
  }
  & > li:last-type-of {
    margin-right: 0;
  }
`;

const A = styled.a`
  font: 1.0rem "burgerboat-font", sans-serif;
  &:links,:visited {
    color: white;
    text-decoration: none;  
  }
  &:hover {
    cursor: pointer;
  }
`;

const BurgerBoatTitle = styled.h3`
  color: #fff;
  font: 2rem "burgerboat-font", sans-serif;
  margin-top: 15px;
  margin-left: 10px;
  cursor: pointer;
  /*font-style: italic;*/
  /*margin: 3rem;*/
`;

/*
  position: absolute;
  text-transform: uppercase;
  width: 100%;
  z-index: 2;  
*/

const Ul = styled.ul`
`;

const Li = styled.li`
`

const BurgerBoatNav = (props) => {
  return (
    <Header>
      <LeftSide>
        <BurgerBoatLogo src={BurgerBoatSvg}/>
        <BurgerBoatTitle>{'BURGER BOAT\n'}</BurgerBoatTitle>
      </LeftSide>
      <Nav>
        <Ul>
          <Li><A>VAR ÄR VI</A></Li>
          <Li><A>BÅTEN</A></Li>
          <Li><A>MENY</A></Li>
          <Li><A>OM OSS</A></Li>
        </Ul>
      </Nav>
    </Header>
  );
}

//https://github.com/styled-components/styled-components/issues/330

export { BurgerBoatNav as default }

