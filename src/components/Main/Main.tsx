import React from 'react';

/** Components */
import {Flex} from '../Flex/Flex';

const Main = ( {children}:any ) => (
        <Flex
            py={5}
            px={5}
            flexDirection={"column"}
            width={"85%"}
            color={"#333333"}
            marginLeft={"216px"}
        >
            {children}

        </Flex>
)

export default Main;