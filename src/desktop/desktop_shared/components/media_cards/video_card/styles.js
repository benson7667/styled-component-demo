import styled from "styled-components";
import { Ellipsis } from "../../../../../shared/styles/CommonStyle";

export const VideoCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const VideoCoverImageWrapper = styled.div`
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-radius: 10px;

  & img {
    width: 100%;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
  }

  & video {
    z-index: 1;
    position: absolute;
    left: 0;
    width: 100%;
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
  font-size: 12px;
  font-weight: bold;
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
  font-size: 12px;
  margin-top: 4px;
  font-weight: 600;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.accentColor};
  }
`;
