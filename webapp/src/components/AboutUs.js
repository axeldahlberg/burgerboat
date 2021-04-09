import React, { useState } from 'react'
import PropTypes from 'prop-types'



import styled from 'styled-components';

import { Boat } from '@styled-icons/ionicons-solid/Boat';
import { ReadMore } from '@styled-icons/material-rounded/ReadMore';



const WhiteBoat = styled(Boat)`
  color: white;
`;

const WhiteReadLess = styled(ReadMore)`
  color: white;
  transform: rotate(180deg);
`
const WhiteReadMore = styled(ReadMore)`
  color: white;
`;

const H3 = styled.h3`
  color: white;
`;

const Article = styled.article`
  max-width: calc(var(--burger-boat-paragraph-text) * 30);
  margin: 0 auto;
`;

const P = styled.p`
  color: white;
  user-select: none;

  display: inline-block;

  background-color: black;
  font-family: burgerboat-font;

  font-weight: 1.5rem;
  text-align: left;
  font-size: 1em;

  margin-top: 1.5em;

  line-height: 25px;
  margin-bottom: 1.5em;
  letter-spacing: 1px;
`;

const AboutUsHeading = () => {
  return (<H3><WhiteBoat size={24} /> ABOUT US</H3>);
};

const BurgerBoatGangPicture = () => {
  return (
    <>
    <img src="/img/instagram/burgerboat_instagram/the_gang/2014-05-20_oOhY94yxwR.jpg" width="460" height="460" />
    </>
  );
}

const AboutUs = (props) => {

  const [value,setValue] = useState(false);

  const handleClick = () => {
    setValue(!value);
  }

  return (
    <Article>
      <AboutUsHeading />
      <P>
        Near the roadside on a typical American joint at one of Arizona's many and sun-drenched highways, the idea was born for the company that today is Burger Boat..... <br/>
        <WhiteReadMore size={24} onClick={handleClick} />
      </P>
      {value &&
      <Article>
        <BurgerBoatGangPicture style={{display: 'inline-block'}} />
        <P>
          In front of us were burgers cooked by the charismatic chef Gus. In front of his fancy grill at the back of the restaurant, he has over the years and after thousands of burgers managed to perfect his technique to perfection. The aroma evoked an enormous pleasure in us and the taste buds screamed for a bite, the very basic idea of ​​Burger Boat, which at the moment was truly diffuse, took root in our subconscious. A short distance below the restaurant, a tired houseboat simmered around on the shiny, clean waters of Lake Powell.
        </P>
        <P>
          A snail's trail of oil and gas residues leaked from the boat and from its engines a black and unpleasant smoke billowed up into the atmosphere.
        </P>
        <P>
          The small beach next to the lake was packed with sun worshipers who most likely felt the wonderful smell of grilled from Chef Gus' grill.
          What if the tired houseboat was replaced by a modern and environmentally conscious boat that also sold burgers in Gus' spirit?
        </P>
        <P>
          A mobile food boat that could deliver food directly to the consumer without him / her having to leave his / her favorite place in the sun?
        </P>
        <P>
          The revelation was total and we immediately started sketching out a potential business plan and different approaches.
        </P>
        <P>
          This little stop by the road next to Lake Powell was the starting shot for Burger Boat, which now, a year later, will provide Stockholmers with the city's tastiest burgers without you as a customer having to lift a finger.
          With the help of solar panels, electric motors and locally produced raw materials, we help keep Stockholm green and clean, just as we want our children and grandchildren to experience the capital.
        </P>
      <WhiteReadLess size={24} onClick={handleClick} />
      </Article>
      }
    </Article>
  );
}

AboutUs.propTypes = {

}

export default AboutUs
