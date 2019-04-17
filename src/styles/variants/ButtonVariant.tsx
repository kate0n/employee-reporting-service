// create constants
export enum ButtonEnum {
    default = 'default',
    primary = 'primary',
    error = 'error'
}

export interface IButton {
  default: any;
  primary?: any;
  error?: any;
}

const base = {
    width: '112px',
    padding: '4px 4px ',
    height: '32px',
    border: 'none',
    cursor: 'pointer',
    fontSize:  '16px',
    color: '#ffffff',
}

export const ButtonVariant = (theme: any): IButton => {
    return {
        default: {
            background: theme.colors.color2,
            ...base,
        },
        primary: {
            background: theme.colors.color3,
            ...base,
        },
        error: {
            background: theme.colors.color4,
            ...base,
        },
    };
};

export default ButtonVariant;
