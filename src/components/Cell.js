import React from 'react';

import { StyleCell } from './styles/StyleCell';
import { TETROMINOS } from '../tetrominos';

const Cell = ({ type }) => (
    <StyleCell type={'L'} color={TETROMINOS['L'].color} />
);

export default Cell;