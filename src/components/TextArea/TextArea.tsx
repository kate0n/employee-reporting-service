import styled from 'styled-components';
import { variant } from 'styled-system';

/** type - interdace */
import { IBox } from '../Box/Box';

const inputVariant = variant({
  key: 'variant.inputVariant',
  prop: 'variant'
});

export interface ITextArea extends IBox {
  variant?: string;
  [propName: string]: any;
}

export const TextArea = styled.textarea<ITextArea>`
  ${inputVariant};
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
`;

TextArea.defaultProps = {
  variant: 'default'
};

export default TextArea;
