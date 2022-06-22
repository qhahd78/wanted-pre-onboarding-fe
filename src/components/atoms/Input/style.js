import styled from 'styled-components';
import { COLOR } from '../../../styles/colors';

const StyledInput = styled.input`
  width: 100%;
  height: 36px;
  font-size: 16px;
  background-color: ${COLOR.GRAY_0};
  border: 1px solid ${COLOR.GRAY_1};
  border-radius: 3px;

  :focus {
    border: 1px solid ${COLOR.GRAY_2};
  }
`;

export { StyledInput };
