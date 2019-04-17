import styled from 'styled-components';
import {
	space,
	width,
	color,
	fontSize,
	height,
	border,
	opacity,
	maxWidth,
	minHeight,
	borderRadius,
	borderColor,
	borders,
	overflow,
	display,
	zIndex,
	SpaceProps,
	DisplayProps,
	MaxWidthProps,
	MinWidthProps,
	HeightProps,
	MinHeightProps,
	OverflowProps,
	OpacityProps,
	backgroundImage,
	position,
	fontWeight,
	top,
	left,
	textAlign,
	alignSelf,
} from 'styled-system';
import {FontFamilyProperty} from '../../styles/styleProperty/FontFamilyProperty';


export interface IBox extends SpaceProps, DisplayProps, MaxWidthProps, MinWidthProps, HeightProps, MinHeightProps, OverflowProps, OpacityProps {
	[propName: string]: any;
}

const lineHeight: any = (props: any) => {
	console.log(props);
	if (props.hasOwnProperty('lineHeight')) {
		return `line-height: ${props.theme.lineHeight[props.lineHeight]}px`
	}
	return '';
}


export const Box = styled.div < IBox > `
  box-sizing: border-box;
  
  ${display};
  ${space};
  ${width};
  ${maxWidth};
  ${height};
  ${minHeight};
  ${overflow};

  ${borderRadius};
  ${borderColor};
  ${borders};
  ${border};

  ${opacity};

  ${fontSize};
  ${FontFamilyProperty};
  ${fontWeight};
  ${color};
  ${lineHeight}

  ${backgroundImage};
  ${position};
  ${top};
  ${left};
  ${textAlign};
  ${zIndex};

  ${alignSelf};
`;

export default Box;
