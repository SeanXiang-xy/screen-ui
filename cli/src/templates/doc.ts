import { getName, getConversionName } from "../utils/name";

export default function (name: string) {
  const relName = getName(name);
  const conversionName = getConversionName(relName);
  return `\
# ${relName}

组件描述

### 基本用法

:::demo 这里可以添加\`参数\`的描述。

\`\`\`vue
<template>
  <div class="comp-wrapper">{{ data }}</div>
  <${conversionName}></${conversionName}>
</template>

<script setup>
import { ref } from "vue";

const data = ref("${conversionName}");
</script>

<style>
.comp-wrapper {
  border: 1px solid red;
}
</style>
\`\`\`

:::

### 参数

| 参数 | 类型 | 默认 | 说明 | 跳转 Demo | 全局配置项 |
| ---- | ---- | ---- | ---- | --------- | --------- |
|      |      |      |      |           |           |
|      |      |      |      |           |           |
|      |      |      |      |           |           |

### 事件

| 事件 | 类型 | 说明 | 跳转 Demo |
| ---- | ---- | ---- | --------- |
|      |      |      |           |
|      |      |      |           |
|      |      |      |           |
`;
}
