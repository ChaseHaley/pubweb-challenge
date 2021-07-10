import styled from 'styled-components';

const HomeListingCardStyles = styled.div`
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    display: grid;
    grid-template-rows: 2fr 1fr;
    overflow: auto;
    height: 100%;
object-fit: cover;
`;

export const ImageDiv = styled.div`
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        min-width: 100px;
    }
`;

export const TextDiv = styled.div`

`;

export default HomeListingCardStyles;