<template>
  <div>
    <Header :breadcrumbs="breadcrumbs" />
    <router-link :to="{ name: 'createProduct' }"
      >Create New Product</router-link
    >
    <ul>
      <li
        v-for="product in products"
        :key="product.id"
        class="border-2 border-black rounded-lg m-4"
      >
        <LabeledValue label="Name" :value="product.productName" />
        <LabeledValue label="THC %" :value="product.thcPercentage" />
        <div class="flex justify-between">
        <div>
        <router-link :to="{ name: 'product', params: { id: product.id } }">
          View product page
        </router-link>
        <br />
        <router-link :to="{ name: 'productEdit', params: { id: product.id } }">
          Edit details
        </router-link>
        </div>
        <a class="self-end text-red-500" @click="openDeleteConfirmation(product)">Delete product</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { Header, LabeledValue } from "./common.mjs"
import { getDatabase, ref, set, onValue } from "firebase/database"

export default {
  components: { Header, LabeledValue },
  data() {
    return {
      breadcrumbs: [
        {
          urlName: "home",
          label: "Home",
        },
        {
          label: "Product List",
        },
      ],
      products: [],
    }
  },
  computed: {},
  methods: {
    updateProducts(products) {
      const result = []
      Object.keys(products).forEach((key) => {
        const p = products[key]
        result.push({
          id: key,
          productName: p.productName,
          createdBy: p.createdBy,
          thcPercentage: p.thcPercentage,
        })
      })
      this.products = result
    },
    openDeleteConfirmation(product) {
      console.log("product", product)
      if (confirm(`Delete product ${product.productName}?`)) {
        this.deleteProduct(product.id)
      }
    },
    deleteProduct(id) {
      console.log("id", id)
      const db = getDatabase()

      set(ref(db, "products/" + id), null)
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

<style>
</style>