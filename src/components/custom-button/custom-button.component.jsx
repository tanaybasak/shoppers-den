import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({children,isGoogleSignIn, inverted, ...otherItemProps}) => {
  return (
    <button className={`custom-button  ${isGoogleSignIn ? 'google-sign-in' : ''}${inverted ? 'inverted' : ''}`} {...otherItemProps}>
      {children}
    </button>
  );
};

export default CustomButton;
