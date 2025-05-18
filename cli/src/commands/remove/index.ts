import prompts from "prompts";
import logger from "cli/src/utils/logger";
import { onPromptsCancel } from "cli/src/utils/error";
import { isValidComponentName } from "cli/src/utils/name";
import rmCompFile from "./rmCompFile";
import rmDocFile from "./rmDocFile";
import rmDocNav from "./rmDocNav";
import rmIndex from "./rmIndex";

async function getCompName(): Promise<string> {
  let name = "";
  try {
    await prompts(
      [
        {
          name: "name",
          type: "text",
          message: "输入组件文件夹名称",
          validate: () => isValidComponentName(name),
          onState: (state) => (name = state.value),
        },
      ],
      {
        onCancel: onPromptsCancel,
      }
    );
    return name;
  } catch (error: any) {
    logger.error(error.message);
    process.exit(1);
  }
}
export default async function () {
  const name = await getCompName();
  try {
    rmCompFile(name);
    rmDocFile(name);
    rmDocNav(name);
    rmIndex(name);
  } catch (error: any) {
    logger.error(error.message);
    process.exit(1);
  }
}
