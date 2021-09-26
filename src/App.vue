<template>
  <router-view />
</template>

<script>
import { getDatabase, ref, set, onValue, update } from "firebase/database"
export default {
  provide() {
    const db = getDatabase()
    return {
      db,
    }
  },
}
</script>

<style>
</style>
