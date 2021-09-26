<template>
  <div>
    <Header :breadcrumbs="breadcrumbs" />
    <img :src="user.photoURL" />
    <LabeledValue label="Name" :value="user.displayName" />
    <LabeledValue label="Email" :value="user.email" />
  </div>
</template>

<script>
import { ref, set, onValue } from "firebase/database"
import { LabeledValue, LinkedValue } from "./common.mjs"
import Header from "./Header.vue"
export default {
  components: {
    Header,
    LabeledValue,
    LinkedValue,
  },
  data() {
    return {
      user: {},
    }
  },
  computed: {
    breadcrumbs() {
      return [
        {
          urlName: "home",
          label: "Home",
        },
        {
          label: `${this.user.displayName}`,
        },
      ]
    },
    id() {
      return this.$route.params.id
    },
  },
  methods: {
    updateUser(user) {
      this.user = user
    },
  },
  mounted() {
    const userRef = ref(this.db, "users/" + this.id)
    onValue(userRef, (snapshot) => {
      const user = snapshot.val()
      this.updateUser(user)
    })
  },
}
</script>

<style>
</style>