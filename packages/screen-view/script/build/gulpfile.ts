import { series, parallel } from "gulp";
import {
  removeDist,
  buildStyle,
  buildComponent,
  buildVolarFile,
} from "./index";

export default series(
  async () => removeDist(),
  async () => buildComponent(),
  parallel(
    async () => buildStyle(),
    async () => buildVolarFile()
  )
);
