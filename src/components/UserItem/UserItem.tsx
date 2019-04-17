import React from 'react';
// import styled from 'styled-components';

/** Components */
import Box from "../Box/Box";
import Flex from "../Flex/Flex";

const UserItem  = ({item, avatar}:any) => (

    <Flex alignItems={"center"} marginBottom={5} marginLeft={4}>
        <img src={avatar} />
        <Box paddingLeft={4} wordWrap={"break-word"}> {item} </Box>
    </Flex>
)

export default UserItem;