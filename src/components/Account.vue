<template>
  <div>
    <Header :breadcrumbs="breadcrumbs" />
    <div v-if="user">
      <img :src="user.photoURL" />
      <LabeledValue label="Name" :value="user.displayName" />
      <LabeledValue label="Email" :value="user.email" />
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
import { LabeledValue, LinkedValue } from "./common.mjs"
export default {
  components: { Header, LabeledValue, LinkedValue },
  computed: {
    ...mapGetters(["user"]),

    breadcrumbs() {
      return [
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
      this.setNotification({ message: "Successfully logged out." })
    },
  },
}
</script>