import { writeFileSync } from "fs-extra";
import { resolve } from "path";
import { docNavPath } from "cli/src/utils/path";
import { getNavData } from "cli/src/utils/file";
import type { Nav } from "cli/src/utils/file";

function getNameByLink(path: string) {
  const data = /\/components\/(.+)\//.exec(path);
  const name = data ? data[1] : "";
  return name;
}
function removeNav(data: Nav[], name: string) {
  const index = data.findIndex((item) => getNameByLink(item.link) === name);
  if (index > -1) {
    data.splice(index, 1);
  }
  return data;
}
function refreshFile(type: string, name: string) {
  const filePath = resolve(
    docNavPath,
    `./${type === "work" ? "workComp" : "baseComp"}.ts`
  );
  const originData = getNavData(filePath);
  const data = removeNav(originData, name);

  writeFileSync(filePath, `export default ${JSON.stringify(data, null, 2)}`);
}

export default function (name: string) {
  refreshFile("base", name);
  refreshFile("work", name);
}
