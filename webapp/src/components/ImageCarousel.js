import styled from "styled-components/macro";

const ImageGrid = styled.section`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
`;

const ImageGridItem = styled.span`
  flex: 0 32%;
  height: 100px;
  margin-bottom: 2%;
`;


const InstagramImages = ''



const ImageCarousel = () => {
  return (
    <>
      <ImageGrid>
        { 
          <img src="/img/instagram/burgerboat_instagram/2014-04-17_m5pnd8yx_b.jpg"/>
        }
      </ImageGrid>
    </>
  );
}

