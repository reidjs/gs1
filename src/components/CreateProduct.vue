<template>
  <div>
    <Header :breadcrumbs="breadcrumbs" />
    <form v-if="user">
      <h2>Upload data from file</h2>
      <input type="file" @change="uploadFile" />
      <hr />
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
      <button @click.prevent="createNewProduct">Create new product</button>
    </form>
    <div v-else>
      <p>
        Please <router-link :to="{ name: 'login' }">log in</router-link> to
        create a new product
      </p>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue"
import { mapGetters, mapMutations } from "vuex"
import { getDatabase, ref, set, push } from "firebase/database"

const breadcrumbs = [
  {
    urlName: "home",
    label: "Home",
  },
  {
    label: "Create new product",
  },
]
export default {
  components: { Header },
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
    ...mapMutations(['setNotification']),
    createNewProduct() {
      console.log("this.productDetails", this.productName, this.thcPercentage)
      console.log("this.user", this.user.uid)
      const db = getDatabase()
      const productRef = ref(db, "products")
      const newProductRef = push(productRef)
      set(newProductRef, {
        createdBy: this.user.uid,
        productName: this.productName,
        thcPercentage: this.thcPercentage,
      })
      this.setNotification({ message: `Created ${this.productName}`})
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