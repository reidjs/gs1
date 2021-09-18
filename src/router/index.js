import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import ProductDetail from '/src/components/ProductDetail.vue'
import Login from '/src/components/Login.vue'
import Account from '/src/components/Account.vue'
import CreateProduct from '/src/components/CreateProduct.vue'

const routes = [
  {
    path: '/gs1/',
    name: 'home',
    component: Home,
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
  {
    path: '/gs1/product/new/',
    name: 'createProduct',
    component: CreateProduct 
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router