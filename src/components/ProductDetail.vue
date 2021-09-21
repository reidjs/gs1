<template>
  <div>
    <Header :breadcrumbs="breadcrumbs" />
    <h1>Product Details</h1>
    <LabeledValue label="Name" :value="product.productName" />
    <LabeledValue label="ID" :value="id" />
    <LabeledValue label="THC %" :value="product.thcPercentage" />
    <LinkedValue
      v-if="product.createdBy"
      label="Created by"
      :urlTo="{ name: 'user', params: { id: product.createdBy } }"
      :value="product.createdBy"
    />
    <br />
    <router-link :to="{ name: 'productEdit' }">Edit product</router-link>
    <br />
    <router-link :to="{ name: 'productLabel' }">Print label</router-link>
    <br />
    <a>Copy link</a>
    <br />
    <span>{{ route }}</span>
  </div>
</template>

<script>
import { getDatabase, ref, set, onValue } from "firebase/database"
import { LabeledValue, LinkedValue } from "./common.mjs"
import Header from "./Header.vue"
export default {
  components: {
    Header,
    LabeledValue,
    LinkedValue,
  },
  data() {
    return {
      route: "",
      product: {},
    }
  },
  computed: {
    breadcrumbs() {
      return [
        {
          urlName: "home",
          label: "Home",
        },
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
  },
  methods: {
    updateProduct(product) {
      this.product = product
    },
  },
  mounted() {
    const route = window.location.href
    this.route = route

    const db = getDatabase()
    const productRef = ref(db, "products/" + this.id)
    onValue(productRef, (snapshot) => {
      const product = snapshot.val()
      this.updateProduct(product)
    })
  },
}
</script>