import React from "react";
import "./DeleteBtn.css";
import DeleteForever from '@material-ui/icons/DeleteForever';


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const DeleteBtn = props => (
  <span className="delete-btn" {...props}>
<DeleteForever className="cursor: pointer" />
  </span>
);

export default DeleteBtn;
