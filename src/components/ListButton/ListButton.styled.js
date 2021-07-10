import styled from 'styled-components';

const Button = styled.button`
    background-color: #0d66ba;
    color: white;
    font-size: 1em;
    padding: 0.75em 4em;
    border: 0;
    border-radius: 5px;

    &:hover {
        cursor: pointer;
        background-color: #0e70cc;
    }
`;

export const ListButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
`;

export default Button;