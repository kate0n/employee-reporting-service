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

export class MenuItem extends Component<Props> {
    state = {
        backgroundColor: ""
    }
    toogleBackground = () => {
        this.setState( { backgroundColor: "#4C51C6" } );
    }
    render() {
        return (

        <MenuItemStyled onClick={this.toogleBackground}
            backgroundColor={this.state.backgroundColor}>
            {this.props.item} {this.props.children} </MenuItemStyled>
        )
    }
}

// const MenuItem  = ({item, children, backgroundColor, onClick}:any) =>
//     <MenuItemStyled backgroundColor={backgroundColor} onClick={onClick}> {item} {children} </MenuItemStyled>

export default MenuItem;