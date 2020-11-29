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

    showDropdown = () => this.setState({hover: true})
    hideDropdown = () => this.setState({hover: false})
    toggleDropdown = () => this.state.hover ? this.hideDropdown() : this.showDropdown()

    dropdownLinks = this.props.drop.map((item, index, _) => (
        <Dropdown.Item style={this.style} key={index} href={item.ref} children={item.text}/>
    ))

    render() {
        return (
            <NavItem id={this.props.id} key={this.props.id} onClick={this.toggleDropdown} onMouseEnter={this.showDropdown} onMouseLeave={this.hideDropdown}>
                <NavDropdown title={this.props.text} onSelect={this.hideDropdown} show={this.state.hover}>
                    {this.dropdownLinks}
                </NavDropdown>
            </NavItem>
        )
    }

}