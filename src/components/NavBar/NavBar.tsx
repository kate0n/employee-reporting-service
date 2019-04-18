import React, {Component} from 'react';
import styled from 'styled-components';
// import { Sidebar } from 'react-responsive-sidebar';

/** Components */
import {Flex} from '../Flex/Flex';
import Box from "../Box/Box";
import UserItem from '../UserItem/UserItem';
import MenuItem from '../MenuItem/MenuItem';
import DropDown from '../MenuItem/DropDown';
import LogOut from '../LogOut/LogOut';

import avatar from '../../assets/images/avatar.png';
import {text} from '../../assets/text';
// import arrowDown from '../../assets/icons/arrowDown.svg';

const StyledNavBar = styled(Flex)`
	width: 216px;
	min-height: 100vh;
	background-color: #333333;
	padding: 24px 8px;
    flex-direction: column;
    justify-content: space-between;
    line-height: 24px;
    position: fixed;
`;

export class NavBar extends Component {
    render() {
        return(
            <StyledNavBar>
                <Box>
                    <UserItem item={text.userName}  avatar={avatar}/>

                    <MenuItem
                        item={text.everydayReport} />
                    <DropDown
                        item={text.annualReport.item}
                        subitemFirst={text.annualReport.first}
                        subitemSecond={text.annualReport.second}
                    />
                    <MenuItem
                        item={text.expenses}
                    />
                    <DropDown
                        item={text.object.item}
                        subitemFirst={text.object.first}
                        subitemSecond={text.object.second}
                    />
                    <DropDown
                        item={text.objects.item}
                        subitemFirst={text.objects.first}
                        subitemSecond={text.objects.second}
                    />
                </Box>

                <LogOut item={text.logout} />
            </StyledNavBar>
        )
    }
}
export default NavBar;