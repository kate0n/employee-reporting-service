import React from 'react';
// import styled from "styled-components";

/** Components */
import Box from '../Box/Box';
import Flex from '../Flex/Flex';

import AuthForm from './AuthForm';


const UserAuth = () => (
    <Flex
    maxWidth={"296px"}
    // margin={"0px auto"}
    color={"#333333"}
    flexDirection={"column"}
    alignItems={"center"}
    >
        <AuthForm />
        <Box py={5}> Забыли пароль? </Box>
    </Flex>
)
export default UserAuth;