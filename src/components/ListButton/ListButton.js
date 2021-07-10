import React from 'react'
import Button, { ListButtonContainer } from './ListButton.styled';

const ListButton = ({ numItemsToDisplay, setNumItemsToDisplay }) => {
    const handleClick = () => {
        setNumItemsToDisplay(numItemsToDisplay + 3);
    }

    return (
        <ListButtonContainer>
            <Button onClick={handleClick}>Load More</Button>
        </ListButtonContainer>
    )
}

export default ListButton
