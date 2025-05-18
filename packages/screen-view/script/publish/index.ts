import { rootPath } from "../utils/paths";
import run from "../utils/run";
import { resolve } from "path";
import { writeFileSync } from "fs-extra";

// 升级版本
export const addVersion = async () => {
  await run("pnpm version patch", resolve(__dirname, "./pkg"));
};
// dist 添加package.json
export const setPackageJson = async () => {
  const depData = require(`${rootPath}/package.json`).dependencies;
  const pkgInfo = require("./pkg/package.json");
  pkgInfo.dependencies = depData;
  const filecode = JSON.stringify(pkgInfo, null, 2).replaceAll(
    "workspace:",
    ""
  );
  const filePath = resolve(rootPath, "./dist/package.json");
  writeFileSync(filePath, filecode);
};
//发布组件
export const publish = async () => {
  //在dist下执行发布命令
  await run("npm publish --access=public", `${rootPath}/dist`);
};
