import styled from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: ${(props) => (props.shape === "circle" ? "50%" : "4px")};
  border: none;
  background-color: transparent;
  transition: background-color 0.2s ease-in-out;

  & .button-text {
    margin-left: 4px;
    font-size: 14px;
    color: ${(props) => props.theme.daryGray2};
  }

  :hover {
    background-color: ${(props) => props.theme.lightGray1};
  }
`;

export const Text = styled.span``;
