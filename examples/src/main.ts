import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Screen from "screen-view";

createApp(App).use(Screen).mount("#app");
