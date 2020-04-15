import styled from "styled-components";
import { Ellipsis } from "../../../../../shared/styles/CommonStyle";

//  VideoCard
export const VideoCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const VideoCoverImageWrapper = styled.div`
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  background-color: ${(props) => props.theme.lightGray1};
  height: 100%;

  & img {
    width: 100%;
    object-fit: cover;
    height: 100%;
    transition: transform 0.3s ease-in-out;
  }

  & video {
    opacity: 0;
    z-index: 1;
    position: absolute;
    left: 0;
    height: 100%;
    width: 100%;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

export const VideoDuration = styled.div`
  position: absolute;
  bottom: 8px;
  right: 10px;
  display: inline-block;
  padding: 3px 8px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.8);
  color: ${(props) => props.theme.white};
  font-size: 12px;
`;

export const VideoCreatorInfo = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: -12px;
  z-index: 1;
  padding: 0px 10px;
`;

export const CreatorName = styled(Ellipsis)`
  cursor: pointer;
  font-size: 13px;
  margin-left: 4px;
  padding-bottom: 2px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.accentColor};
  }
`;

export const VideoInfoWrapper = styled.div`
  margin-top: 4px;
`;

export const VideoTrafficWrapper = styled.div`
  font-size: 12px;
  color: ${(props) => props.theme.darkGray3};
  margin-top: 4px;
`;

export const VideoTitle = styled(Ellipsis)`
  cursor: pointer;
  font-size: 14px;
  margin-top: 4px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.accentColor};
  }
`;

// video card skeleton
export const VideoCardSkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const VideoCardImageSkeleton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: ${(props) => props.theme.lightGray1};
  border-radius: 10px;
  height: 100%;
  padding-top: 20%;
  padding-bottom: 20%;

  & img {
    width: 60%;
  }
`;

export const CreatorNameSkeleton = styled.div`
  width: 80px;
  height: 15px;
  margin-left: 10px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.lightGray1};
`;

export const TextSkeleton = styled.div`
  margin-top: 5px;
  background-color: ${(props) => props.theme.lightGray1};
  width: ${(props) => (props.width ? `${props.width}%` : "95%")};
  height: ${(props) => (props.height ? `${props.height}px` : "30px")};
  border-radius: 10px;
`;
