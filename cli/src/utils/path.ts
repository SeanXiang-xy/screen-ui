import { resolve } from "path";
// 根目录
export const rootPath = resolve(__dirname, "../../../");
// screen-view
export const viewPath = resolve(rootPath, "./packages/screen-view");
// screen-view-src
export const compRootPath = resolve(viewPath, "./src/components");
// creen-view-src-index
export const compRootFilePath = resolve(compRootPath, "./index.ts");
// doc root
export const docPath = resolve(rootPath, "./packages/document");
// doc components
export const docCompPath = resolve(docPath, "./components");
// doc nav
export const docNavPath = resolve(docPath, "./.vitepress/sidebar");
