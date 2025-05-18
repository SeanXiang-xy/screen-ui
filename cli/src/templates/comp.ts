import { getName } from "../utils/name";

export default function (name: string) {
  return `\
<template>
  <div>{{ message }}</div>
</template>

<script lang="ts">
export default {
  name: "${getName(name)}",
}
</script>
<script setup lang="ts">
import "./style/index.less";
import { getProps } from "./types";

defineProps(getProps())
</script>
`;
}
