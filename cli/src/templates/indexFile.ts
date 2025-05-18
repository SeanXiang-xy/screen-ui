import { getFirstUpperName } from "../utils/name";

function getExportCode(list: string[]) {
  const code = list
    .map((item) => getFirstUpperName(item) + ",\r\n")
    .reduce((res, cur) => {
      const code = "  " + cur;
      return res + code;
    }, "");
  return code.slice(0, code.length - 2);
}

function getImportCode(name: string) {
  return `import ${getFirstUpperName(
    name
  )} from "./${name}";\r\nexport * from "./${name}";\r\n`;
}

export default function (list: string[]) {
  return `\
${list.map((item) => getImportCode(item)).reduce((res, cur) => res + cur, "")}
export {
${getExportCode(list)}
} 
`;
}
