import React, {Component, Fragment} from 'react';
import styled from 'styled-components';

/** Components */
import {Flex} from '../Flex/Flex';
import Box from "../Box/Box";
import UserItem from '../UserItem/UserItem';
import MenuItem from '../MenuItem/MenuItem';
import DropDown from '../MenuItem/DropDown';
import LogOut from '../LogOut/LogOut';
import BurgerIcon from '../../assets/icons/BurgerIcon';
import CloseBurger from '../../assets/icons/CloseBurger';

import {navBarConfig} from '../../assets/navBarConfig';

const StyledNavBar = styled(Flex)`
	width: 216px;
	min-height: 100vh;
	background-color: #333333;
	padding: 24px 8px;
    flex-direction: column;
    justify-content: space-between;
    line-height: 24px;
    position: fixed;
    z-index: 1;
    @media(max-width: 992px) {
        display: none;
    }
    @media(min-width: 992px) {
        display: flex;
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
        return (
            <Fragment>
                <Flex zIndex={"2"} position={"fixed"}
                      onClick={this.showNavBar}> {this.toggleBurger(this.state.isOpen)} </Flex>
                <StyledNavBar display={this.state.isOpen ? 'flex !important' : 'none '}>
                    <Box>
                        <UserItem avatar={navBarConfig.profile.avatar} username={navBarConfig.profile.userName}/>

                        <MenuItem> {navBarConfig.menu[0].title} </MenuItem>

                        <DropDown subLink={navBarConfig.menu[1].subLink}> {navBarConfig.menu[1].title} </DropDown>

                        <MenuItem> {navBarConfig.menu[2].title}  </MenuItem>

                        <DropDown subLink={navBarConfig.menu[3].subLink}> {navBarConfig.menu[3].title}</DropDown>

                        <DropDown subLink={navBarConfig.menu[4].subLink}> {navBarConfig.menu[4].title} </DropDown>
                    </Box>

                    <LogOut children={"Выйти"}/>
                </StyledNavBar>
            </Fragment>
        )
    }
}

export default NavBar;