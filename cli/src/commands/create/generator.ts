import { ComponetInfo } from ".";
import { resolve } from "path";
import { compRootPath, docCompPath } from "cli/src/utils/path";
import { existsSync, ensureDirSync, writeFileSync } from "fs-extra";
import getRoot from "cli/src/templates/root";
import getStyle from "cli/src/templates/style";
import getComp from "cli/src/templates/comp";
import getDoc from "cli/src/templates/doc";
import setDocNav from "./setDocNav";
import logger from "cli/src/utils/logger";
import getTypefile from "cli/src/templates/typefile";

function genIndexFile(dirPath: string, name: string) {
  const code = getRoot(name);
  const filePath = resolve(dirPath, "./index.ts");
  writeFileSync(filePath, code);
}
function genStyleFile(dirPath: string) {
  const code = getStyle();
  const styleDirPath = resolve(dirPath, "./style");
  ensureDirSync(styleDirPath);
  const filePath = resolve(styleDirPath, "./index.less");
  writeFileSync(filePath, code);
}
function genVueFile(dirPath: string, name: string) {
  const filePath = resolve(dirPath, `./${name}.vue`);
  const code = getComp(name);
  writeFileSync(filePath, code);
}
function genTypeFile(dirPath: string, name: string) {
  const filePath = resolve(dirPath, `./types.ts`);
  const code = getTypefile(name);
  writeFileSync(filePath, code);
}
function genDoc(name: string) {
  const docDirPath = resolve(docCompPath, `./${name}`);
  ensureDirSync(docDirPath);
  const filePath = resolve(docDirPath, "./index.md");
  const code = getDoc(name);
  writeFileSync(filePath, code);
}
export default function (data: ComponetInfo) {
  const compDirPath = resolve(compRootPath, `./${data.name}`);
  if (existsSync(compDirPath)) {
    logger.error("文件路径已存在，请先确定组件是否重复");
    process.exit(1);
  }
  ensureDirSync(compDirPath);
  genIndexFile(compDirPath, data.name);
  genStyleFile(compDirPath);
  genVueFile(compDirPath, data.name);
  genTypeFile(compDirPath, data.name);
  genDoc(data.name);
  setDocNav(data.type, data.name, data.docName);
}
