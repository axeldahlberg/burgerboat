
import { nanoid } from 'nanoid';

import styled from 'styled-components/macro';

import { FacebookSquare, Instagram, Twitter, Yelp} from '@styled-icons/boxicons-logos';
import { Hamburger } from '@styled-icons/fa-solid/Hamburger';

const sizeAttribute = (props) => ({
  size: 48
});

const footerIconCssColor = `color: white`;

const FooterWhiteFacebookSquare = styled(FacebookSquare).attrs(sizeAttribute)`${footerIconCssColor}`;
const FooterWhiteInstagram = styled(Instagram).attrs(sizeAttribute)`${footerIconCssColor}`;
const FooterWhiteTwitter = styled(Twitter).attrs(sizeAttribute)`${footerIconCssColor}`;
const FooterWhiteBurgerDudes = styled(Hamburger).attrs(sizeAttribute)`${footerIconCssColor}`;
const FooterWhiteYelp = styled(Yelp).attrs(sizeAttribute)`${footerIconCssColor}`;

const socialMediaIconLinks = [
  {icon: FooterWhiteFacebookSquare, url: 'https://www.facebook.com/burgerboatSTHLM/',alt: 'Facebook'},
  {icon: FooterWhiteInstagram, url: 'https://www.instagram.com/burgerboat/',alt: 'Instagram'},
  {icon: FooterWhiteTwitter, url: 'https://twitter.com/burgerboatsthlm?lang=en', alt: 'Twitter'},
  {icon: FooterWhiteBurgerDudes, url: 'https://www.burgerdudes.se/sweden/stockholm/burger-boat/', alt: 'Burger Dudes'},
  {icon: FooterWhiteYelp, url: 'https://www.yelp.com/biz/burger-boat-stockholm', alt: 'Yelp'}
];

const SocialMediaList = styled.ul`
  margin-right: 10px;
`;
const SocialMediaListItem = styled.li`
  display: inline-block;
  margin: 10px 10px 10px 10px;
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  bottom: 0;
  width: 100%;
  height: 70px;
  background: black;
`;

const A = styled.a`
`;

const Footer = (props) => {
  return (<>
    <Container>
      <SocialMediaList>
        { socialMediaIconLinks.map(({icon: Icon, url, title}) => {
          return (
            <SocialMediaListItem key={nanoid()}>
              <A href={url} target="_blank" key={nanoid()} title={title}>
                <Icon/>
              </A>
            </SocialMediaListItem>
          )
        })}
      </SocialMediaList>
    </Container>
  </>
  );
}

export default Footer;
