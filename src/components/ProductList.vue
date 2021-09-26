<template>
  <div>
    <Header :breadcrumbs="breadcrumbs" />
    <input placeholder="Search" v-model="searchInput" @input="filterProducts"/>
    <br />
    <small>Although it's hidden from view, the product ID can also be used to filter search results</small>
    <br />
    <router-link :to="{ name: 'productCreate' }">
      Create New Product
    </router-link>
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
            <router-link
              v-if="userCanEditProduct"
              :to="{ name: 'productEdit', params: { id: product.id } }"
            >
              Edit details
            </router-link>
          </div>
          <a
            v-if="userCanEditProduct"
            class="self-end text-red-500"
            @click="openDeleteConfirmation(product)"
            >Delete product</a
          >
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { Header, LabeledValue } from "./common.mjs"
import { ref, set, onValue } from "firebase/database"
import { mapGetters } from "vuex"

export default {
  components: { Header, LabeledValue },
  inject: ['db'],
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
      searchInput: "",
      products: [],
      allProducts: [],
    }
  },
  computed: {
    ...mapGetters(["user"]),
    userCanEditProduct() {
      return this.user ? true : false
    },
  },
  methods: {
    formatProductsFromFirebase(products) {
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
      return result
    },
    formatFilteredProducts(products) {
      const result = []
      Object.keys(products).forEach((key) => {
        const p = products[key]
        result.push({
          id: p.id,
          productName: p.productName,
          createdBy: p.createdBy,
          thcPercentage: p.thcPercentage,
        })
      })
      return result
    },
    filterProducts() {
      const filteredProducts = this.allProducts.filter(p => {
        const str = Object.values(p).map(v => v.toLowerCase()).join(' ')
        return str.includes(this.searchInput)
      })
      this.products = this.formatFilteredProducts(filteredProducts)
    },
    openDeleteConfirmation(product) {
      if (confirm(`Delete product ${product.productName}?`)) {
        this.deleteProduct(product.id)
      }
    },
    deleteProduct(id) {
      set(ref(this.db, "products/" + id), null)
    },
  },
  mounted() {

    const productRef = ref(this.db, "products/")
    onValue(productRef, (snapshot) => {
      const products = snapshot.val()
      this.allProducts = this.formatProductsFromFirebase(products)
      this.products = this.formatProductsFromFirebase(products)
    })
  },
}
</script>

<style>
</style>