<template>
  <div class="bg-gray-200 pb-32">
    <Header :breadcrumbs="breadcrumbs" />
    <!-- <img :src="user.photoURL" />
    <LabeledValue label="Name" :value="user.displayName" />
    <LabeledValue label="Email" :value="user.email" /> -->
    <div class="bg-white text-center rounded-lg shadow m-8">
    <div class="flex-1 flex flex-col p-8 m-8">
        <img class="w-32 h-32 flex-shrink-0 mx-auto rounded-full" :src="user.photoURL" alt="" />
        <h3 class="mt-6 text-gray-900 text-sm font-medium">{{ user.displayName }}</h3>
        <dl class="mt-1 flex-grow flex flex-col justify-between">
          <dt class="sr-only">Title</dt>
          <dd class="text-gray-500 text-sm">Logistics Manager</dd>
          <dt class="sr-only">Role</dt>
          <dd class="mt-3">
            <span class="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">Trusted Consultant</span>
          </dd>
        </dl>
      </div>
      <div>
        <div class="border-t flex divide-x divide-gray-200">
          <div class="w-0 flex-1 flex">
            <a href="#" class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
              <MailIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
              <span class="ml-3">Email</span>
            </a>
          </div>
          <div class="w-0 flex-1 flex">
            <a href="#" class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
              <PhoneIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
              <span class="ml-3">Call</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, set, onValue } from "firebase/database"
import { LabeledValue, LinkedValue } from "./common.mjs"
import { MailIcon, PhoneIcon } from '@heroicons/vue/solid'

import Header from "./Header.vue"
export default {
  components: {
    Header,
    LabeledValue,
    LinkedValue,
    MailIcon,
    PhoneIcon
  },
  inject: ['db'],
  data() {
    return {
      user: {},
    }
  },
  computed: {
    breadcrumbs() {
      return [
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