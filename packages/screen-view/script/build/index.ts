import { src, dest } from "gulp";
import { rootPath } from "../utils/paths";
import less from "gulp-less";
import autoprefixer from "gulp-autoprefixer";
import run from "../utils/run";
import { readFileSync } from "fs-extra";
import { resolve } from "path";
import { setGlobalFile } from "./file";

//删除dist
export const removeDist = () => {
  return run(`rm -rf ${rootPath}/dist`, rootPath);
};

//处理样式
export const buildStyle = () => {
  return src(`${rootPath}/src/components/**/style/**.less`)
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(dest(`${rootPath}/dist/lib/src/components`))
    .pipe(dest(`${rootPath}/dist/es/src/components`));
};

//打包组件
export const buildComponent = async () => {
  return run("pnpm run build", rootPath);
};
// volar 支持
export const buildVolarFile = async () => {
  const filepath = resolve(rootPath, "./src/components/index.ts");
  const targetPath = resolve(rootPath, "./dist/global.d.ts");
  setGlobalFile(filepath, targetPath);
};
