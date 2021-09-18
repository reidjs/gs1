<template>
  <div>
    <Header :breadcrumbs="breadcrumbs" />
    <h1>Product {{ $route.params.id }}</h1>
    Value: {{ value }}
    <div>
      <QrcodeVue :value="route" />
    </div>
    {{ route }} <a>Copy</a>
  </div>
</template>

<script>
import { getDatabase, ref, set, onValue } from "firebase/database"
import QrcodeVue from "qrcode.vue"
import Header from "./Header.vue"

export default {
  components: {
    QrcodeVue,
    Header,
  },
  data() {
    return {
      route: "",
      value: null,
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
          label: `Product ${this.$route.params.id}`,
        },
      ]
    },
  },
  methods: {
    updateProduct(product) {
      this.value = product.value
    },
  },
  mounted() {
    const route = window.location.href
    this.route = route

    const db = getDatabase()
    const productRef = ref(db, "products/" + this.$route.params.id)
    onValue(productRef, (snapshot) => {
      const product = snapshot.val()
      this.updateProduct(product)
    })
  },
}
</script>