import React, {Component, Fragment} from 'react';
import styled from 'styled-components';

/** Components */
import {Flex} from '../Flex/Flex';
import Box from "../Box/Box";
import UserItem from '../UserItem/UserItem';
import MenuItem from '../MenuItem/MenuItem';
import DropDown from '../MenuItem/DropDown';
import LogOut from '../LogOut/LogOut';

import avatar from '../../assets/images/avatar.png';
import BurgerIcon from '../../assets/icons/BurgerIcon';
import CloseBurger from '../../assets/icons/CloseBurger';
import {text} from '../../assets/text';

const StyledNavBar = styled(Flex)`
	width: 216px;
	min-height: 100vh;
	background-color: #333333;
	padding: 56px 8px 24px 8px;
    flex-direction: column;
    justify-content: space-between;
    line-height: 24px;
    position: fixed;
    z-index: 1;
    @media(min-width: 992px) {
        display: none;
    }
`;

interface State {
    isOpen: boolean;
}

export class NavBar extends Component<any, State> {
    state = {
        isOpen: false
    }

    showNavBar = () => {
        this.setState(({isOpen}) => {
            return {
                isOpen: !isOpen
            };
        });
    };

    toggleBurger = (isOpen: boolean) => isOpen ? <CloseBurger/> : <BurgerIcon/>;

    render() {
        return (<Fragment>
                <Box position={"fixed"} zIndex={"2"} margin={"0 0 16px 0"}
                     onClick={this.showNavBar}> {this.toggleBurger(this.state.isOpen)} </Box>
                <StyledNavBar display={this.state.isOpen ? 'block' : 'none !important'}>
                    <Box>
                        <UserItem avatar={avatar} username={text.userName}/>

                        <MenuItem> {text.everydayReport} </MenuItem>

                        <DropDown
                            subitemFirst={text.annualReport.first}
                            subitemSecond={text.annualReport.second}>
                            {text.annualReport.item}
                        </DropDown>

                        <MenuItem> {text.expenses}  </MenuItem>

                        <DropDown
                            subitemFirst={text.object.first}
                            subitemSecond={text.object.second}>
                            {text.object.item}
                        </DropDown>

                        <DropDown
                            subitemFirst={text.objects.first}
                            subitemSecond={text.objects.second}>
                            {text.objects.item}
                        </DropDown>
                    </Box>

                    <LogOut children={text.logout}/>
                </StyledNavBar>
            </Fragment>
        )
    }
}

export default NavBar;