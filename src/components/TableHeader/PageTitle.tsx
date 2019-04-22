import React from 'react';
import styled from 'styled-components';

/** Components */
import {Flex} from '../Flex/Flex';
// import {Box} from '../Box/Box';

const TableHeaderStyled = styled(Flex)`
	width: 100%;
	height: 48px;
	box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.08);
	padding: 8px 32px;
	margin-bottom: 24px;
    justify-content: space-between;
    align-items: center;
    font-size: 24px;
    line-height: 32px;
    color: #333333;
    @media(max-width: 768px) {
        font-size: 18px;
        line-height: 26px;
        height: 88px;
    }
    @media(max-width: 992px) {
        width: 100%;
        margin-top: 32px;
    }
`;

const PageTitle = ({title, children}: any) =>
    <TableHeaderStyled>

        <Flex marginLeft={3} marginRight={3}>
            {title}
        </Flex>

        <Flex flexWrap={"wrap"}> {children} </Flex>

    </TableHeaderStyled>

export default PageTitle;