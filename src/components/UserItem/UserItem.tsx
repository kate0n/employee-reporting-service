import React from 'react';
import styled from 'styled-components';

/** Components */
import Box from "../Box/Box";
import Flex from "../Flex/Flex";

const UserItemStyled = styled(Flex)`
	align-items: center;
    margin-bottom: 24px;
    margin-left: 16px
    @media(max-width: 992px) {
        margin-top: 32px;
    }
`;

const UserItem = ({avatar, username}: any) => (

    <UserItemStyled>

        <img src={avatar}/>

        <Box
            paddingLeft={4}
            wordWrap={"break-word"}>
            {username}
        </Box>

    </UserItemStyled>
)

export default UserItem;