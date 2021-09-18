<template>
  <div>
    <Header :breadcrumbs="breadcrumbs" />
    <div v-if="user">
      <h1>Account</h1>
      <h2>Details</h2>
      {{ user }}
      <hr />
      <h2>My Products</h2>
    </div>
    <div v-else>
      <p>Please <router-link :to="{ name: 'login'}">log in</router-link>
 to view your account information.</p>
    </div>
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