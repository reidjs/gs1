<template>
  <header>
    <nav class="flex justify-between">
      <ol class="flex">
        <li v-for="breadcrumb in breadcrumbLinks" :key="breadcrumb.urlName">
          <router-link :to="{ name: breadcrumb.urlName }">
            {{ breadcrumb.label }}
          </router-link>
          >&nbsp;
        </li>
        <li>{{ lastBreadcrumb.label }}</li>
      </ol>

      <router-link v-if="showLoginLink" :to="{name: 'login'}">Log in</router-link>
      <router-link v-if="showUser" :to="{name: 'account'}"><img class="w-10 h-10 rounded-full" :src="user.photoURL"/></router-link>
    </nav>
    <div class="w-full h-8">
      <div v-if="notification" class="px-6 flex items-center justify-between align-center w-full h-full bg-green-100">
        <span>{{ notification.message }}</span>
        <button @click="clearNotification">&times;</button>

        </div>
    </div>

    <slot />
  </header>
</template>

<script>
import { mapGetters, mapMutations} from "vuex"
export default {
  props: ["breadcrumbs"],
  computed: {
    ...mapGetters(['user', 'notification']),
    breadcrumbLinks() {
      return this.breadcrumbs.slice(0, -1)
    },
    lastBreadcrumb() {
      return this.breadcrumbs[this.breadcrumbs.length - 1]
    },
    showUser() {
      if (this.$route.name === 'account') {
        return false
      }
      if (!this.user) {
        return false
      }
      return true
    },
    showLoginLink() {
      if (this.$route.name === 'login') {
        return false
      }
      if (this.user) {
        return false
      } 
      return true
    },
  },
  methods: {
    ...mapMutations(['clearNotification'])
  }
}
</script>

<style scoped>
  @media print {
    header {
      display: none;
    }
  }
</style>