<template>
  <header> 
    <TopNav />
    <div class="px-8 w-full h-8">
      <div
        v-if="notification"
        class="px-6 flex items-center align-center w-full h-full bg-green-100"
      >
        <button class="mr-4" @click="clearNotification">&times;</button>
        <span>{{ notification.message }}</span>
      </div>
    </div>
    <nav class="px-8 flex justify-between mb-8">
      <ol class="flex items-center space-x-4">
        <li>
          <div>
            <router-link
              :to="{ name: 'home' }"
              class="text-gray-400 hover:text-gray-500"
            >
              <HomeIcon class="flex-shrink-0 h-5 w-5" aria-hidden="true" />
              <span class="sr-only">Home</span>
            </router-link>
          </div>
        </li>
        <li
          v-for="breadcrumb in breadcrumbLinks"
          :key="breadcrumb.urlName"
        >
          <div class="flex items-center">
            <ChevronRightIcon
              class="flex-shrink-0 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />

            <router-link
              class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
              :to="{ name: breadcrumb.urlName }"
            >
              {{ breadcrumb.label }}
            </router-link>
          </div>
        </li>
        <li v-if="lastBreadcrumb">
          <div class="flex items-center">
            <ChevronRightIcon
              class="flex-shrink-0 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            <span
              class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
              >{{ lastBreadcrumb.label}}</span
            >
          </div>
        </li>
        <!-- <li>{{ lastBreadcrumb.label }}</li> -->
      </ol>

      <!-- <router-link v-if="showLoginLink" :to="{ name: 'login' }"
        >Log in</router-link
      >
      <router-link v-if="showUser" :to="{ name: 'account' }"
        ><img class="w-10 h-10 rounded-full" :src="user.photoURL"
      /></router-link> -->
    </nav>
    

    <slot />
  </header>
</template>

<script>
import { mapGetters, mapMutations } from "vuex"
import { ChevronRightIcon, HomeIcon } from "@heroicons/vue/solid"
import TopNav from "./TopNav.vue"
export default {
  components: {
    ChevronRightIcon,
    HomeIcon,
    TopNav,
  },
  props: ["breadcrumbs"],
  computed: {
    ...mapGetters(["user", "notification"]),
    breadcrumbLinks() {
      return this.breadcrumbs.slice(0, -1)
    },
    lastBreadcrumb() {
      return this.breadcrumbs[this.breadcrumbs.length - 1]
    },
    showUser() {
      if (this.$route.name === "account") {
        return false
      }
      if (!this.user) {
        return false
      }
      return true
    },
    showLoginLink() {
      if (this.$route.name === "login") {
        return false
      }
      if (this.user) {
        return false
      }
      return true
    },
  },
  methods: {
    ...mapMutations(["clearNotification"]),
  },
}
</script>

<style scoped>
@media print {
  header {
    display: none;
  }
}
</style>