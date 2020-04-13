import React, { Component } from "react";
import styled from "styled-components";
import { Header, SideBar, ContentWrapper } from "../../desktop_shared/layouts";
import {
  VideoCard,
  VideoCardSkeleton,
} from "../../desktop_shared/components/media_cards/video_card";

const Grid = styled.div`
  display: grid;
  grid-column-gap: 10px;
  grid-row-gap: 50px;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
`;

class Videos extends Component {
  render() {
    return (
      <>
        <Header />
        <SideBar />
        <ContentWrapper>
          <h3 style={{ marginBottom: "25px" }}>影视</h3>

          <Grid>
            {new Array(10).fill("").map((item, index) => (
              <VideoCard
                key={index}
                id={399290}
                coverImage="https://lf6-xgcdn-tos.pstatp.com/img/tos-cn-i-0004/3512ee88401e47d4be07b1428c0dd1de~tplv-crop-center:1041:582.jpg"
                thumbnailVideo="https://v3-tt.ixigua.com/f4248f22f2c8f1d5cb752a6cf82e3a77/5e946e8f/video/tos/cn/tos-cn-v-0000/59de72f418d4449bbfb3d5ea0f72f32e/?a=1768&br=0&bt=480&cr=0&cs=0&dr=0&ds=1&er=&l=202004132052110100140440780E130FBE&lr=&qs=13&rc=anVqdjs3a214czMzOGc8M0ApdTtpbDpzaHY6ZTMzOzpneWdvNWNmNG1icDRfLS01NGFzc2RvZHA1MWVncm0tLTJhNi06Yw%3D%3D&vl=&vr="
                duration={302}
                creator="科幻Fans布玛"
                creatorAvatar="https://p3.pstatp.com/large/ef40008c39119bef556"
                title="女子死后来到阴间，没想到死神是自己爸爸，当场就复活了"
                postedDate="2020-04-13T15:19:16.265Z"
                viewCount={8920}
              />
            ))}
          </Grid>
        </ContentWrapper>
      </>
    );
  }
}

export default Videos;
