<template>
  <div>
    <label>{{ label }}</label>
    <br />
    <router-link :to="urlTo">{{ value }}</router-link>
  </div>
</template>

<script>
export default {
  props: ["label", "urlTo", "value"],
}
</script>

<style>
</style>