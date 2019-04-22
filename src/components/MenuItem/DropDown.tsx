import React, {Component} from 'react';
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
}

interface State {
    active: boolean;
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
                    <SubItem marginBottom={5}>
                        {this.props.subitemFirst}
                    </SubItem>

                    <SubItem marginBottom={5}>
                        {this.props.subitemSecond}
                    </SubItem>
                </Box>

            </Box>
        )
    }
}

export default DropDown;