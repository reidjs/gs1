<template>
  <header>
    <nav>
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
      <router-link v-if="showUser" :to="{name: 'account'}">{{ user.displayName }}</router-link>
    </nav>
    <slot />
  </header>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  props: ["breadcrumbs"],
  computed: {
    ...mapGetters(['user']),
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
}
</script>