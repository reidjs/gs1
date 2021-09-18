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
          urlName: "home",
          label: "Home",
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
  mounted() {
    const route = window.location.href
    this.route = route
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