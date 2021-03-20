import React, { Fragment } from 'react';

import { nanoid } from 'nanoid';

import styled from "styled-components/macro";

import BurgerBoatSvg from '../icon/burgerboatsvg.svg';

const BurgerBoatLogo = styled.img`
  margin: 50px 0px;
  cursor: pointer;
  width: 150px;
`;


const swedishMenuData = {  
  currencyText: ' kr',
  preambleText: [`Våra hamburgare består av 100% närproducerat`,`svenskt nötkött, tomat, sallad, stekt lök`,`dressing och bröd.`],
  menuList: [
  {item: 'Enkel 150 g', price: 85, description: {item: 'Med Pommes Frites, Dryck & Dipp', price: 109} },
  {item: 'Cheese 150 g', price: 90, description: {item: 'Med Pommes Frites, Dryck & Dipp', price: 115} },
  {item: 'Dubbel 300 g', price: 129, description: {item: 'Med Pommes Frites, Dryck & Dipp', price: 140} },
  {item: 'Dubbe Cheese 300 g', price: 135, description: {item: 'Med Pommes Frites, Dryck & Dipp', price: 145} },
  {item: 'Tillägg', price: 10, description: { item: 'Rökt sidfläsk/ Dryck & Dipp'} },
  {item: 'Pommes Frites', price: 20},
  {item: 'Sötpotatispommes', price: 30},
  {item: 'Dryck', price: 15},
  {item: 'Glass', description: {item: 'Olika sorter'}}
]};

const englishMenuData = {  
  currencyText: ' eur',
  preambleText: [`Our hamburgers consists of 100% local produced`,`swedish beef, tomato, lettuce, friend onions`,`sauce and bread.`],
  menuList: [
    {item: 'Hamburger 150 g', price: 9, description: {item: 'With Fries, Beverage & Sauce', price: 11} },
    {item: 'Cheeseburger 150 g', price: 10, description: {item: 'With Fries, Beverage & Sauce', price: 12} },
    {item: 'Double Hamburger 150 g', price: 13, description: {item: 'With Fries, Beverage & Sauce', price: 14} },
    {item: 'Double Cheesburger 150 g', price: 14, description: {item: 'With Fries, Beverage & Sauce', price: 15} },
    {item: 'Fixins', price: 1, description: { item: 'Smoked backon, Bevarage & Sauce'} },
    {item: 'Fries', price: 2},
    {item: 'Sweet Potato Fries', price: 3},
    {item: 'Bevarage', price: 1.5},
    {item: 'Ice cream', description: {item: 'Different sorts'}}
  ]
}

const Container = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  color: white;
  background-color: black;
  padding: 30px 50px 30px 50px;
`;

const MenuHeading = styled.h3`
  margin: 0px 0px;
  font-size: 3rem;
`;

const PreambleContainer = styled.section`
  margin: 0px 30px 30px 30px;
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
`;

const PreambleText = styled.p``;
const DescriptionList = styled.dl`
width: 100%;
`;
const DescriptionTerm = styled.dt`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
`;

const DescriptionTermRight = styled.span`

`;
const DescriptionTermLeft = styled.span`

`;

const DescriptionDetails = styled.dd`
  font-style: italic;
  margin: 0px 0px 15px 0px;
  display: flex;
  justify-content: space-between;
`;

const DescriptionDetailsRight = styled.span``;
const DescriptionDetailsLeft = styled.span``;

const MenuFlyer = ({language}) => {

  const menuData = (language === 'en' ? englishMenuData : swedishMenuData);

  const {currencyText,preambleText,menuList} = menuData;
  

  const preamble =  preambleText.map((text) => {return (
    <PreambleText key={nanoid()}>{text}</PreambleText>
  )});

  const menu = menuList.map(({item,price,description}) => { 
    
    const pricePresentation = (price && price > 0 ? price + currencyText : '');    
    const descriptionPresentation = (description && description.price) ? description.price + currencyText : '';
    
    // cant use key={nanoid()} direct on <></> react fragment syntactic sugar
    return (    
    <React.Fragment key={nanoid()}>
      <DescriptionTerm>
       <DescriptionTermLeft key={nanoid()}>{item}</DescriptionTermLeft>
       <DescriptionTermRight key={nanoid()}>{pricePresentation}</DescriptionTermRight>
      </DescriptionTerm>      
      {description && description.item && ( 
          <DescriptionDetails>
            <DescriptionDetailsLeft key={nanoid()}>{description.item}</DescriptionDetailsLeft>
            <DescriptionDetailsRight key={nanoid()}>{descriptionPresentation}</DescriptionDetailsRight>
          </DescriptionDetails>
        )
      }
    </React.Fragment>
  )})

  return (
    <Container key={nanoid()}>
      <BurgerBoatLogo src={BurgerBoatSvg} key={nanoid()}/>
      <MenuHeading key={nanoid()}>{'MENY'}</MenuHeading>      
      <PreambleContainer key={nanoid()}>{preamble}</PreambleContainer>      
      <DescriptionList key={nanoid()}>{menu}</DescriptionList>
    </Container>
  )
}

export default MenuFlyer