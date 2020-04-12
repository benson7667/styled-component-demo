import styled from "styled-components";

export const SearchBarWrapper = styled.div`
  display: flex;
`;

export const SearchInput = styled.input`
  width: 100%;
  border: ${(props) => `2px solid ${props.theme.accentColor}`};
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  padding: 14px;
  padding-left: 20px;
  font-size: 12px;
  caret-color: ${(props) => props.theme.primaryColor};
  ::placeholder {
    color: "yellow";
  }
`;

export const SearchButton = styled.button`
  cursor: pointer;
  min-width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  padding: 10px 20px 10px;
  color: white;
  background-color: ${(props) => props.theme.accentColor};
  background-image: ${(props) =>
    `linear-gradient(to right, ${props.theme.accentColor}, ${props.theme.primaryColor})`};
  transition: all 0.4s ease-in-out;

  & p {
    margin-left: 4px;
    font-size: 14px;
  }

  :hover {
    background-image: none;
  }
`;
