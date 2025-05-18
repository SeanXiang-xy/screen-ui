import comp from "./sidebar";
import markdown from "./markdown";

export default {
  title: "screen-ui",
  markdown,
  themeConfig: {
    logo: "/logo.png",
    nav: [
      { text: "指南", link: "/guide/installation" },
      { text: "组件", link: "/components/baseDemo/" },
    ],
    socialLinks: [{ icon: "gitlab", link: "https://baidu.com" }],
    sidebar: {
      "/": [
        {
          text: "指南",
          children: [
            {
              text: "安装",
              link: "/guide/installation",
            },
            {
              text: "快速开始",
              link: "/guide/quickstart",
            },
          ],
        },
        ...comp,
      ],
    },
  },
};
