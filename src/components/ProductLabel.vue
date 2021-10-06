<template>
  <div class="bg-gray-200 h-screen">
    <Header :breadcrumbs="breadcrumbs" />
    <div class="no-print flex w-full">
      <div class="m-auto">
      <h2 class="text-center">Select a format</h2>
      <ul class="flex mb-4">
        <li class="mr-4"><a>BOL</a></li>
        <li class="mr-4"><a>California</a></li>
        <li class="mr-4"><a>Colorado</a></li>
        <li class="mr-4"><a>Washington</a></li>
      </ul>
    </div>
    </div>
    <div class="flex w-full mb-8 p-8">
       <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        Product Information
      </h3>
      <p class="mt-1 max-w-2xl text-sm text-gray-500">
        Logistics data verified by GS1
      </p>
    </div>
    <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
      <dl class="grid grid-cols-1 gap-x-4 gap-y-8 grid-cols-2">
        <div class="">
          <dt class="text-sm font-medium text-gray-500">
            Strain
          </dt>
          <dd class="mt-1 text-sm text-gray-900">
            {{ product.productName }}
          </dd>
        </div>
        <div class="">
          <dt class="text-sm font-medium text-gray-500">
            Percentage THC 
          </dt>
          <dd class="mt-1 text-sm text-gray-900">
            {{ product.thcPercentage }}
          </dd>
        </div>
        <div class="">
          <dt class="text-sm font-medium text-gray-500">
            Volume CBD
          </dt>
          <dd class="mt-1 text-sm text-gray-900">
            3.9mg
          </dd>
        </div>
        <div class="">
          <dt class="text-sm font-medium text-gray-500">
            Tested By
          </dt>
          <dd class="mt-1 text-sm text-gray-900">
            ACT Labs
          </dd>
        </div>
      </dl>
    </div>
      <div class="flex w-full">
        <QrcodeVue :value="route" class="flex-1 mr-8" />
        <div class="text-xs">
        WARNING: As part of these actions, FDA has tested the chemical content
        of cannabinoid compounds in some of the products, and many were found to
        not contain the levels of CBD they claimed to contain. It is important
        to note that these products are not approved by FDA for the diagnosis,
        cure, mitigation, treatment, or prevention of any disease. Consumers
        should beware purchasing and using any such products.
      </div>
      </div>
  </div>
    </div>
    <div class="w-full flex justify-center no-print">
      <button type="button" @click="print" class="inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">

      <PrinterIcon class="ml-3 h-5 w-5 mr-2" aria-hidden="true" />
      Print Label
    </button>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue"
import { ref, set, onValue } from "firebase/database"
import QrcodeVue from "qrcode.vue"
import { PrinterIcon } from "@heroicons/vue/solid"
export default {
  components: {
    QrcodeVue,
    Header,
    PrinterIcon,
  },
    inject: ["db"],
  data() {
    return {
      route: "",
      product: {}
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
    id() {
      return this.$route.params.id
    },
  },
  methods: {
    print() {
      window.print()
    },
    async updateProduct(product) {
      this.product = product
    },
  },
  mounted() {
    const route = window.location.href
    const idxOfPrint = route.indexOf("print")
    this.route = route.slice(0, idxOfPrint)

    const productRef = ref(this.db, "products/" + this.id)
    onValue(productRef, (snapshot) => {
      const product = snapshot.val()
      this.updateProduct(product)
    })
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