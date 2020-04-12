import styled from "styled-components";

export const DefaultButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 10px;
  border: none;
  background-color: transparent;
  transition: background-color 0.2s ease-in-out;

  & .button-icon {
    color: ${(props) => props.iconColor};
    margin-right: ${(props) => (props.value ? "5px" : 0)};
  }

  & p {
    font-size: ${(props) => `${props.textSize}px`};
    color: ${(props) => props.theme.daryGray2};
  }
`;

export const PrimaryButton = styled(DefaultButton)`
  border-radius: ${(props) => `${props.borderRadius}px`};
  background-color: ${(props) => props.theme.primaryColor};
  background-image: ${(props) =>
    `linear-gradient(to right, ${props.theme.accentColor}, ${props.theme.primaryColor})`};

  & .button-icon {
    color: ${(props) => props.theme.white};
    margin-right: ${(props) => (props.value ? "5px" : 0)};
  }

  & p {
    color: ${(props) => props.theme.white};
  }

  &:hover {
    background-image: ${(props) =>
      `linear-gradient(to right, ${props.theme.accentColor}, ${props.theme.accentColor})`};
  }
`;

export const SecondaryButton = styled(DefaultButton)`
  border-radius: ${(props) => `${props.borderRadius}px`};
  background-color: transparent;
  transition: background-color 0.2s ease-in-out;

  & p {
    color: ${(props) => props.theme.daryGray2};
  }

  &:hover {
    background-color: ${(props) => props.theme.lightGray1};
  }
`;

export const LinkButton = styled(DefaultButton)`
  &:hover {
    & p {
      color: ${(props) => props.theme.primaryColor};
      font-weight: bold;
    }

    & .button-icon {
      color: ${(props) => props.theme.primaryColor};
    }
  }
`;
