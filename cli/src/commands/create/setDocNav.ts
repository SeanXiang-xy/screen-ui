import { writeFileSync } from "fs-extra";
import { resolve } from "path";
import { docNavPath } from "cli/src/utils/path";
import { ComponetType } from ".";
import { getNavData } from "cli/src/utils/file";

export default async function (
  type: ComponetType,
  name: string,
  docName: string
) {
  const filePath = resolve(
    docNavPath,
    `./${type === "work" ? "workComp" : "baseComp"}.ts`
  );
  const data = getNavData(filePath);
  data.push({
    text: docName,
    link: `/components/${name}/`,
  });
  writeFileSync(filePath, `export default ${JSON.stringify(data, null, 2)}`);
}
