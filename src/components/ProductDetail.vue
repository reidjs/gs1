<template>
  <div class="bg-gray-200 h-screen">
    <Header :breadcrumbs="breadcrumbs" />

    <!-- <h1>Product Details</h1>
    <LabeledValue label="Strain" :value="product.productName" />
    <LabeledValue
      label="Potency"
      :value="product.potency"
      info="The amount of thc in the product"
    />
    <LabeledValue
      label="THC %"
      :value="product.thcPercentage"
      info="amount thc"
    />
    <LinkedValue
      v-if="product.createdBy"
      label="Created by"
      :urlTo="{ name: 'user', params: { id: product.createdBy } }"
      :value="createdByUserName"
    /> -->
    <!-- <DisplayDetails
      class="m-8"
      title="Product Details"
      :subtitle="`Information about ${product.productName}`"
      :items="items"
    /> -->
    <div class="bg-white shadow overflow-hidden sm:rounded-lg m-8">
      <div class="px-4 py-5 sm:px-6 flex justify-between">
        <div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Product Details
          </h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">
            Information about {{ product.productName }}
          </p>
        </div>
        <div class="md:flex">
          <div class="flex md:mr-4">
            <PencilAltIcon
              class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            <router-link :to="{ name: 'productEdit' }"
            class="text-blue-500 no-underline"
              >Edit product</router-link
            >
          </div>
          <div class="flex">
            <PrinterIcon
              class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          <router-link class="font-bold text-blue-500 no-underline" :to="{ name: 'productLabel' }">Print label</router-link>
          </div>
        </div>
      </div>
      <div class="border-t border-gray-200">
        <dl>
          <div
            v-for="(item, idx) in items"
            :key="item.key"
            :class="`${
              idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'
            } px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`"
          >
            <dt class="text-sm font-medium text-gray-500">
              {{ item.title || item.key }}
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <router-link v-if="item.type === 'link'" :to="item.urlTo">{{
                item.value
              }}</router-link>
              <img v-else-if="item.type === 'image'" class="inline-block h-10 w-10 rounded-full" :src="item.src"/>
              <span v-else>{{ item.value }}</span>
            </dd>
          </div>
          <div :class="`bg-yellow-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`">
            <dt class="text-sm font-medium text-gray-500">
              <h3>Tracking Information</h3>
              <div class="flex items-center mt-2">
              <small class="mr-1">Verified by</small>
               <img class="w-10 h-10" src="../assets/gs1.svg" />
              </div>
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
    <nav class="flex" aria-label="Breadcrumb">
    <ol role="list" class="bg-white rounded-md shadow px-6 flex space-x-4">
      <li class="flex">
        <div class="flex items-center">
          <a href="#" class="text-gray-400 hover:text-gray-500">
            <TruckIcon class="flex-shrink-0 h-5 w-5" aria-hidden="true" />
            <span class="sr-only">Home</span>
          </a>
        </div>
      </li>
      <li v-for="page in pages" :key="page.name" class="flex">
        <div class="flex items-center">
          <svg class="flex-shrink-0 w-6 h-full text-gray-200" viewBox="0 0 24 44" preserveAspectRatio="none" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
          </svg>
          <div class="ml-4 flex">
          <component class="flex-shrink-0 h-5 w-5 text-gray-400 hover:text-gray-500" :is="page.icon" v-if="page.icon"/>
          <a :href="page.href" class="ml-2 text-sm font-medium text-gray-500 hover:text-gray-700" :aria-current="page.current ? 'page' : undefined">{{ page.name }}</a>
          </div>
        </div>
      </li>
    </ol>
  </nav>
            </dd>
          </div>
        </dl>
      </div>
    </div>
    <!-- <br />
    <router-link :to="{ name: 'productEdit' }">Edit product</router-link>
    <br />
    <router-link :to="{ name: 'productLabel' }">Print label</router-link>
    <br /> -->
    <!-- <label>Share this page</label>
    <br /> -->
    <!-- <span>{{ route }}</span> -->
  </div>
</template>

<script>
import { ref, set, onValue } from "firebase/database"
import { LabeledValue, LinkedValue, DisplayDetails } from "./common.mjs"
import { PencilAltIcon, PrinterIcon, OfficeBuildingIcon, BeakerIcon, TruckIcon } from "@heroicons/vue/solid"
import Header from "./Header.vue"
const keyToTitle = {
  createdBy: "Created By",
  productName: "Strain",
  thcPercentage: "Percentage THC",
  imageURL: "Image"
}
const pages = [
  { name: 'Warehouse', href: '#', current: false },
  { name: 'Quality Test', href: '#', current: false, icon: BeakerIcon },
  { name: 'Dispensary #44', href: '#', current: true },
]
export default {
  components: {
    Header,
    LabeledValue,
    LinkedValue,
    DisplayDetails,
    PencilAltIcon,
    PrinterIcon,
    OfficeBuildingIcon,
    BeakerIcon, TruckIcon
  },
  inject: ["db"],
  data() {
    return {
      route: "",
      product: {},
      createdByUserName: "",
      items: [],
      pages,
    }
  },
  computed: {
    breadcrumbs() {
      return [
        {
          urlName: "productList",
          label: "Product List",
        },
        {
          label: `Product ${this.product.productName}`,
        },
      ]
    },
    id() {
      return this.$route.params.id
    },
    // items() {
    //   console.log('this.product', this.product)
    //   const arr = []
    // }
  },
  methods: {
    async updateProduct(product) {
      this.product = product
      this.items = []
      Object.keys(product).forEach((key) => {
        const value = product[key]
        const o = {}
        o.title = keyToTitle[key]
        o.key = key
        o.value = value
        this.items.push(o)
      })
    },
    async getCreatedByUserName(createdBy) {
      const userRef = ref(this.db, "users/" + createdBy)
      return onValue(
        userRef,
        (snapshot) => {
          const user = snapshot.val()
          this.items.map((item) => {
            if (item.key === "createdBy") {
              item.value = user.displayName
              item.type = "link"
              item.urlTo = { name: "user", params: { id: user.uid } }
            }
            if (item.key === "imageURL") {
              item.type = "image"
              item.src = item.value
            }
          })
          return user.displayName
        },
        { onlyOnce: true }
      )
    },
  },
  mounted() {
    const route = window.location.href
    this.route = route

    const productRef = ref(this.db, "products/" + this.id)
    onValue(productRef, (snapshot) => {
      const product = snapshot.val()
      this.updateProduct(product)
      this.getCreatedByUserName(product.createdBy)
    })
  },
}
</script>