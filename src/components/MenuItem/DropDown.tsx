import React, { Component } from 'react';
import styled from "styled-components";

/** Components */
import Box from '../Box/Box';
import MenuItem from '../MenuItem/MenuItem';
import arrowDown from "../../assets/icons/arrowDown.svg";

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

interface Props {
    subitemFirst: string;
    subitemSecond: string;
    item: string;
}

class DropDown extends Component<Props>{
    state = {
        display: "none"
    }
    dropDown = () => {
        if (this.state.display === "none"){
            this.setState({ display: "block" })
        }  else if (this.state.display === "block") {
            this.setState({ display: "none" })
        }
    }

    render() {
        return(
            <Box  onClick={this.dropDown}>
            <MenuItem item={this.props.item}>
                <img src={arrowDown}  />
            </MenuItem>

            <SubItem display={this.state.display} marginTop={5}>
            {this.props.subitemFirst}
            </SubItem>
                <SubItem display={this.state.display} marginTop={5}>
                    {this.props.subitemSecond}
                </SubItem>
            </Box>
        )
    }
}

export default DropDown;