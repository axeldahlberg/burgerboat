import BurgerBoatSvg from '../icon/burgerboatsvg.svg';
import styled from 'styled-components';

const BURGERBOAT_BACKGROUND_VIDEO = "/video/burgerboat_bw.mp4";

const VideoContent = styled.div`
  /*
  position: fixed;
  bottom: 0;*/
  background: rgba(0,0,0,0.5);
  color: #f1f1f1;
  width: 100%;
`

const Video = styled.video`
  background-size: cover;
  min-width: 100%;
  min-height: 100%;
  position: absolute;
  transform: translate(-50%,-50%);
  top: 50%;
  left: 50%;
  z-index: -1;
`;

const VideoSource = () => {
  return (
    <Video autoPlay muted loop>
      <source src={process.env.PUBLIC_URL + BURGERBOAT_BACKGROUND_VIDEO} type="video/mp4" />
    </Video>
  )
}

const Section = styled.section`
  height: 100vh;
  overflow: hidden;
  position: relative;  
`;


const Brand = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  width: 375px;
`;

const BentText = styled.h3`
  color: #fff;
  font: 4rem "burgerboat-font", sans-serif;
  left: 50%;
  top: 50%;
`;


const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row nowrap;
  align-content: center;
`;

const VideoBackground = (props) => {
    return (
      <Section>
        <Container>
          <BentText>{'BURGER'}</BentText>
          <Brand src={BurgerBoatSvg}/>
          <BentText>{'BOAT'}</BentText>
        </Container>
        <VideoSource/>
        <VideoContent>{props.children}</VideoContent>
      </Section>
    )
}

export default VideoBackground;