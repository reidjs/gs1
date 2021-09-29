<template>
  <div class="bg-gray-200">
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
    <DisplayDetails
      class="m-8"
      title="Product Details"
      :subtitle="`Information about ${product.productName}`"
      :items="items"
    />
    <br />
    <router-link :to="{ name: 'productEdit' }">Edit product</router-link>
    <br />
    <router-link :to="{ name: 'productLabel' }">Print label</router-link>
    <br />
    <label>Share this page</label>
    <br />
    <span>{{ route }}</span>
  </div>
</template>

<script>
import { ref, set, onValue } from "firebase/database"
import { LabeledValue, LinkedValue, DisplayDetails } from "./common.mjs"
import Header from "./Header.vue"
const keyToTitle = {
  'createdBy': 'Created By'
}
export default {
  components: {
    Header,
    LabeledValue,
    LinkedValue,
    DisplayDetails,
  },
  inject: ["db"],
  data() {
    return {
      route: "",
      product: {},
      createdByUserName: "",
      items: []
      // items,
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
      Object.keys(product).forEach(key => {
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
          this.items.map(item => {
            if (item.key === 'createdBy') {
              item.value = user.displayName
              item.type = "link"
              item.urlTo = { name: 'user', params: { id: user.uid } }
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