import React, { Component } from "react";
import {
  Header,
  SideBar,
  ContentWrapper,
  GridView,
} from "../../desktop_shared/layouts";
import {
  VideoCard,
  VideoCardSkeleton,
} from "../../desktop_shared/components/media_cards/video_card";

class Videos extends Component {
  render() {
    return (
      <>
        <Header />
        <SideBar />
        <ContentWrapper>
          <h3 style={{ marginBottom: "25px" }}>影视</h3>

          <GridView colNumber={4} colMinWidth="160px" rowHeight="240px">
            {new Array(8).fill("").map((item, index) => (
              <VideoCard
                key={index}
                id={399290}
                coverImage="https://i.ytimg.com/vi/JMEY-obUvmw/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAGJZSVrCl2k-_4Kl0pLZjqSp9CFw"
                //thumbnailVideo="https://v3-tt.ixigua.com/f4248f22f2c8f1d5cb752a6cf82e3a77/5e946e8f/video/tos/cn/tos-cn-v-0000/59de72f418d4449bbfb3d5ea0f72f32e/?a=1768&br=0&bt=480&cr=0&cs=0&dr=0&ds=1&er=&l=202004132052110100140440780E130FBE&lr=&qs=13&rc=anVqdjs3a214czMzOGc8M0ApdTtpbDpzaHY6ZTMzOzpneWdvNWNmNG1icDRfLS01NGFzc2RvZHA1MWVncm0tLTJhNi06Yw%3D%3D&vl=&vr="
                duration={302}
                creator="科幻Fans布玛"
                creatorAvatar="https://p3.pstatp.com/large/ef40008c39119bef556"
                title="女子死后来到阴间，没想到死神是自己爸爸，当场就复活了"
                postedDate="2020-04-13T15:19:16.265Z"
                viewCount={8920}
              />
            ))}
          </GridView>
        </ContentWrapper>
      </>
    );
  }
}

export default Videos;
