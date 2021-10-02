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
    <button type="button" @click="print" class="no-print inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-blue-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
    <PrinterIcon class="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
    Print Label
    </button>
  </div>
</template>

<script>
import Header from "./Header.vue"
import QrcodeVue from "qrcode.vue"
import { PrinterIcon } from "@heroicons/vue/solid"
export default {
  components: {
    QrcodeVue,
    Header,
    PrinterIcon
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