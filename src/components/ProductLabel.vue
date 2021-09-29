<template>
  <div>
    <Header :breadcrumbs="breadcrumbs" />
    <div class="no-print">
      <h2>Select a format</h2>
      <ul>
        <li><a>BOL</a></li>
        <li><a>California</a></li>
        <li><a>Colorado</a></li>
        <li><a>Washington</a></li>
      </ul>
    </div>
    <div>
      <QrcodeVue :value="route" />
    </div>
    <div>
      <span>{{ route }}</span>
    </div>
    <button class="no-print" @click="print">Print Label</button>
  </div>
</template>

<script>
import Header from "./Header.vue"
import QrcodeVue from "qrcode.vue"

export default {
  components: {
    QrcodeVue,
    Header,
  },
  data() {
    return {
      route: "",
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
          urlName: "product",
          params: { id: this.$route.params.id },
          label: `Product ${this.$route.params.id}`,
        },
        {
          label: "Print Label",
        },
      ]
    },
  },
  methods: {
    print() {
      window.print()
    }
  },
  mounted() {
    const route = window.location.href
    const idxOfPrint = route.indexOf('print')
    this.route = route.slice(0, idxOfPrint)
  },
}
</script>

<style scoped>
@media print {
  .no-print {
    display: none;
  }
}
</style>