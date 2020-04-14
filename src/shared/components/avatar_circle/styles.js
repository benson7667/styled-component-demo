import styled from "styled-components";

export const AvatarCircleWrapper = styled.div`
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  border-radius: ${(props) => `${props.size / 2}px`};
  overflow: hidden;
  background-color: ${(props) => props.theme.lightGray1};
  border: ${(props) => `${props.borderWidth}px solid ${props.theme.white} `};

  & img {
    cursor: pointer;
    width: 100%;
    object-fit: cover;
  }
`;
