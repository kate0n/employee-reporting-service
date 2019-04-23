import React from 'react';
import styled from 'styled-components';

/** Components */
import Box from "../Box/Box";

const MenuItemStyled = styled(Box)`
	width: 100%;
	height: 40px;
	padding: 8px 16px;
	margin: 8px 0;
	cursor: pointer;
	:hover {
	    background-color: #8F83D9
	}
`;

const MenuItem = ({children}: any) => (
    <MenuItemStyled>
        {children}
    </MenuItemStyled>
);

export default MenuItem;