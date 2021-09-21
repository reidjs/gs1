<template>
  <div>
    <label>{{ label }}</label>
    <br />
    <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"/>
  </div>
</template>

<script>
export default {
  props: ["label", "modelValue"],
  emits: ["update:modelValue"]
}
</script>

<style>

</style>