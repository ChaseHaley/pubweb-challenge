import styled from 'styled-components';

const ListingCardStyles = styled.div`
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    display: grid;
    grid-template-rows: 2fr 1fr;
    overflow: auto;
    height: 100%;
`;

export const ListingImage = styled.div`
    img {
        width: 100%;
        height: 100%;
        object-fit: fill;
    }
`;

export const ListingInfo = styled.div`
    margin-left: 15px;
    margin-top: 15px;
`;

export const ListingName = styled.div`
    

    @media all and (max-width: 420px) {
        font-size: 1.5em;
    }

    @media all and (max-width: 1200px) and (min-width: 421px) {
        font-size: 2em;
    }

    @media all and (max-width: 2559px) and (min-width: 1201px) {
        font-size: 2.5em;
    }
    
    @media all and (min-width: 2560px) {
        font-size: 4em;
    }
`;

export const ListingPrice = styled.div`
    color: grey;
    margin: 5px 0px;

    @media all and (max-width: 420px) {
        font-size: 0.75em;
    }

    @media all and (max-width: 1200px) and (min-width: 421px) {
        font-size: 1em;
        margin: 20px 0px;
    }

    @media all and (max-width: 2559px) and (min-width: 1201px) {
        margin: 20px 0px;
        font-size: 1em;
    }
    
    @media all and (min-width: 2560px) {
        margin: 30px 0px;
        font-size: 1.5em;
    }
`;

export const ListingBody = styled.div`
    @media all and (max-width: 420px) {
        font-size: 1em;
    }

    @media all and (max-width: 1200px) and (min-width: 421px) {
        font-size: 1.25em;
    }

    @media all and (max-width: 2559px) and (min-width: 1201px) {
        font-size: 1.5em;
    }
    
    @media all and (min-width: 2560px) {
        font-size: 1.75em;
    }

`;

export default ListingCardStyles;