import React, { Component } from "react";
import { SectionWrapper, GridView } from "../../../desktop_shared/layouts";
import {
  VideoCard,
  // VideoCardSkeleton,
} from "../../../desktop_shared/components/media_cards/video_card";

class SectionDramas extends Component {
  handlePlayClick = (id) => () => {
    console.log("Play ID: ", id);
  };

  handleSaveClick = (id) => () => {
    console.log("Save ID: ", id);
  };

  handleVideoCardClick = (id) => () => {
    console.log(id);
  };

  render() {
    return (
      <SectionWrapper title="电视剧" hasMore>
        <GridView colNumber={4} colMinWidth="160px" rowHeight="240px">
          {[1, 2, 3, 4].map((item) => (
            <VideoCard
              key={item}
              id={399290}
              coverImage="https://lf6-xgcdn-tos.pstatp.com/img/tos-cn-i-0004/3512ee88401e47d4be07b1428c0dd1de~tplv-crop-center:1041:582.jpg"
              //thumbnailVideo="https://v3-tt.ixigua.com/8314b3c5b09499065ee16ea0cf9dbf54/5e958c20/video/tos/cn/tos-cn-v-0000/cfcd0c1cbf024f6fb54f5917f3508a7d/?a=1768&br=0&bt=466&cr=0&cs=0&dr=0&ds=1&er=&l=202004141710370100140440790E661206&lr=&qs=13&rc=anNnd3FoOm9pczMzZmc8M0Apb3E2Njg4ajQ7ZTMzOTpneWdpazAwMjJkLjVfLS0zNGFzc2RtYXFrYjRpY20tLWBhNi06Yw%3D%3D&vl=&vr="
              duration={302}
              creator="科幻Fans布玛"
              creatorAvatar="https://p3.pstatp.com/large/ef40008c39119bef556"
              title="女子死后来到阴间，没想到死神是自己爸爸，当场就复活了"
              postedDate="2020-04-13T15:19:16.265Z"
              viewCount={8920}
            />
          ))}
        </GridView>
      </SectionWrapper>
    );
  }
}

export default SectionDramas;
