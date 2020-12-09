import React from "react";
import {NavItem, NavLink} from "react-bootstrap";


export default class MenuItem extends React.Component {

    state = {
        hover: false
    }

    style = {
        transition: "200ms ease-in-out",
        color: "white",
        fontSize: "13px",
        fontWeight: 500
    }

    styleHover = {
        boxShadow: "0px 4px 0px 0px #F14D34"
    }

    hoverOn = () => this.state.hover ? null : this.setState({hover: true})
    hoverOff = () => this.state.hover ? this.setState({hover: false}) : null
    hoverToggle = () => this.state.hover ? this.hoverOff() : this.hoverOn()

    render() {
        const styleButton = (this.state.hover || this.props.isActive) ? {...this.style, ...this.styleHover} : this.style
        return (
            <NavItem id={this.props.id} onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}>
                <NavLink className="p-0 m-2" href={this.props.href} style={styleButton}>
                    {this.props.text}
                </NavLink>
            </NavItem>
        )
    }

}