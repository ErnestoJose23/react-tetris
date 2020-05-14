import styled from 'styled-components';

export const StyledStage = style.div`
    display: grid;
    grid-template-rows: repeat(
        ${props => props.height},
        calc(25vw / ${props => props.width})
    );
    grid-template-colums: repeat(${props => $props.width}, 1fr);
    grid-gap: 1px;
    broder: 2px solid #333;
    widht: 100%;
    max-widht: 25vw;
    backgorund: #111;
`