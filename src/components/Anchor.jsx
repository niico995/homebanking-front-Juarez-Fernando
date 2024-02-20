import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Anchor = (props) => {
    return (
        <Link className="anchor" to={props.to}>{props.content}</Link>
    );
}

Anchor.propTypes = {
    to: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}

export default Anchor;
