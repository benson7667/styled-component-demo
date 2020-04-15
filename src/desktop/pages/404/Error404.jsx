import React from "react";
import { Header, SideBar, ContentWrapper } from "../../desktop_shared/layouts";

const Error404 = (props) => (
  <>
    <Header />
    <SideBar />
    <ContentWrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          style={{ width: 300 }}
          alt="error-404"
          src="https://s3.pstatp.com/toutiao/xigua_video_web_pc/static/media/404.8b4a873b.png"
        />
        <div>
          <p style={{ marginBottom: 10 }}>
            404 非常抱歉！您查看的页面找不到了...
          </p>
          <p>您可以:</p>
          <p>1.检查网址输入是否正确</p>
          <p>2.前往首页查看更多内容</p>
        </div>
      </div>
    </ContentWrapper>
  </>
);

export default Error404;
