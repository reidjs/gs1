import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import ProductDetail from '/src/components/ProductDetail.vue'
const routes = [
  {
    path: '/gs1',
    name: 'home',
    component: Home,
  },
  {
    path: '/gs1/product/:id',
    name: 'product',
    component: ProductDetail 
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router