import React from "react";
import PropTypes from "prop-types";
import { NavLink ,Link } from "react-router-dom";

const Anchor = (props) => {
    return (
        <NavLink className="anchor inactive" activeClassName="active"  exact={true} to={props.to}>{props.content}</NavLink>
    );
}

Anchor.propTypes = {
    to: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}

export default Anchor;
