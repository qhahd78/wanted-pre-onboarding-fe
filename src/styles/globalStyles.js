import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
 ${reset}
 * {
   font-size: 16px;
   box-sizing:border-box;
   outline:none;
   border:none;
 }
`;

export default GlobalStyles;
