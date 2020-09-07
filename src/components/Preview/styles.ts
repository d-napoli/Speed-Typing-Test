import styled from 'styled-components';

export const Letter = styled.span`
    font-size: 30px;
    min-width: 20px;
    background-color: white;
    padding: 5px;
    margin: 2px 0 1px 2px;
    border-radius: 5px;

    &.letterOkay {
        background-color: var(--light-green);
        color: var(--dark-green);
    }

    &.letterWrong {
        background-color: var(--light-red);
        color: var(--dark-red);
    }
`;
