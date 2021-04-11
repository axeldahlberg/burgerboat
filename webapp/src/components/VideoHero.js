
import styled from 'styled-components/macro';

import VideoLogo from './VideoLogo';

const BURGERBOAT_BACKGROUND_VIDEO = "/video/burgerboat_color_v2.mp4";

const Video = styled.video`
  object-fit: cover;
  background-size: cover;  
  max-width: 100%;

  min-width: 100%;
  min-height: 100%;
  position: absolute;
  
  @media screen and (max-width: 411px) {}
  @media only screen and (min-width: 411px) {}

  
  transform: translate(-50%,-50%);
  transform: translate(-50%,-50%) scaleX(2)  scaleY(2); 

  top: 50%;
  left: 50%;
  
  z-index: -10;
`;



const Source = styled.source.attrs((props) => ({
  src: process.env.PUBLIC_URL + BURGERBOAT_BACKGROUND_VIDEO,
  type: 'video/mp4'
}))``;

const VideoSource = () => {
  return (
    <Video autoPlay muted loop>
      <Source />
    </Video>
  );
}

const Section = styled.section`
  overflow: hidden;
  position: relative;

  width: 100vw;
  height: 100%;
  top: 87px;
  margin: 0 auto;
  z-index: 0;
  margin-bottom: 100px;

`;

const VideoHero = (props) => {
    return (
      <Section>
        <VideoLogo/>
        <VideoSource/>
      </Section>
    )
}

export default VideoHero;