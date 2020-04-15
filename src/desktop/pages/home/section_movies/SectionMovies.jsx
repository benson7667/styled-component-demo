import React, { Component } from "react";
import { SectionWrapper, GridView } from "../../../desktop_shared/layouts";
import {
  CatalogueCard,
  CatalogueCardSkeleton,
} from "../../../desktop_shared/components/media_cards/catalogue_card";

class SectionMovies extends Component {
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
      <SectionWrapper title="电影" hasMore>
        <GridView colNumber={5} colMinWidth="160px">
          {[1, 2, 3, 4, 5].map((item) => (
            <CatalogueCard
              key={item}
              id={808080}
              title="老豆唔怕多"
              descrp="刘德华刘若英舍命护宝强"
              coverImage="https://lf3-xgcdn-tos.pstatp.com/img/xigua-lvideo-pic/04b6cd50643937da04d5a5698c920324~tplv-crop-center:861:1203.jpg"
              infoImage="https://lf1-xgcdn-tos.pstatp.com/img/xigua-lvideo-pic/5f709fc9f8dd19e0bf6f732e6d8829a9~tplv-noop.webp"
              handlePlayClick={this.handlePlayClick}
              handleSaveClick={this.handleSaveClick}
              movieRatings={8.0}
              movieType={["电影", "1994", "犯罪", "动作"]}
              movieCasters={["刘德华", "陈少霞", "刘松仁", "刘松仁2"]}
              movieSynopsis="该片以三十年代的上海为背景，讲述了张一鹏身上的故事。
          张一鹏留学归国后，他被任命为上海市禁烟行动的第一专员。新官上任三把火，短期内他便展开一系列动作，以示权威。
          署长和毒枭大佬是拜把兄弟，两人一起进行非法交易，见数次向张行贿无果，他们发毒誓要让张生不如死"
              size="fluid"
            />
          ))}

          {[1, 2, 3, 4, 5].map((item) => (
            <CatalogueCardSkeleton />
          ))}
        </GridView>
      </SectionWrapper>
    );
  }
}

export default SectionMovies;
