import React from "react";
import { number } from "prop-types";
import { AvatarCircleWrapper } from "./styles";

const AvatarCircle = (props) => {
  const { borderWidth, size, image } = props;
  return (
    <AvatarCircleWrapper borderWidth={borderWidth} size={size}>
      <img alt="" src={image} />
    </AvatarCircleWrapper>
  );
};

AvatarCircle.propTypes = {
  size: number,
};

AvatarCircle.defaultProps = {
  size: 100,
  borderWidth: 2,
};

export default AvatarCircle;
