import React from 'react'
import PropTypes from 'prop-types'


// TODO: fix wave component later. not relevant in first release.
const Wave = () => {

  const divStyle = {
    height: '20px',
    width: '30px',
    overflow: 'hidden',
    marginTop: '100px',
    backgroundRepeat: 'repeat-x'
  }

  const svgStyle = {
    height: '100%',
    width: '100%'
  }

  const pathStyle = {
    stroke: 'none',
    fill: '#08f'
  }
  return (
  <div style={divStyle} >
    <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={svgStyle}><path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={pathStyle}></path></svg>
  </div>);
}

Wave.propTypes = {


}

export default Wave
