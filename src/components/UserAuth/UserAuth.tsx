import React from 'react';
import styled from "styled-components";

/** Components */
import Box from '../Box/Box';
import Flex from '../Flex/Flex';

import AuthForm from './AuthForm';

const MainContainer = styled(Flex)`
        height: 100vh;
        justify-content: center;
        align-items: center;
        color: #333333;
        border: 1px solid #E9E9E9;
`;
const FormContainer = styled(Flex)`
	width: 296px;
    flex-direction: column;
    border: inherit;
`;
const FormHeader = styled(Flex)`
	height: 56px;
    width: 100%;
    background-color: #F9F9F9;
    border: inherit;
    justify-content: center;
    align-items: center;
`;
const InnerFormContainer = styled(Flex)`
	width: 100%;
	padding: 16px;
    flex-direction: column;
`;

const UserAuth = () => (
    <MainContainer>

        <FormContainer>
            <FormHeader> ВХОД </FormHeader>
            <InnerFormContainer>
                <AuthForm />
                <Box
                    paddingTop={3}
                    textAlign={"center"} >
                        Забыли пароль?
                </Box>
            </InnerFormContainer>
        </FormContainer>

    </MainContainer>
);

export default UserAuth;