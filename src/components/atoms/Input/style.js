import styled from 'styled-components';
import { COLOR } from '../../../styles/colors';

const StyledInput = styled.input`
  width: 100%;
  height: 36px;
  background-color: ${COLOR.GRAY_0};
  border: 1px solid ${COLOR.GRAY_1};
  padding-left: 10px;
  border-radius: 3px;

  :focus {
    border: 1px solid ${COLOR.GRAY_2};
  }
`;

export { StyledInput };
