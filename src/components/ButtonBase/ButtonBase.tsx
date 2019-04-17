import styled from 'styled-components';
import { variant } from 'styled-system';

import { ButtonEnum } from '../../styles/variants/buttonVariant';

/** type - interdace */
import { IBox } from '../Box/Box';

const buttonsVariant = variant({
  key: 'variant.buttons',
  prop: 'variant'
});
const buttonsSize = variant({
  key: 'variant.buttonSize',
  prop: 'size'
});

export interface IButtonBase extends IBox {
  // // variant?: ButtonEnum;
  variant?: ButtonEnum;
  // // size button - property ?
  size?: string;
}

/**
 * Компонента обычная кнопка
 * @example ./ButtonBase.example.md
 */
export const ButtonBase = styled.button<IButtonBase>`
  ${buttonsVariant};
  ${buttonsSize};
`;

ButtonBase.defaultProps = {
  variant: 'default',
  size: 'small'
};

export default ButtonBase;
