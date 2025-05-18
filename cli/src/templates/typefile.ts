export default function (name: string) {
  return `\
import type { PropType } from "vue";

export const getProps = () => {
  return {
    message: {
      type: String as PropType<"222" | "333" | "${name}">,
      default: "${name}",
    },
  };
};
`;
}
