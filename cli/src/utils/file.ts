import { parse } from "@babel/parser";
import traverse from "@babel/traverse";
import { readFileSync } from "fs-extra";
import generator from "@babel/generator";

export function getFileAst(path: string) {
  const sourceCode = readFileSync(path, "utf-8");
  return parse(sourceCode, {
    sourceType: "unambiguous",
  });
}
export function getFileImport(path: string) {
  const ast = getFileAst(path);
  const list: string[] = [];
  traverse(ast, {
    ImportDeclaration(path) {
      path.traverse({
        ImportDefaultSpecifier(path) {
          list.push(path.node.local.name);
        },
      });
    },
  });
  return list;
}

function runCode(code: string) {
  return new Function(`return ${code}`)();
}
export interface Nav {
  text: string;
  link: string;
}
export function getNavData(path: string) {
  const ast = getFileAst(path);
  let list: Nav[] = [];
  traverse(ast, {
    ArrayExpression(path) {
      const code = generator(path.node).code;
      list = runCode(code);
    },
  });
  return list;
}
