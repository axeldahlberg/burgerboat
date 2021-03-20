
import styled from 'styled-components/macro';

import { FacebookSquare, Instagram, Twitter, Yelp} from '@styled-icons/boxicons-logos';
import { Hamburger } from '@styled-icons/fa-solid/Hamburger';

const sizeAttribute = (props) => ({
  size: 64
});

const footerIconCssColor = `color: white`;

const FooterWhiteFacebookSquare = styled(FacebookSquare).attrs(sizeAttribute)`${footerIconCssColor}`;
const FooterWhiteInstagram = styled(Instagram).attrs(sizeAttribute)`${footerIconCssColor}`;
const FooterWhiteTwitter = styled(Twitter).attrs(sizeAttribute)`${footerIconCssColor}`;
const FooterWhiteBurgerDudes = styled(Hamburger).attrs(sizeAttribute)`${footerIconCssColor}`;
const FooterWhiteYelp = styled(Yelp).attrs(sizeAttribute)`${footerIconCssColor}`;

const socialMediaIconLinks = [
  {icon: FooterWhiteFacebookSquare, url: 'https://www.facebook.com/burgerboatSTHLM/'},
  {icon: FooterWhiteInstagram, url: 'https://www.instagram.com/burgerboat/'},
  {icon: FooterWhiteTwitter, url: ''},
  {icon: FooterWhiteBurgerDudes, url: ''},
  {icon: FooterWhiteYelp, url: 'https://www.yelp.com/biz/burger-boat-stockholm'}
];

//https://www.youtube.com/watch?v=emL9dkijfZY
const SocialMediaList = styled.ul`
margin-right: 10px;
`;
const SocialMediaListItem = styled.li`
  display: inline-block;
  margin: 10px 10px 10px 10px;
`;

const Container = styled.div`
  position: fixed;
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
        { socialMediaIconLinks.map(({icon: Icon, url}) => {
          return (
            <SocialMediaListItem>
              <A href={url} target="_blank">
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
