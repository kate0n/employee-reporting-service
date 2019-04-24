import React, {Component} from 'react';
import styled from "styled-components";

/** Components */
import Box from '../Box/Box';
import MenuItem from '../MenuItem/MenuItem';
import arrowDown from "../../assets/icons/arrowDown.svg";

const SubLink = styled(Box)`
	width: 100%;
	height: 40px;
	padding: 8px 16px 8px 24px;
	margin: 8px 0;
	cursor: pointer;
	font-size: 14px;
	:hover {
	    background-color: #8F83D9
	}
`;


interface State {
    active: boolean;
}

interface Props {
    subLink: any;
}

class ChildMenuItemList extends Component<Props> {
    render() {
        let subLink = this.props.subLink;
        return subLink.map((sublink: any, index: any) => {
            return (
                <SubLink key={index} href={sublink.link}> {sublink.title} </SubLink>
            )
        })
    }
}

class DropDown extends Component<Props, State> {
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
                    <ChildMenuItemList subLink={this.props.subLink}/>
                </Box>

            </Box>
        )
    }
}

export default DropDown;