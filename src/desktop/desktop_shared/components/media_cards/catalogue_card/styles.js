import styled from "styled-components";
import { Ellipsis } from "../../../../../shared/styles/CommonStyle";

export const CatalogueImageWrapper = styled.div`
  background-color: lightblue;
  border-radius: 10px;
  overflow: hidden;

  & picture img {
    width: 100%;
    overflow: hidden;
  }
`;

export const CatalogueTitle = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin-top: 8px;
  color: ${(props) => props.theme.darkGray2};
`;

export const CatalogueDescrip = styled.p`
  font-size: 12px;
  margin-top: 5px;
  color: ${(props) => props.theme.darkGray3};
`;

export const CataloguePopContent = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  opacity: 0;
  z-index: -1;
  transform: scale(0.8);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  font-size: 10px;
  color: ${(props) => props.theme.darkGray3};
  overflow: hidden;
  background-color: ${(props) => props.theme.white};
  box-shadow: ${(props) => props.theme.shadow1};
  transition: opacity 0.15s linear, transform 0.15s linear, z-index 0.15s linear;

  img {
    width: 100%;
    height: 35%;
    object-fit: cover;
  }
`;

export const CatalogueCardWrapper = styled.div`
  cursor: pointer;
  position: relative;
  width: ${(props) => {
    if (props.size === "small") return "220px";
    if (props.size === "medium") return "280px";
    if (props.size === "large") return "320px";
    return "auto";
  }};

  :hover ${CataloguePopContent} {
    opacity: 1;
    z-index: 1;
    transform: scale(1.1);
  }
`;

export const CataloguePopContentInfoWrapper = styled.div`
  flex: 1;
  position: relative;
  padding: 15px;
`;

export const MovieTitleAndRatings = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.darkGray2};

  & .ratings {
    color: ${(props) => props.theme.orange};
  }
`;

export const MovieAbout = styled.div`
  margin-top: 4px;

  & .movie-type,
  & .movie-caster {
    color: ${(props) => props.theme.darkGray4};
    margin-right: 4px;
  }
`;

export const MovieSynopsis = styled(Ellipsis)`
  margin-top: 10px;

  @media screen and (max-width: 1920px) {
    -webkit-line-clamp: ${(props) => props.size === "fluid" && 6};
  }

  @media screen and (max-width: 1700px) {
    -webkit-line-clamp: ${(props) => props.size === "fluid" && 3};
  }

  @media screen and (max-width: 1024px) {
    display: ${(props) => props.size === "fluid" && "none"};
  }

  -webkit-line-clamp: ${(props) => {
    if (props.size === "small") return 3;
    if (props.size === "medium") return 8;
    if (props.size === "large") return 9;
  }};

  & label {
    color: ${(props) => props.theme.darkGray4};
    margin-right: 4px;
  }
`;

export const ActionBar = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1024px) {
    padding: 10px;
  }
`;

export const CatalogueSkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageSkeleton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  height: 100%;
  overflow: hidden;
  background-color: ${(props) => props.theme.lightGray1};

  & img {
    width: 80%;
  }
`;

export const TextSkeleton = styled.div`
  width: ${(props) => (props.width ? `${props.width}%` : "70%")};
  height: 20px;
  margin-top: 5px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.lightGray1};
`;
