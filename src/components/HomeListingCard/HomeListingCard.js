import React from 'react';
import HomeListingCardStyles, { ImageDiv, TextDiv } from './HomeListingCard.styled';

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
      <ImageDiv>
        <img src={imageURL} alt="" />
      </ImageDiv>
      <TextDiv>
        <h4>{homeName}</h4>
        <p>Starting in the ${startingPrice}s</p>
        <p>{sqft} sq. ft {beds} beds {baths} baths {isMultiSection}</p>
      </TextDiv>
    </HomeListingCardStyles>
  )
};

export default HomeListingCard;
