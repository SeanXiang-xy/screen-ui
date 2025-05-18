import prompts from "prompts";
import logger from "cli/src/utils/logger";
import { onPromptsCancel } from "cli/src/utils/error";
import generator from "./generator";
import setIndex from "./setIndex";
import { isValidComponentName } from "cli/src/utils/name";

const COMPONENT_TYPE_LIST = ["base", "work"] as const;
export type ComponetType = typeof COMPONENT_TYPE_LIST[number];

export interface ComponetInfo {
  name: string; // 文件夹名称
  docName: string; // 文档名称
  type: ComponetType; // 组件类型
}
export interface CreateCMD {
  type?: string;
}
async function getCompType(type: any): Promise<ComponetType> {
  if (COMPONENT_TYPE_LIST.includes(type)) {
    return type;
  }
  try {
    const result = await prompts(
      [
        {
          name: "type",
          type: "select",
          message: "选择组件的分类",
          choices: COMPONENT_TYPE_LIST.map((val, i) => {
            return {
              title: val,
              value: val,
              selected: i === 0,
            };
          }),
        },
      ],
      {
        onCancel: onPromptsCancel,
      }
    );
    return result.type;
  } catch (error: any) {
    logger.error(error.message);
    process.exit(1);
  }
}
async function getCompInfo() {
  const data = {
    docName: "",
    name: "",
  };
  try {
    await prompts(
      [
        {
          name: "name",
          type: "text",
          message: "输入组件文件夹名称",
          validate: () => isValidComponentName(data.name),
          onState: (state) => (data.name = state.value),
        },
        {
          name: "docName",
          type: "text",
          message: "文档展示的组件名",
          validate: () => typeof data.docName === "string",
          onState: (state) => (data.docName = state.value),
        },
      ],
      {
        onCancel: onPromptsCancel,
      }
    );
    return data;
  } catch (error: any) {
    logger.error(error.message);
    process.exit(1);
  }
}
function genFile(componetInfo: ComponetInfo) {
  generator(componetInfo);
  setIndex(componetInfo.name);
}
export default async function (data: CreateCMD) {
  const type = await getCompType(data.type);
  const info = await getCompInfo();

  const componetInfo: ComponetInfo = {
    type,
    docName: info.docName,
    name: info.name,
  };
  genFile(componetInfo);
}
