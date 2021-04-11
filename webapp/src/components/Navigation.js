
import propTypes from 'prop-types';

import BurgerBoatSvg from '../icon/burgerboatsvg.svg';
import styled from 'styled-components/macro';

import { Boat } from '@styled-icons/ionicons-solid/Boat';
import { FoodMenu } from '@styled-icons/boxicons-solid/FoodMenu';
import { RestaurantMenu } from '@styled-icons/material/RestaurantMenu';

import { Map } from '@styled-icons/fa-solid/Map';

const WhiteFoodMenu  = styled(FoodMenu)`
  color: white;
`;
const WhiteResturantMenuMenu  = styled(RestaurantMenu)`
  color: white;
`;
const WhiteBoat  = styled(Boat)`
  color: white;
`;

const WhiteMap = styled(Map)`
  color: white;
`;


const BurgerBoatLogo = styled.img`
  width: 62px;
  cursor: pointer;
`;

const Header = styled.header`
  position: fixed;
  display: relative;
  
  background: black;
  
  /*background: #231f20;*/  
  justify-content: center;  
  width: 100%;
  height: 120px;  
  z-index: 10;

`;

const LeftSide = styled.section`
  display: flex;  
  justify-content: space-between;  
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  margin-top: 20px;  
  justify-content: center;
  color: #f1f1f1;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  
  list-style: none;
`;

const Li = styled.li`   
  margin-right: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const A = styled.a`
  font-style: normal;
  font-weight: bold;
  margin: 10px 10px;
  padding: 5px 5px 5px 5px;

  @media only screen and (min-width: 401px) {
    font: 1.2rem "burgerboat-font", sans-serif;
  }

  white-space: nowrap;

  &:links,:visited {
    color: white;
    text-decoration: none;
  }
  &:hover {
    border-radius: 120px 90px 60px 30px/30px 60px 90px 120px;        
    background-color: var(--burger-boat-grey);
    cursor: pointer;
  }
  
  @media only screen and (max-width: 400px) {
    font: 1rem "burgerboat-font", sans-serif;
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


const LeftNavigation = (props) => {
  return (
    <LeftSide>
      <BurgerBoatLogo src={BurgerBoatSvg}/>
      <BurgerBoatTitle>{'BURGER BOAT\n'}</BurgerBoatTitle>
    </LeftSide>
  );
}

const BurgerBoatNav = (props) => {
  return (
    <Header>      
      <Nav>
        <Ul>        
        <Li>
          <A>MENU</A>
            <WhiteFoodMenu size={24}/>
        </Li>
        <Li>
          <A>THE BOAT</A>
            <WhiteBoat size={24}/>
          </Li>
          <Li>
            <A>ABOUT</A>
            <WhiteResturantMenuMenu size={24}/>
          </Li>
          <Li>
            <A>FIND US</A>
            <WhiteMap size={24}/>
          </Li>
        </Ul>
      </Nav>
    </Header>
  );
}

//https://github.com/styled-components/styled-components/issues/330
//https://medium.com/@pitipatdop/10-useful-tips-for-styled-components-b7710b021e6a

export { BurgerBoatNav as default }

