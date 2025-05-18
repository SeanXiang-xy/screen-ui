import { parse } from "@babel/parser";
import traverse from "@babel/traverse";
import { readFileSync, writeFileSync } from "fs-extra";

function getFileAst(path: string) {
  const sourceCode = readFileSync(path, "utf-8");
  return parse(sourceCode, {
    sourceType: "unambiguous",
  });
}
function getExportList(path: string) {
  const ast = getFileAst(path);
  const list: string[] = [];

  traverse(ast, {
    ExportSpecifier(path) {
      list.push(path.node.local.name);
    },
  });
  return list;
}
function getTypeCode(name: string) {
  return `    S${name}: typeof import('screen-ui')['${name}']\r\n`;
}
function getGlobalFileCode(list: string[]) {
  return `\
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
${list.reduce((res, cur) => res + getTypeCode(cur), "")}
  }
}

export {}  
`;
}
export function setGlobalFile(path: string, targetPath: string) {
  const exportList = getExportList(path);
  const code = getGlobalFileCode(exportList);
  writeFileSync(targetPath, code);
}
