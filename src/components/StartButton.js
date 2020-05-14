import React from 'react';
import { StyledStartButton } from './styles/StyledStartButton'

const StartButton = ({ callback }) => (
    <StyledStartButton onClick={callBack}>Start Game</StyledStartButton>
);

export default StartButton;