import { findByTitle } from '@testing-library/react';
import styled from 'styled-components';
import { subtleBoxShadow, lightBlueBackground, greenBoxShadow } from './Styles';

export const Tile = styled.div`
  ${subtleBoxShadow};
  ${lightBlueBackground};
  padding: 10px;
`

export const SelectableTile = styled(Tile)`
  &:hover {
    cursor: pointer;
    ${greenBoxShadow};
  }
`