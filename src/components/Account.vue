<template>
  <div>
    <Header :breadcrumbs="breadcrumbs" />
    {{ user }}
  </div>
</template>

<script>
import Header from "./Header.vue"
import { mapGetters } from "vuex"

export default {
  components: { Header },
  computed: {
    ...mapGetters(["user"]),

    breadcrumbs() {
      return [
        {
          urlName: "home",
          label: "Home",
        },
        {
          label: this.user?.displayName,
        },
      ]
    },
  },
}
</script>