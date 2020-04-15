import React from "react";
import {
  CatalogueSkeletonWrapper,
  ImageSkeleton,
  TextSkeleton,
} from "./styles";
import XiguaLogoGray from "../../../../../assets/logo/xigua-logo-gray.svg";

const CatalogueCardSkeleton = () => {
  return (
    <CatalogueSkeletonWrapper>
      <ImageSkeleton>
        <img alt="" src={XiguaLogoGray} />
      </ImageSkeleton>

      <TextSkeleton />
      <TextSkeleton width={90} />
    </CatalogueSkeletonWrapper>
  );
};

export default CatalogueCardSkeleton;
