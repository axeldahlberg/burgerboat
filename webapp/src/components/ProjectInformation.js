
import React from 'react'

import PropTypes from 'prop-types'

import styled from 'styled-components';

import { Boat } from '@styled-icons/ionicons-sharp/Boat';
import { Trello } from '@styled-icons/boxicons-logos/Trello';

const axelImg = '2015-06-30_4j63gDSxzw.jpg';
const imgUrl = `/img/instagram/burgerboat_instagram/${axelImg}`;
const A = styled.animateTransform(() => ({
  href:'https://trello.com/b/o3xrFXsf/burgerboat-site',
  target: '_blank'
})).a``;

//
const ProjectInformation = props => {
  return (
    <>
      <img src={imgUrl} alt='Utvecklaren av Burger Boats tribute-site' />
      <A><Trello/></A>
    </>
  )
}

ProjectInformation.propTypes = {

}

export default ProjectInformation

