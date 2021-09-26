<template>
  <div>
    <Header :breadcrumbs="breadcrumbs" />
    <div v-if="user">
      <h1>Edit product {{product.productName}}</h1>
      <LabeledInput label="Product name" v-model="productName" />
      <LabeledInput label="THC %" v-model="thcPercentage" />
      <small v-if="product.createdBy">Created by <router-link :to="{name: 'user', params: {id: product.createdBy}}">{{ product.createdBy }}</router-link></small>
      <br />
      <button @click="save">Save</button>
      </div>
    <div v-else>
      <p>
        Please <router-link :to="{ name: 'login' }">log in</router-link> to edit the product {{product.productName}}
      </p>
    </div>

  </div>
</template>

<script>
import Header from "./Header.vue"
import { ref, set, onValue, update } from "firebase/database"
import { mapGetters, mapMutations } from "vuex"
import { LabeledInput, LinkedValue } from "./common.mjs"

export default {
  components: {
    Header,
    LabeledInput,
    // LabeledValue,
    LinkedValue,
  },
  inject: ['db'],
  data() {
    return {
      route: "",
      // value: null,
      product: {},
      productName: "",
      thcPercentage: "",
    }
  },
  computed: {
    ...mapGetters(["user"]),

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
          urlName: "product",
          // params: { id: this.id },
          label: "Product Detail",
        },
        {
          label: `Edit Product ${this.product.productName}`,
        },
      ]
    },
    id() {
      return this.$route.params.id
    },
  },
  methods: {
    ...mapMutations(['setNotification']),
    updateProduct(product) {
      this.product = product
      this.productName = product.productName
      this.thcPercentage = product.thcPercentage
    },
    save() {
      const productRef = ref(this.db, "products/" + this.id) 
      const updates = {}
      updates['productName'] = this.productName
      updates['thcPercentage'] = this.thcPercentage
      update(productRef, updates)
      this.setNotification({message: `Updated ${this.productName}`})
    }
  },
  mounted() {
    const route = window.location.href
    this.route = route

    const productRef = ref(this.db, "products/" + this.id)
    onValue(productRef, (snapshot) => {
      const product = snapshot.val()
      this.updateProduct(product)
    })
  },
}
</script>

<style>
</style>