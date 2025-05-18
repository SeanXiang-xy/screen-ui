import { writeFileSync } from "fs-extra";
import { compRootFilePath } from "cli/src/utils/path";
import { getFileImport } from "cli/src/utils/file";
import { getFirstLowerName } from "cli/src/utils/name";
import getIndexFile from "cli/src/templates/indexFile";

export default function (name: string) {
  const list = getFileImport(compRootFilePath).map((item) =>
    getFirstLowerName(item)
  );
  list.push(name);
  writeFileSync(compRootFilePath, getIndexFile(list));
}
