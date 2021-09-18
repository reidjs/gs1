import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import ProductDetail from '/src/components/ProductDetail.vue'
import Login from '/src/components/Login.vue'
import Account from '/src/components/Account.vue'

const routes = [
  {
    path: '/gs1/',
    name: 'home',
    component: Home,
    props: {
      breadcrumbs: "test"
    }
  },
  {
    path: '/gs1/product/:id/',
    name: 'product',
    component: ProductDetail 
  },
  {
    path: '/gs1/login/',
    name: 'login',
    component: Login 
  },
  {
    path: '/gs1/account/',
    name: 'account',
    component: Account 
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router