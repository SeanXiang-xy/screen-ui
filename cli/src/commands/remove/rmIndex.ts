import { writeFileSync } from "fs-extra";
import { compRootFilePath } from "cli/src/utils/path";
import { getFileImport } from "cli/src/utils/file";
import { getFirstLowerName } from "cli/src/utils/name";
import getIndexFile from "cli/src/templates/indexFile";
import logger from "cli/src/utils/logger";

export default function (name: string) {
  const list = getFileImport(compRootFilePath).map((item) =>
    getFirstLowerName(item)
  );
  const index = list.indexOf(name);
  if (index > -1) {
    list.splice(index, 1);
    writeFileSync(compRootFilePath, getIndexFile(list));
  } else {
    logger.error("组件引入路径不存在");
  }
}
