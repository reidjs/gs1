<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        {{ title }}
      </h3>
      <p class="mt-1 max-w-2xl text-sm text-gray-500">
        {{ subtitle }}
      </p>
    </div>
    <div class="border-t border-gray-200">
      <dl>
        <div v-for="(item, idx) in items" :key="item.key" :class="`${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`">
          <dt class="text-sm font-medium text-gray-500">
            {{ item.title || item.key }}
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <router-link v-if="item.type === 'link'" :to="item.urlTo">{{ item.value }}</router-link>
            <span v-else>{{ item.value }}</span>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'subtitle', 'items']
}
</script>