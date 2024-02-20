import React from "react";
import PropTypes from "prop-types";


/* @props
    href = string //? indica rutas
    content = string //? contenido del link
*/

const Anchor = (props) => {

    return (
        <a className="anchor" href={props.href}>{props.content}</a>
    )
}

Anchor.propTypes = {
    href : PropTypes.string.isRequired,
    content : PropTypes.string.isRequired
}

export default Anchor;