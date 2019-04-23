import React, {Component} from 'react';
import styled from "styled-components";

/** Components */
import Box from '../Box/Box';
import MenuItem from '../MenuItem/MenuItem';
import arrowDown from "../../assets/icons/arrowDown.svg";
import {text} from '../../assets/text';

const SubItem = styled(Box)`
	width: 100%;
	height: 40px;
	padding: 8px 16px 8px 24px;
	margin: 8px 0;
	cursor: pointer;
	// color: #D3D3D3;
	font-size: 14px;
	:hover {
	    background-color: #8F83D9
	}
`;


interface State {
    active: boolean;
}

class ChildMenuItemList extends Component {
    render() {
        return text.child.map((subitem: any, index: any) => {
            return (
                <SubItem key={index} href={subitem.href}> {subitem.subitem} </SubItem>
            )
        })
    }
}

class DropDown extends Component<any, State> {
    state = {
        active: false
    }

    dropDown = () => {
        this.setState(({active}) => {
            return {
                active: !active
            };
        });
    };


    render() {
        return (
            <Box onClick={this.dropDown}>

                <MenuItem>
                    {this.props.children}
                    <img src={arrowDown}/>
                </MenuItem>

                <Box display={this.state.active ? 'block' : 'none'}>
                    <ChildMenuItemList/>
                </Box>

            </Box>
        )
    }
}

export default DropDown;