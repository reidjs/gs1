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
      :value="createdByUserName"
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
      createdByUserName: "",
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
    getCreatedByUserName(createdBy) {
    const userRef = ref(this.db, "users/" + createdBy)
    onValue(userRef, (snapshot) => {
      const user = snapshot.val()
      this.createdByUserName = user.displayName
    })
    }
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