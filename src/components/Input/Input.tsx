import styled from 'styled-components';
import { variant } from 'styled-system';

/** type - interdace */
import { IBox } from '../Box/Box';

const inputVariant = variant({
  key: 'variant.inputVariant',
  prop: 'variant'
});

export interface IInput extends IBox {
  variant?: string;
}

export const Input = styled.input<IInput>`
  ${inputVariant};
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  ::-moz-placeholder { 
    color: #737373;
  }
  ::-webkit-input-placeholder {
    color: #737373;
  } 
  :-webkit-autofill { 
    -webkit-box-shadow: 0 0 0px 1000px #ffffff inset;
    -webkit-text-fill-color: #333333;
    }
`;

Input.defaultProps = {
  variant: 'default'
};

export default Input;
