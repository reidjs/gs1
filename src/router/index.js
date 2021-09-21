import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import ProductDetail from '/src/components/ProductDetail.vue'
import UserDetail from '/src/components/UserDetail.vue'
import Login from '/src/components/Login.vue'
import Account from '/src/components/Account.vue'
import ProductCreate from '/src/components/ProductCreate.vue'
import ProductLabel from '/src/components/ProductLabel.vue'
import ProductList from '/src/components/ProductList.vue'
import ProductEdit from '/src/components/ProductEdit.vue'

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
    path: '/gs1/product/:id/print',
    name: 'productLabel',
    component: ProductLabel 
  },
  {
    path: '/gs1/product/:id/edit',
    name: 'productEdit',
    component: ProductEdit 
  },
  {
    path: '/gs1/product/',
    name: 'productList',
    component: ProductList
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
    path: '/gs1/user/:id',
    name: 'user',
    component: UserDetail 
  },
  {
    path: '/gs1/product/new/',
    name: 'productCreate',
    component: ProductCreate 
  },
  
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router