import React from 'react';
import HogCardContainer from './HogCardContainer'

const HogsBrowser = ({hogs}) => {
  const allHogs = hogs.map((hog,index) =>
    <HogCardContainer key={index} hog={hog}/>
  )

  return (
    <div className="ui grid container">{allHogs}</div>
  )
}

export default HogsBrowser;
