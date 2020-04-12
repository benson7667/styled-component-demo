import React from "react";
import styled from "styled-components";
import { Header, SideBar, AppContent } from "../../desktop_shared/layouts";

const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, minmax(220px, 1fr));
  /* grid-template-rows: minmax(200px, auto); */
`;

const Card = styled.div`
  background-color: lightblue;
  border-radius: 40px;
  overflow: hidden;

  & img {
    width: 100%;
    object-fit: cover;
  }
`;

const Home = () => {
  return (
    <>
      <Header />

      <SideBar />

      <AppContent>
        <h2 style={{ marginBottom: "10px" }}>为你推荐</h2>

        <Grid>
          <Card size="fluid">
            <picture>
              <img
                alt=""
                src="https://lf3-xgcdn-tos.pstatp.com/img/xigua-lvideo-pic/04b6cd50643937da04d5a5698c920324~tplv-crop-center:861:1203.jpg"
              />
            </picture>
          </Card>
        </Grid>
      </AppContent>
    </>
  );
};

export default Home;
