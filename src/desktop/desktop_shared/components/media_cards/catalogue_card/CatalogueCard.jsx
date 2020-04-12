import React, { Component } from "react";
import { func, number, oneOf, string } from "prop-types";
import { FiPlay, FiStar } from "react-icons/fi";

import { Ellipsis } from "../../../../../shared/styles/CommonStyle";
import { Button } from "../../../../../shared/components";
import {
  CatalogueCardWrapper,
  CatalogueImageWrapper,
  CatalogueTitle,
  CatalogueDescrip,
  CataloguePopContent,
  CataloguePopContentInfoWrapper,
  MovieTitleAndRatings,
  MovieAbout,
  MovieSynopsis,
  ActionBar,
} from "./Styles";

class CatalogueCard extends Component {
  render() {
    const {
      id,
      descrp,
      coverImage,
      handlePlayClick,
      handleSaveClick,
      infoImage,
      movieType,
      movieCasters,
      movieRatings,
      movieSynopsis,
      size,
      title,
    } = this.props;

    const parseMovieType = movieType.join(", ");
    const parseMovieCasters = movieCasters.join(", ");

    return (
      <CatalogueCardWrapper size={size}>
        <CatalogueImageWrapper>
          <picture>
            <img className="catalogue__image" alt="" src={coverImage} />
          </picture>
        </CatalogueImageWrapper>

        <CatalogueTitle>{title}</CatalogueTitle>
        <CatalogueDescrip>{descrp}</CatalogueDescrip>

        <CataloguePopContent>
          <img className="catalogue__info-image" alt="" src={infoImage} />

          <CataloguePopContentInfoWrapper>
            <MovieTitleAndRatings>
              <span>{title}</span>
              <span className="ratings">{movieRatings.toFixed(1.0)}</span>
            </MovieTitleAndRatings>

            <MovieAbout>
              <Ellipsis line={1}>
                <span className="movie-type">类型:</span>
                <span>{parseMovieType}</span>
              </Ellipsis>

              <Ellipsis line={1}>
                <span className="movie-caster">主演:</span>
                <span>{parseMovieCasters}</span>
              </Ellipsis>
            </MovieAbout>

            <MovieSynopsis size={size}>
              {/* <Ellipsis line={4}> */}
              <label>简介:</label>
              <p>{movieSynopsis}</p>
              {/* </Ellipsis> */}
            </MovieSynopsis>

            <ActionBar>
              <Button
                onClick={handlePlayClick(id)}
                value="立即观看"
                type="primary"
                icon={<FiPlay size={20} />}
              />

              <Button
                onClick={handleSaveClick(id)}
                value="收藏"
                type="link"
                icon={<FiStar size={20} />}
              />
            </ActionBar>
          </CataloguePopContentInfoWrapper>
        </CataloguePopContent>
      </CatalogueCardWrapper>
    );
  }
}

CatalogueCard.propTypes = {
  title: string.isRequired,
  descrp: string.isRequired,
  coverImage: string.isRequired,
  infoImage: string.isRequired,
  movieType: string.isRequired,
  movieCasters: string.isRequired,
  movieRatings: number,
  movieSynopsis: string.isRequired,
  handlePlayClick: func.isRequired,
  handleSaveClick: func.isRequired,
  size: oneOf(["fluid", "small", "medium", "large"]),
};

CatalogueCard.defaultProps = {
  size: "medium",
};

export default CatalogueCard;
