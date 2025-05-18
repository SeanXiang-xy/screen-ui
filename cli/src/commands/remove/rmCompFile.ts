import { resolve } from "path";
import logger from "cli/src/utils/logger";
import { compRootPath } from "cli/src/utils/path";
import { existsSync, removeSync } from "fs-extra";

export default function (name: string) {
  const dirPath = resolve(compRootPath, `./${name}`);
  if (!existsSync(dirPath)) {
    logger.error("组件源码不存在");
    return;
  }
  removeSync(dirPath);
}
