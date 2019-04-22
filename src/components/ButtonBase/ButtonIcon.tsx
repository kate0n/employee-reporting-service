import React from 'react';

/** Components */
import {ButtonBase} from './/ButtonBase';
import {Flex} from '../Flex/Flex';
import {Box} from "../Box/Box";
import download from "../../assets/icons/download.svg";

const ButtonIcon = ({text}: any) =>

    <ButtonBase variant={"primary"}>
        <Flex
            justifyContent={"center"}
            alignItems={"center"}>

            <Box paddingRight={3}> {text} </Box>

            <img src={download}/>
        </Flex>
    </ButtonBase>

export default ButtonIcon;
