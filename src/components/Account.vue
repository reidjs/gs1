<template>
  <div>
    <Header :breadcrumbs="breadcrumbs" />
    <div v-if="user">
      <h1>Account</h1>
      <h2>Details</h2>
      {{ user }}
      <hr />
      <button @click="logout">Log out</button>
    </div>
    <div v-else>
      <p>
        Please <router-link :to="{ name: 'login' }">log in</router-link> to view
        your account information.
      </p>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue"
import { mapGetters, mapMutations } from "vuex"

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
  methods: {
    ...mapMutations(["clearUser", "setNotification"]),
    logout() {
      this.clearUser()
      this.$router.push({ name: "home" })
      this.setNotification({ message: "Successfully logged out."})
    },
  },
}
</script>