import React from 'react';
import HomeListingCardStyles from './HomeListingCard.styled';

const HomeListingCard = (props) => {
  const {
    imageURL,
    homeName,
    startingPrice,
    beds,
    baths,
    sqft,
    isMultiSection
  } = props;

  console.log(imageURL);
  return (
    <HomeListingCardStyles>
      <img src={imageURL} alt="" />
      <h4>{homeName}</h4>
      <p>Starting in the ${startingPrice}s</p>
      <p>{sqft} sq. ft {beds} beds {baths} baths {isMultiSection}</p>
    </HomeListingCardStyles>
  )
};

export default HomeListingCard;
