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

import avatar from '../../assets/images/avatar.png';
import {text} from '../../assets/text';

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
                        <UserItem avatar={avatar} username={text.userName}/>

                        <MenuItem> {text.everydayReport} </MenuItem>

                        <DropDown> {text.annualReport} </DropDown>

                        <MenuItem> {text.expenses}  </MenuItem>

                        <DropDown> {text.object}</DropDown>

                        <DropDown> {text.objects} </DropDown>
                    </Box>

                    <LogOut children={text.logout}/>
                </StyledNavBar>
            </Fragment>
        )
    }
}

export default NavBar;