import React, { Component } from "react";
import { any, func, object, string } from "prop-types";
import { StyledButton } from "./Styles";

class Button extends Component {
  render() {
    const { icon, onClick, shape, size, style, value } = this.props;

    return (
      <StyledButton onClick={onClick} size={size} style={style} shape={shape}>
        {icon}
        {value && <p className="button-text">{value}</p>}
      </StyledButton>
    );
  }
}

Button.propTypes = {
  icon: any,
  onClick: func.isRequired,
  shape: string,
  style: object,
  value: string,
};

export default Button;
