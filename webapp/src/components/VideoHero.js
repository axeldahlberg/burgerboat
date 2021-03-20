
import styled from 'styled-components/macro';

import VideoLogo from './VideoLogo';

const BURGERBOAT_BACKGROUND_VIDEO = "/video/burgerboat_bw.mp4";

const VideoContent = styled.div`
  /*
  position: fixed;
  bottom: 0;*/
  background: rgba(0,0,0,0.5);
  color: #f1f1f1;
  width: 100%;
`;

const Video = styled.video`
  background-size: cover;
  min-width: 100%;
  min-height: 100%;
  position: absolute; 
  transform: translate(-50%,-50%); //  scaleX(0.5)  scaleY(0.5);
  top: 50%;
  left: 50%;
  z-index: -1;
`;

const VideoSource = () => {
  return (
    <Video autoPlay muted loop>
      <source src={process.env.PUBLIC_URL + BURGERBOAT_BACKGROUND_VIDEO} type="video/mp4" />
    </Video>
  );
}

const Section = styled.section`
  overflow: hidden;
  position: relative;
  width: 100vw;
  height: 100vh;
  top: 87px;
  margin: 0 auto;
`;

const VideoHero = (props) => {
    return (
      <Section>
        <VideoLogo/>
        <VideoSource/>
        <VideoContent>{props.children}</VideoContent>
      </Section>
    )
}

export default VideoHero;