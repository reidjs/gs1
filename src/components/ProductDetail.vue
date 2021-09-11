<template>
  <div>
    <h1>Product Detail</h1>
    {{ value }}
    <div ref="qrcode" id="qrcode"></div>
    {{ route }} <a>Copy</a>
  </div>
</template>

<script>
import { getDatabase, ref, set, onValue } from "firebase/database"

export default {
  data() {
    return {
      route: '',
      value: null
    }
  },
  methods: {
    updateProduct(product) {
      this.value = product.value
    }
  },
  mounted() {
    const qrcode = new QRCode(this.$refs.qrcode, {
      width: 100,
      height: 100,
    })
    const route = window.location
    qrcode.makeCode(route)
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