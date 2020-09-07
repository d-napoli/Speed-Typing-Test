import styled from 'styled-components';

import { VscDebugRestart } from 'react-icons/vsc';

export const Container = styled.div`
  display: flex;
  width: 60%;
  margin: 0 auto;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  padding: 30px;
  margin: 20px 0;
  width: 100%;
  position: relative;
  flex-wrap: wrap;
  background-color: white;
  border-radius: var(--border-radius);
  border: var(--border-size) solid var(--gray);

  overflow-y: hidden;
  max-height: calc(100vh / 2);
`;

export const Input = styled.input`
  padding: 15px;
  background-color: var(--light-gray);
  border: var(--border-size) solid var(--gray);
  outline: none;
  width: 90%;
  margin-right: 20px;
  font-size: 17px;
  border-radius: var(--border-radius);
`;

export const Button = styled.button`
  background-color: var(--blue);
  border: none;
  font-weight: bold;
  color: var(--white);
  padding: 10px;
  border-radius: var(--button-border-radius);
  width: 5% !important;
  min-width: 150px;
  width: auto;
  font-size: 17px;

  &:hover {
    background-color: var(--dark-blue);
    cursor: pointer;
  }
`;

export const ReloadIcon = styled(VscDebugRestart)`
  font-size: 20px;
`;

export const FormWrapper = styled.div`
  display: flex;
`;

export const TimerCounter = styled.div`
  display: flex;
  width: 5%;
  padding: 10px;
  font-size: 17px;
  border: var(--border-size) solid var(--gray);
  text-align: center;
  align-items: center;
  background-color: var(--light-gray);
  font-weight: bold;
  border-radius: var(--border-radius);
  margin-left: 20px;
  min-width: 60px;
  justify-content: center;
`;