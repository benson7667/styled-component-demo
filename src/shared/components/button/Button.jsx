import React, { Component } from "react";
import { withTheme } from "styled-components";
import { any, func, number, object, string } from "prop-types";
import { PrimaryButton, SecondaryButton, LinkButton } from "./Styles";

class Button extends Component {
  render() {
    const {
      icon,
      iconColor,
      onClick,
      borderRadius,
      style,
      type,
      textSize,
      value,
    } = this.props;

    // gradient button
    if (type === "primary") {
      return (
        <PrimaryButton
          borderRadius={borderRadius}
          iconColor={iconColor}
          onClick={onClick}
          style={style}
          textSize={textSize}
          value={value}
        >
          {icon && <div className="button-icon">{icon}</div>}
          {value && <p>{value}</p>}
        </PrimaryButton>
      );
    }

    // normal button
    if (type === "secondary") {
      return (
        <SecondaryButton
          borderRadius={borderRadius}
          iconColor={iconColor}
          onClick={onClick}
          style={style}
          textSize={textSize}
          value={value}
        >
          {icon && <div className="button-icon">{icon}</div>}
          {value && <p>{value}</p>}
        </SecondaryButton>
      );
    }

    // link button
    if (type === "link") {
      return (
        <LinkButton
          borderRadius={borderRadius}
          iconColor={iconColor}
          onClick={onClick}
          style={{ ...style }}
          textSize={textSize}
          value={value}
        >
          {icon && <div className="button-icon">{icon}</div>}
          {value && <p>{value}</p>}
        </LinkButton>
      );
    }
  }
}

Button.propTypes = {
  icon: any,
  onClick: func.isRequired,
  style: object,
  type: string,
  value: string,
  textSize: number,
};

Button.defaultProps = {
  type: "secondary",
  textSize: 10,
  borderRadius: 50,
  iconColor: "#4a4a4a",
};

export default withTheme(Button);
