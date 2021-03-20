
import React, { useState, useEffect } from 'react';

import styled from "styled-components/macro";
import { nanoid } from 'nanoid';
import { instanceOf } from 'prop-types';

const ImageGrid = styled.section`
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  width: 1000px;
  background-color: black;
`;

const ImageGridItem = styled.span`
  flex: 0 32%;
  margin-bottom: 1%;
`;

/*
'2014-04-17_m5pnd8yx_b.jpg',
  '2014-04-17_m5pzMEyx_z.jpg',
  '2014-04-18_m7r5YMSxzz.jpg',
  '2014-04-19_m9oOVBSxzC.jpg',
  '2014-04-20_nApLXrSx-x.jpg',
  '2014-04-20_nBNIVZyx4m.jpg',
  '2014-04-21_nDa5l7Sxy8.jpg',
*/

const instagramImages = [
  {src:'2015-08-13_6UP8K7yx8q.jpg',alt:'Pierre som kapten'},
  {src:'2014-05-20_oOhY94yxwR.jpg',alt:'Burger Boat gänget Jonathan, Elias och Pierre'},
  {src:'2015-08-06_6CPZt-yx_K.jpg',alt:'Burger Boat gänget äter'},
  {src:'2014-05-28_ojZaGWSx5d.jpg',alt:''},
  {src:'2014-06-25_prYk4Qyx6Y.jpg',alt:''},
  {src:'2015-05-24_3Ezxr_Sx8t.jpg',alt:''},
  {src:'2015-05-28_3OjPQMSx7E.jpg',alt:''},
  {src:'2015-06-05_3ibFk2yxzZ.jpg',alt:''},
  {src:'2015-07-03_4r5ebQSx28.jpg',alt:''},
  {src:'2015-07-15_5KbuLsyx_p.jpg',alt:''},
  {src:'2015-08-11_6PIzkuSxzy.jpg',alt:''},
  {src:'2015-08-19_6jdKflSx8P.jpg',alt:''},
]

const imagePath = "/img/instagram/burgerboat_instagram/";

// does not work
const styles = {
  transition: 'opacity 1s ease-in-out;',
  opacity: 0.9,
  //transitionTimingFunction: 'ease-in-out',
  //animationDuration: '10s'
}

const ImageCarousel = () => {

  const totalImages = 6; // in pair of three

  const [pagination, setPagination] = useState([0,totalImages-1]);
  useEffect(() => {    
    const paginationInterval = setInterval(() => {
      const handlePagination = () => {
        if(pagination[1] >= instagramImages.length -1 ){
          setPagination([0,totalImages-1]);
        } else {
          setPagination([pagination[1]+1,pagination[1]+6]);
        }    
      }
      handlePagination();      
    }, 5000);

    return () => {
      clearInterval(paginationInterval);
    }
  }, [pagination])

  return (
    <>
      <ImageGrid>
          { instagramImages.slice(pagination[0],pagination[1]+1).map(({src,alt}) => {
            return (
            <ImageGridItem key={nanoid()}>
              <img 
                style={styles}
                src={`${imagePath}${src}`} 
                alt={alt} 
                width="320px" 
                height="320px" 
                key={nanoid()}
                />
            </ImageGridItem>)
          })}
      </ImageGrid>
    </>
  );
}

export default ImageCarousel