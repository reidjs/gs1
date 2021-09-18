<template>
  <div>
    <Header :breadcrumbs="[{ label: 'Home'}]"/>
    <div class="flex items-center flex-col">
    <h1>Welcome to legitweed.com</h1>
    <h2>Legitweed, weed you can trust.</h2>
    <router-link :to="{ name: 'productList'}">View All Products</router-link>
    </div>
    <h3>About</h3>
    <p>Providing the most accurate marijuana supply chain data in the United States. A subsidiary company of GS1.</p>
  </div>
</template>

<script>
import Header from "./Header.vue"
export default {
  components: { Header },
}
</script>

