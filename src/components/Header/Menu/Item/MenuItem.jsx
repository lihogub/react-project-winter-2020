import React from "react";
import {NavItem, NavLink} from "react-bootstrap";
import styles from "./MenuItem.module.css";
export default class MenuItem extends React.Component {
    state = {
        hover: false
    }

    style = {
        transition: "all 200ms ease-in",
        color: "white"
    }

    styleHover = {
        boxShadow: "0px 4px 0px 0px #F14D34"
    }

    onMouseEnter = () => this.state.hover ? null : this.setState({hover: true})
    onMouseLeave = () => this.state.hover ? this.setState({hover: false}) : null

    render() {
        return (
            <NavItem id={this.props.id} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                <NavLink href={this.props.href} className={styles.menuItem} style={this.state.hover ? {...this.style, ...this.styleHover} : this.style}>
                    {this.props.text}
                </NavLink>
            </NavItem>
        )
    }

}