import * as React from 'react';
import { ThemeProvider } from 'styled-components';

/** Variants */
import {ButtonSize} from './variants/ButtonSize';
import {InputVariant} from './variants/InputVariant';
import ButtonVariant from "./variants/ButtonVariant";

export const colors = {
    color0: '#ffffff',
    color1: '#BDBDBD', //gray
    color2: '#8F83D9', //light purple /active
    color3: '#4C51C6', //dark purple / hover button
    color4: '#2E246C', //darkesr purple / pressed
    color5: '#', //bright blue
    color6: '#EB5757' //red error
};

const Space = [0, 2, 4, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96];

const Breakpoints = ['1024px', '1200px', '1440px'];

const boxShadow = [
  '2px 4px 8px 0px rgba(138,138,138,0.5)',
  '2px 2px 4px 0px rgba(0,127,175,1)'
];

const BaseTheme = {
    space: Space,
    fontSizes: Space,
    lineHeight: Space,
    boxShadow,
    borderRadius: Space,
    borderColor: colors,
    breakpoints: Breakpoints,
    colors: colors,
    fontFamily: {
      default: 'IBM Plex Mono',
      secondary: 'Furore'
    },
    variant: {
        buttons: {},
        buttonSize: ButtonSize,
        inputVariant: InputVariant
    }
}

BaseTheme.variant.buttons = ButtonVariant(BaseTheme);

export const StyledThemeProvider: any = ({ children }: any) => (
  <ThemeProvider theme={BaseTheme}>{children}</ThemeProvider>
);

export default StyledThemeProvider;
