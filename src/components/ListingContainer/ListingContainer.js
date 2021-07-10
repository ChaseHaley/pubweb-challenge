import React from 'react'
import HomeListingCard from '../HomeListingCard/HomeListingCard';
import ListingContainerStyles from './ListingContainer.styled';
import listings from '../../data/listings';

const ListingContainer = ({numItemsToDisplay}) => {
    const listItems = listings.map((item) => <HomeListingCard
        key={item.homeName}
        imageURL={item.imageURL}
        homeName={item.homeName}
        startingPrice={item.startingPrice}
        beds={item.beds}
        baths={item.baths}
        sqft={item.sqft}
        isMultiSection={item.isMultiSection}
    />);

    const itemsToShow = listItems.map((item, index) => {
        if(index < numItemsToDisplay)
            return item;
    });

    return (
        <ListingContainerStyles>
            {itemsToShow}
        </ListingContainerStyles>
    )
}

export default ListingContainer