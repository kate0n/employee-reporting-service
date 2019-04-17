import React from 'react';
import styled from 'styled-components';

/** Components */
import {Flex} from '../Flex/Flex';
import {Box} from '../Box/Box';
import { ButtonBase } from '../ButtonBase/ButtonBase';
import download from '../../assets/icons/download.svg';
import {text} from '../../assets/text';

const TableHeaderStyled = styled(Flex)`
	width: 100%;
	height: 48px;
	box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.08);
	padding: 8px 40px;
	margin-bottom: 24px;
    justify-content: space-between;
    font-size: 24px;
    line-height: 32px;
    color: #333333;
`;

const TableHeader  = () =>
    <TableHeaderStyled>
        <Flex> {text.everydayReport} </Flex>

        <ButtonBase variant={"default"}>
            <Flex justifyContent={"center"}>
            <Box marginRight={3}> Экспорт </Box>
            <img src={download} />
            </Flex>
        </ButtonBase>

    </TableHeaderStyled>

export default TableHeader;