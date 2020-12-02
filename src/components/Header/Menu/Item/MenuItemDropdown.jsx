import React from "react";
import {Dropdown, NavDropdown, NavItem} from "react-bootstrap";
import styles from "./MenuItem.module.css";

export default class MenuItem extends React.Component {

    state = {
        hover: false
    }

    style = {
        transition: "all 0.2s ease-in",
        color: "white"
    }

    showDropdown = () => this.state.hover ? null : this.setState({hover: true})
    hideDropdown = () => this.state.hover ? this.setState({hover: false}) : null
    toggleDropdown = () => this.state.hover ? this.hideDropdown() : this.showDropdown()

    dropdownLinks = this.props.drop.map((item, index, _) => (
        <Dropdown.Item style={this.style} key={index} href={item.ref} children={item.text}/>
    ))

    render() {
        return (
            <NavItem style={this.style} id={this.props.id} key={this.props.id} onClick={this.toggleDropdown} onMouseEnter={this.showDropdown} onMouseLeave={this.hideDropdown}>
                <NavDropdown className={styles.menuItem} style={this.style} title={this.props.text} onSelect={this.hideDropdown}>
                    {this.dropdownLinks}
                </NavDropdown>
            </NavItem>
        )
    }

}