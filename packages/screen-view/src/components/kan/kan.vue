<template>
  <div>{{ message }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { PropsType } from "./types";

export default defineComponent({
  name: "SKan",
  props: PropsType(),
  setup(props) {
    props.message; // <-- 类型：string

    return {};
  },
});
</script>
