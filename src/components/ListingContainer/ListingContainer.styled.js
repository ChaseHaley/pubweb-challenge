import styled from 'styled-components';

const ListingContainerStyles = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin: 30px;
    justify-content: center;
    align-items: start;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        align-items: center;
        justify-content: center;
    }
`;

export default ListingContainerStyles;