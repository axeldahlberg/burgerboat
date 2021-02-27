
import styled from 'styled-components/macro';

import { FacebookSquare, Instagram, Twitter} from '@styled-icons/boxicons-logos';
import { Hamburger } from '@styled-icons/fa-solid/Hamburger';

const sizeAttribute = (props) => ({
  size: 16
});

const footerIconCssColor = `color: white`;
const FooterWhiteFacebookSquare = styled(FacebookSquare).attrs(sizeAttribute)`${footerIconCssColor}`;
const FooterWhiteInstagram = styled(Instagram).attrs(sizeAttribute)`${footerIconCssColor}`;
const FooterWhiteTwitter = styled(Twitter).attrs(sizeAttribute)`${footerIconCssColor}`;
const FooterWhiteBurgerDudes = styled(Hamburger).attrs(sizeAttribute)`${footerIconCssColor}`;

//https://www.youtube.com/watch?v=emL9dkijfZY

const Footer = (props) => {
  return (<></>
  );
}

export default Footer;


