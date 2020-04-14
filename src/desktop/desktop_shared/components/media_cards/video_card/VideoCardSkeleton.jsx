import React from "react";
import XiguaLogoGray from "../../../../../assets/logo/xigua-logo-gray.svg";
import {
  VideoCardSkeletonWrapper,
  VideoCardImageSkeleton,
  VideoCreatorInfo,
  CreatorNameSkeleton,
  VideoInfoWrapper,
  TextSkeleton,
} from "./styles";
import { AvatarCircle } from "../../../../../shared/components/avatar_circle";

const VideoCardSkeleton = (props) => (
  <VideoCardSkeletonWrapper>
    <VideoCardImageSkeleton>
      <img alt="" src={XiguaLogoGray} />
    </VideoCardImageSkeleton>

    <VideoCreatorInfo>
      <AvatarCircle size={40} />
      <CreatorNameSkeleton />
    </VideoCreatorInfo>

    <VideoInfoWrapper>
      <TextSkeleton />
      <TextSkeleton width={60} height={15} />
    </VideoInfoWrapper>
  </VideoCardSkeletonWrapper>
);

export default VideoCardSkeleton;
