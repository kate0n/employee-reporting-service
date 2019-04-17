import React from 'react';

/** Components */
import {Flex} from '../Flex/Flex';
// import Box from "../Box/Box";

const ContentContainer  = ({children}:any ) =>
    <Flex
        width={'100%'}
    >
            {children}
    </Flex>

export default ContentContainer;