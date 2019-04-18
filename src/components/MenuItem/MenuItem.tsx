import React, {Component} from 'react';
import styled from 'styled-components';

/** Components */
import Box from "../Box/Box";

const MenuItemStyled = styled(Box)`
	width: 100%;
	height: 40px;
	padding: 8px 16px;
	margin: 8px 0;
	cursor: pointer;
	:hover {
	    background-color: #8F83D9
	}
`;

interface Props {
    item: string;
}
interface State {
    active: boolean;
}

export class MenuItem extends Component<Props, State> {
    // state = {
    //     backgroundColor: ""
    // }
    state = {
        active: false
    };

    toogleBackground = () => {
        this.setState( ({active}) =>{
            return {
                active: !active
            };
        });
    };

    render() {
        const { active } = this.state;
        let background = "";
        if (active) {
            background = "#4C51C6";
        } else { background = ""}
        return (

        <MenuItemStyled
            onClick={this.toogleBackground}
            backgroundColor={background}>
            {this.props.item} {this.props.children} </MenuItemStyled>
        )
    } }



export default MenuItem;