import styled from 'styled-components';

const BURGERBOAT_BACKGROUND_VIDEO = "/video/burgerboat_bw.mp4";

const VideoTitle = styled.h3`
  color: #fff;  
  font: 4rem/1.1 "burgerboat-font", sans-serif;    
  font-style: italic;
  margin: 3rem;
  position: absolute;
  text-transform: uppercase;
  width: 100%;
  z-index: 2;
  
`
const VideoContent = styled.div`
  position: fixed;
  bottom: 0;
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

const VideoBackground = (props) => {
    return (
      <Section>
        <VideoTitle>{'BURGER BOAT\n'}</VideoTitle>
        <VideoSource/>
        <VideoContent>{props.children}</VideoContent>
      </Section>
    )
}

export default VideoBackground;