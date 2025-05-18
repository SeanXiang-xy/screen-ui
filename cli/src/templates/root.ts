export default function (name: string) {
  return `\
import ${name} from "./${name}.vue";
import { withInstall } from "@screen-ui/utils";

export default withInstall(${name});
`;
}
