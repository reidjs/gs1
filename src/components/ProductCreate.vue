<template>
  <div class="bg-gray-200">
    <Header :breadcrumbs="breadcrumbs" />
    <!-- <form v-if="user" class="m-8">
      <h2>Upload data from file</h2>
      <input type="file" @change="uploadFile" /> -->
      <!-- <hr />
      <h2>Product details</h2>
      <div>
        <label>Name</label>
        <br />
        <input v-model="productName" />
        <br />
        <label>THC Percentage</label>
        <br />
        <input v-model="thcPercentage" />
      </div>
      <button @click.prevent="createNewProduct">Create new product</button> -->
      <CreateForm v-if="user" class="m-8" />
    <!-- </form> -->
    <div v-else>
      <p class="text-2xl text-center">
        Please <router-link :to="{ name: 'login' }">log in</router-link> to
        create a new product
      </p>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue"
import { mapGetters, mapMutations } from "vuex"
import { ref, set, push } from "firebase/database"
import CreateForm from "./CreateForm.vue"
const breadcrumbs = [
  {
    urlName: "productList",
    label: "Product List",
  },
  {
    label: "Create new product",
  },
]
export default {
  components: { Header, CreateForm },
  inject: ["db"],
  data() {
    return {
      breadcrumbs,
      productName: "",
      thcPercentage: "",
    }
  },
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    ...mapMutations(["setNotification"]),
    createNewProduct() {
      const productRef = ref(this.db, "products")
      const newProductRef = push(productRef)
      set(newProductRef, {
        createdBy: this.user.uid,
        productName: this.productName,
        thcPercentage: this.thcPercentage,
      })
      this.setNotification({ message: `Created ${this.productName}` })
    },
    uploadFile() {
      this.productName = "foo"
      this.thcPercentage = "44%"
    },
  },
}
</script>

<style>
</style>