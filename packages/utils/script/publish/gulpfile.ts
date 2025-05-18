import { series } from "gulp";
import { addVersion, setPackageJson, publish } from "./index";

export default series(
  async () => addVersion(),
  async () => setPackageJson(),
  async () => publish()
);
