import { series } from "gulp";
import { removeDist, build } from "./index";

export default series(
  async () => removeDist(),
  async () => build()
);
