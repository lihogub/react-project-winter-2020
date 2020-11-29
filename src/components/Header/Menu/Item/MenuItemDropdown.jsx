import React from "react";
import {Dropdown, NavDropdown, NavItem} from "react-bootstrap";

export default class MenuItem extends React.Component {

    state = {
        hover: false
    }

    style = {
        transition: "all 0.2s ease-in",
        color: "white"
    }

    onMouseEnter = () => this.setState({hover: true})
    onMouseLeave = () => this.setState({hover: false})

    dropdownLinks = this.props.drop.map((item, index, _) => (
        <Dropdown.Item style={this.style} key={index} href={item.ref} children={item.text}/>
    ))

    render() {
        return (
            <NavItem key={this.props.key} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                <NavDropdown title={this.props.text} show={this.state.hover}>
                    {this.dropdownLinks}
                </NavDropdown>
            </NavItem>
        )
    }

}