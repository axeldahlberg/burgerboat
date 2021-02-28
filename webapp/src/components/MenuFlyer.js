
import styled from "styled-components"

import BurgerBoatSvg from '../icon/burgerboatsvg.svg';

const BurgerBoatLogo = styled.img`
  margin: 50px 0px;
  cursor: pointer;
`;

const plusMenuText = 'Med Pommes Frites, Dryck & Dipp';
const currencyText = ' kr';
const preambleText = [`Våra hamburgare består av 100% närproducerat`,`svenskt nötkött, tomat, sallad, stekt lök`,`dressing och bröd.`];

const menuData = [
  {item: 'Enkel 150 g', price: 85, description: {item: plusMenuText, price: 109} },
  {item: 'Cheese 150 g', price: 90, description: {item: plusMenuText, price: 115} },
  {item: 'Dubbel 300 g', price: 129, description: {item: plusMenuText, price: 140} },
  {item: 'Dubbe Cheese 300 g', price: 135, description: {item: plusMenuText, price: 145} },
  {item: 'Tillägg', price: 10, description: { item: 'Rökt sidfläsk/ Dryck & Dipp'} },
  {item: 'Pommes Frites', price: 20},
  {item: 'Sötpotatispommes', price: 30},
  {item: 'Dryck', price: 15},
  {item: 'Glass', description: {item: 'Olika sorter'}}
];

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
const DescriptionList = styled.dl``;
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
  margin: 0px 0px 10px 0px;
`;

const MenuFlyer = (props) => {
  return (
    <Container>
      <BurgerBoatLogo src={BurgerBoatSvg} />
      <MenuHeading>{'MENY'}</MenuHeading>
      <PreambleContainer>{ preambleText.map((text) => {return (
        <PreambleText>{text}</PreambleText>
      )})}</PreambleContainer>
      <DescriptionList>
        { menuData.map(({item,price,description}) => { return (
          <>
            <DescriptionTerm>
             <DescriptionTermLeft>{item}</DescriptionTermLeft>
             <DescriptionTermRight>{(price > 0 ? price + currencyText : '')}</DescriptionTermRight>
            </DescriptionTerm>
            {description && description.item && ( 
              <DescriptionDetails>
                {description.item}  {(description.price) ? description.price + currencyText : ''}
              </DescriptionDetails>)
            }
          </>
        )})
        }
      </DescriptionList>
    </Container>
  )
}

export default MenuFlyer