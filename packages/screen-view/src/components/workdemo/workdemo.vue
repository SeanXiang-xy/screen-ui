<template>
  <div>123{{ demo }}</div>
</template>

<script lang="ts">
export default {
  name: "SWorkdemo",
};
</script>
<script setup lang="ts">
import "./style/index.less";
import type { PropType } from "vue";

type ButtonType = "234" | "543" | "7746";
defineProps({
  demo: {
    type: String as PropType<ButtonType>,
    default: "7746",
  },
});

const emit = defineEmits<{
  (e: "change", id: number): void;
  (e: "update", value: string): void;
}>();

const click = () => {
  emit("change", 1);
  emit("update", "abc");
};
</script>
