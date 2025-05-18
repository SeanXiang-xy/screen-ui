<script setup lang="ts">
import { ref } from "vue";
const data = ref([
  { name: "demo1", value: 123 },
  { name: "demo3", value: 221 },
  { name: "demo2", value: 111 },
]);
</script>

<template>
  <div class="wrapper">
    <s-line-chart :data="data"></s-line-chart>
    <s-asd></s-asd>
  </div>
</template>

<style scoped lang="less">
.wrapper {
  width: 500px;
  height: 300px;
  border: 1px solid red;
}
</style>
