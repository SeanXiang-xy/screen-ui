import { rootPath } from "../utils/paths";
import run from "../utils/run";

//删除dist
export const removeDist = () => {
  return run(`rm -rf ${rootPath}/dist`, rootPath);
};

//打包组件
export const build = async () => {
  return run("pnpm run build", rootPath);
};
