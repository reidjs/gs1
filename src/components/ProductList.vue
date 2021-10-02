<template>
  <div class="bg-gray-200 pb-32">
    <Header :breadcrumbs="breadcrumbs" />
    <div class="bg-white shadow overflow-hidden sm:rounded-md m-8">
      <header class="p-8">
        <!-- <input placeholder="Search" v-model="searchInput" @input="filterProducts"/> -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700"
            >Search</label
          >
          <div class="mt-1 relative rounded-md shadow-sm">
            <div
              class="
                absolute
                inset-y-0
                left-0
                pl-3
                flex
                items-center
                pointer-events-none
              "
            >
              <SearchIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              type="text"
              v-model="searchInput"
              @input="filterProducts"
              class="
                focus:ring-indigo-500
                focus:border-indigo-500
                block
                w-full
                pl-10
                sm:text-sm
                border-gray-300
                rounded-md
              "
              placeholder="Search by product name, thc %, id, shipment information..."
            />
          </div>
        </div>
        <div class="flex mt-2 justify-end">
        <router-link :to="{ name: 'productCreate' }">
          Create New Product
        </router-link>
        </div>
      </header>
      <ul role="list" class="divide-y divide-gray-200">
        <li v-for="product in products" :key="product.id">
          <router-link
            :to="{ name: 'product', params: { id: product.id } }"
            class="block hover:bg-gray-50"
          >
            <div class="flex items-center px-4 py-4 sm:px-6">
              <div class="min-w-0 flex-1 flex items-center">
                <div class="flex-shrink-0">
                  <img
                    class="h-12 w-12 rounded-full"
                    :src="product.imageURL"
                    alt=""
                  />
                </div>
                <div
                  class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4"
                >
                  <div>
                    <p class="text-sm font-medium text-indigo-600 truncate">
                      {{ product.productName }}
                    </p>
                    <p class="mt-2 flex items-center text-sm text-gray-500">
                      <!-- <MailIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" /> -->
                      <span class="truncate">{{ product.thcPercentage }}%</span>
                    </p>
                  </div>
                  <div class="hidden md:block">
                    <div>
                      <div class="flex">
                      <router-link
                        :to="{
                          name: 'productEdit',
                          params: { id: product.id },
                        }"
                        class="
                          mt-2
                          flex
                          items-center
                          text-sm text-gray-500
                          hover:text-gray-400
                        "
                      >
                        <PencilAltIcon
                          class="flex-shrink-0 mr-1.5 h-5 w-5 text-blue-400"
                          aria-hidden="true"
                        />
                        Edit Product
                      </router-link>
                      </div>
                      <div class="flex">
                      <p
                        @click.prevent="openDeleteConfirmation(product)"
                        class="
                          mt-2
                          flex
                          items-center
                          text-sm text-gray-500
                          hover:text-gray-400
                        "
                      >
                        <XCircleIcon
                          class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-400"
                          aria-hidden="true"
                        />
                        Delete Product
                      </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <ChevronRightIcon
                  class="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Header, LabeledValue } from "./common.mjs"
import { ref, set, onValue } from "firebase/database"
import { mapGetters } from "vuex"
import {
  CheckCircleIcon,
  ChevronRightIcon,
  MailIcon,
  SearchIcon,
  PencilAltIcon,
  XCircleIcon,
} from "@heroicons/vue/solid"

export default {
  components: {
    Header,
    LabeledValue,
    CheckCircleIcon,
    ChevronRightIcon,
    MailIcon,
    SearchIcon,
    PencilAltIcon,
    XCircleIcon,
  },
  inject: ["db"],
  data() {
    return {
      breadcrumbs: [
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
          imageURL: p.imageURL
        })
      })
      return result
    },
    formatFilteredProducts(products) {
      const result = []
      Object.keys(products).forEach((key) => {
        const p = products[key]
        console.log('p', p)
        result.push({
          id: p.id,
          productName: p.productName,
          createdBy: p.createdBy,
          thcPercentage: p.thcPercentage,
          imageURL: p.imageURL
        })
      })
      return result
    },
    filterProducts() {
      const filteredProducts = this.allProducts.filter((p) => {
        const str = Object.values(p)
          .map((v) => v.toLowerCase())
          .join(" ")
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