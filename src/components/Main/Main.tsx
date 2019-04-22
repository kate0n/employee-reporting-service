import React from 'react';
import styled from 'styled-components';

/** Components */
import {Flex} from '../Flex/Flex';

const StyledMain = styled(Flex)`
    padding: 24px;
    flex-direction: column;
    width: 85%;
    color: #333333;
    margin-left: 216px;
    @media(max-width: 992px) {
        width: 100%;
        margin-left: 0;
    }
`;


const Main = ({children}: any) => (
    <StyledMain>
        {children}
    </StyledMain>
);

export default Main;