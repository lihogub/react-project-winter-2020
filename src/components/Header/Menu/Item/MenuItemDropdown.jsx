import React from "react";
import {Dropdown, NavDropdown, NavItem} from "react-bootstrap";


export default class MenuItem extends React.Component {

    state = {
        hover: false
    }

    style = {
        transition: "all 0.2s ease-in",
        color: "white",
        fontSize: "13px"
    }

    showDropdown = () => this.state.hover ? null : this.setState({hover: true})
    hideDropdown = () => this.state.hover ? this.setState({hover: false}) : null
    toggleDropdown = () => this.state.hover ? this.hideDropdown() : this.showDropdown()

    dropdownLinks = this.props.drop.map(
        (item, index, _) => <Dropdown.Item style={this.style} key={index} href={item.ref} children={item.text}/>
    )

    render() {
        return (
            <NavItem id={this.props.id} key={this.props.id} style={this.style}
                     onClick={this.toggleDropdown} onMouseEnter={this.showDropdown} onMouseLeave={this.hideDropdown}>
                <NavDropdown children={this.dropdownLinks} onSelect={this.hideDropdown}
                             show={this.state.hover} style={this.style} title={this.props.text}/>
            </NavItem>
        )
    }

}