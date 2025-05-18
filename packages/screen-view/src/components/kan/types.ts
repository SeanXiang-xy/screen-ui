import type { PropType } from "vue";

export const PropsType = () => {
  return {
    message: {
      type: String as PropType<"222" | "333" | "444">,
      default: "222",
    },
  };
};
