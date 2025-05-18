import DefaultTheme from "vitepress/dist/client/theme-default";
import { registerComponents } from "./register-components.js";
import "vitepress-theme-demoblock/theme/styles/index.css";
import ScreenView from "screen-view";
import "./style/index.less";

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    app.use(ScreenView);
    registerComponents(app);
  },
};
