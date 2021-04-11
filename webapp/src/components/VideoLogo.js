

import styled from 'styled-components/macro';

import BurgerBoatSvg from '../icon/burgerboatsvg.svg';

const Brand = styled.img`
/*
position: absolute;

left: 50%;
top: 50%;

transform: translate(-50%,-50%);
*/
width: 275px;
`;

const BentText = styled.h3`
color: #fff;
font: 5rem "burgerboat-font", sans-serif;  
display: flex;
user-select: none;

/*left: 50%;
top: 50%;*/
`;

/* later project */
const CurvedText = ({text,...props}) => {
  const characterArray = [...text];
  const arcDegrees = 100; // degrees

  const degreePerCharacter = arcDegrees / characterArray.length;

  const calculateCurve = (c,index) => {

  const degree = `${index * degreePerCharacter}`;  
    return(<span style={{
        
        transform: `rotate(${-degree}deg)`
      }}>
      {c}
    </span>)
  }
  return (
    <BentText>{characterArray.map(calculateCurve)}</BentText>
  );
}


const Container = styled.div`  
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
`;


const VideoLogo = () => {
  return (
    <Container>
      <BentText>{'BURGER'}</BentText>
      <Brand src={BurgerBoatSvg}/>
      <BentText>{'BOAT'}</BentText>
    </Container>
  )
}


export default VideoLogo;