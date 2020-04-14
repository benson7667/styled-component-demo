import React, { Component } from "react";
import { connect } from "react-redux";
import { Header, SideBar, ContentWrapper } from "../../desktop_shared/layouts";
import { Actions } from "./homeAction";

import SectionSuggest from "./section_suggest";
import SectionMovies from "./section_movies";
import SectionDramas from "./section_dramas";

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <SideBar />
        <ContentWrapper>
          <SectionSuggest />
          <SectionMovies />
          <SectionDramas />
        </ContentWrapper>
      </>
    );
  }
}

const mapDispatchToProps = {
  test: Actions.GET_HOME_FEED_REQUEST,
};

export default connect(null, mapDispatchToProps)(Home);
