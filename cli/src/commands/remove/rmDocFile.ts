import { resolve } from "path";
import logger from "cli/src/utils/logger";
import { docCompPath } from "cli/src/utils/path";
import { existsSync, removeSync } from "fs-extra";

export default function (name: string) {
  const dirPath = resolve(docCompPath, `./${name}`);
  if (!existsSync(dirPath)) {
    logger.error("组件文档不存在");
    return;
  }
  removeSync(dirPath);
}
