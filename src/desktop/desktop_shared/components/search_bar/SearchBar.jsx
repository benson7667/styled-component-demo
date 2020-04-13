import React, { Component } from "react";

import { FiSearch } from "react-icons/fi";
import { SearchBarWrapper, SearchInput, SearchButton } from "./styles";

class SearchBar extends Component {
  render() {
    return (
      <SearchBarWrapper>
        <SearchInput />
        <SearchButton>
          <FiSearch size={20} />
          <p>搜寻</p>
        </SearchButton>
      </SearchBarWrapper>
    );
  }
}

export default SearchBar;
