import styled from 'styled-components';

const ListingContainerStyles = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    justify-content: center;
    align-items: start;
    margin: 30px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export default ListingContainerStyles;