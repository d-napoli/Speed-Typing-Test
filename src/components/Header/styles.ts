import styled from 'styled-components';

import {
    AiOutlineClockCircle
} from 'react-icons/ai';

export const HeaderWrap = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

type timeBarWidth = { width: string }

export const TimeCounterBar = styled.div<timeBarWidth>`
    background-color: var(--yellow);
    width: ${props => props.width}%;
    height: 5px;
    transition: 0.2s ease 0s all;
    display: flex;
`;

export const HeaderInfo = styled.div`
    width: 100%;
    padding: 20px;
    text-align: right;
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    background-color: var(--white);
    border-bottom: var(--border-size) solid var(--gray);
`;

export const timeIcon = styled(AiOutlineClockCircle)`
    font-size: 20px;
`;