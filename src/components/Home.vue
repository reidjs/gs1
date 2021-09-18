<template>
  <div>
    <Header :breadcrumbs="[{ label: 'Home'}]"/>
    <h1>Product List</h1>
    <router-link :to="{name: 'createProduct'}">Create New Product</router-link>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.id }} {{ product.value }}
        <router-link :to="{ name: 'product', params: { id: product.id } }">
          View
        </router-link>
        <a>Delete&nbsp;</a>
        <a>Edit</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { getDatabase, ref, set, onValue } from "firebase/database"
import Header from "./Header.vue"
export default {
  components: { Header },
  data() {
    return {
      products: [],
    }
  },
  computed: {},
  methods: {
    newProduct() {
      const min = 1000
      const max = 10000
      const id = Math.floor(Math.random() * (max - min) + min)
      const value = Math.floor(Math.random() * 10)
      const db = getDatabase()
      set(ref(db, "products/" + id), {
        value,
      })
    },
    updateProducts(products) {
      const result = []
      Object.keys(products).forEach((key) => {
        result.push({ id: key, value: products[key].value })
      })
      this.products = result
    },
  },
  mounted() {
    const db = getDatabase()

    const productRef = ref(db, "products/")
    onValue(productRef, (snapshot) => {
      const products = snapshot.val()
      this.updateProducts(products)
    })
  },
}
</script>

