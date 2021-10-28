import React from "react";

import "./custom-button.styles.scss";
// import { CustomButtonContainer } from "./custom-button.styles";

const CustomButton = ({ children, ...props }) => (
  <div {...props}>{children}</div>
);

export default CustomButton;
