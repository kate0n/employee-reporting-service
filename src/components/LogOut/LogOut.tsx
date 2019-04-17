import React from 'react';
import styled from 'styled-components';

/** Components */
import Box from "../Box/Box";

const LogOutStyled = styled(Box)`
	width: 100%;
	height: 40px;
	padding: 8px 16px;
	margin: 8px 0;
	cursor: pointer;
	:hover {
	    color: #8F83D9;
	}
`;

const LogOut  = ({item}:any) => (

    <LogOutStyled> {item} </LogOutStyled>
)

export default LogOut;