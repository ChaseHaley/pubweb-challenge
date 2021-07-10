import React from 'react';
import ListingsHeaderStyles from './ListingsHeader.styled';

const ListingsHeader = ({ numListings}) => {
    return (
        <ListingsHeaderStyles>
            <p>{numListings} homes available</p>
        </ListingsHeaderStyles>
    )
}

export default ListingsHeader
