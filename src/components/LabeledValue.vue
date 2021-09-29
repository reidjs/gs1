<template>
  <div>
    <details class="cursor-pointer flex" v-if="info">
      <summary class="items-center flex">{{ label }} <img class="ml-2 w-4 h-4" src="../assets/info.svg" /></summary>
      <p class="ml-4">{{info}}</p>
    </details>
    <label v-else>{{ label }}</label>
    <br v-if="!info" />
    <span>{{ value }}</span>
  </div>
</template>

<script>
export default {
  props: ["label", "value", "info"],
}
</script>

<style scoped>
details > summary {
  list-style: none
}
</style>