import React, { Component } from "react";
import { string, number } from "prop-types";
import {
  VideoCardWrapper,
  VideoCoverImageWrapper,
  VideoDuration,
  VideoCreatorInfo,
  CreatorName,
  VideoInfoWrapper,
  VideoTrafficWrapper,
  VideoTitle,
} from "./styles";
import { AvatarCircle } from "../../../../../shared/components";
import { convertSecondsToDuration } from "../../../../../shared/utils/time";
import { getDurationAgo } from "../../../../../shared/utils/date";

class VideoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVideoPlaying: false,
    };
  }

  handlePlayVideo = () => {
    this.setState({ isVideoPlaying: true });
  };

  handleRemoveVideo = () => {
    this.setState({ isVideoPlaying: false });
  };

  render() {
    const { isVideoPlaying } = this.state;
    const {
      id,
      coverImage,
      creatorAvatar,
      thumbnailVideo,
      duration,
      creator,
      title,
      postedDate,
      viewCount,
    } = this.props;

    return (
      <VideoCardWrapper>
        <VideoCoverImageWrapper
          onMouseLeave={this.handleRemoveVideo}
          onMouseEnter={this.handlePlayVideo}
        >
          <img alt="" src={coverImage} />

          {isVideoPlaying && thumbnailVideo && (
            <video controls={false} autoPlay loop>
              <source src={thumbnailVideo} />
            </video>
          )}

          <VideoDuration>{convertSecondsToDuration(duration)}</VideoDuration>
        </VideoCoverImageWrapper>

        <VideoCreatorInfo>
          <AvatarCircle size={40} image={creatorAvatar} />
          <CreatorName line={1}>{creator}</CreatorName>
        </VideoCreatorInfo>

        <VideoInfoWrapper>
          <VideoTitle line={2}>{title}</VideoTitle>

          <VideoTrafficWrapper>
            <span>{viewCount}次观看</span>
            <span> · </span>
            <span>{getDurationAgo(postedDate, "zh-cn")}</span>
          </VideoTrafficWrapper>
        </VideoInfoWrapper>
      </VideoCardWrapper>
    );
  }
}

VideoCard.propTypes = {
  id: number,
  coverImage: string,
  creatorAvatar: string,
  thumbnailVideo: string,
  duration: number,
  creator: string,
  title: string,
  postedDate: string,
  viewCount: number,
};

export default VideoCard;
