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
    padding: '4px 4px ',
    height: '32px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#ffffff',
    margin: '4px 8px'
}

export const ButtonVariant = (theme: any): IButton => {
    return {
        default: {
            background: theme.colors.color1,
            ...base,
        },
        primary: {
            background: theme.colors.color2,
            '&:hover': {background: '#4C51C6'},
            ...base,
        },
        error: {
            background: theme.colors.color6,
            ...base,
        },
    };
};

export default ButtonVariant;
