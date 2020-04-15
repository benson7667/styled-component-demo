import React from "react";
import {
  FiHome,
  FiVideo,
  FiMonitor,
  FiMusic,
  FiBox,
  FiBook,
  FiBarChart,
  FiYoutube,
  FiAward,
  FiCoffee,
  FiStar,
  FiUser,
  FiMousePointer,
} from "react-icons/fi";

export const sideBarItems = [
  {
    icon: <FiHome size={15} />,
    text: "首页",
    url: "/",
  },
  {
    icon: <FiMonitor size={15} />,
    text: "电影",
    url: "/dianying",
  },
  {
    icon: <FiVideo size={15} />,
    text: "影视",
    url: "/yingshi",
  },

  { groupTitle: "特色频道" },

  {
    icon: <FiMusic size={15} />,
    text: "音樂",
  },
  {
    icon: <FiYoutube size={15} />,
    text: "游戏",
  },
  {
    icon: <FiCoffee size={15} />,
    text: "美食",
  },
  {
    icon: <FiAward size={15} />,
    text: "农人",
  },
  {
    icon: <FiBarChart size={15} />,
    text: "VLOG",
  },
  {
    icon: <FiBook size={15} />,
    text: "搞笑",
  },
  {
    icon: <FiBox size={15} />,
    text: "综艺",
  },
  {
    groupTitle: "我的",
  },
  {
    icon: <FiUser size={15} />,
    text: "关注动态",
  },
  {
    icon: <FiMousePointer size={15} />,
    text: "观看历史",
  },
  {
    icon: <FiStar size={15} />,
    text: "我的收藏",
  },
];

export const sideBarItemsCollapsed = [
  {
    icon: <FiHome size={15} />,
    text: "首页",
    url: "/",
  },
  {
    icon: <FiVideo size={15} />,
    text: "电影",
    url: "/dianying",
  },
  {
    icon: <FiMusic size={15} />,
    text: "电视剧",
    url: "/music",
  },
  {
    icon: <FiUser size={15} />,
    text: "关注动态",
  },
  {
    icon: <FiMousePointer size={15} />,
    text: "观看历史",
  },
  {
    icon: <FiStar size={15} />,
    text: "我的收藏",
  },
];
