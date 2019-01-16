import React from "react";
import "./ApiIcon.css";
import Settings from '@material-ui/icons/Settings';


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const ApiButton = props => (
    <span className="apiIcon" {...props}>
        <Settings className="cursor: pointer" />
    </span>
);

export default ApiButton;
