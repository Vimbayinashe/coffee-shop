import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ControlPanel from '../components/ControlPanel.vue'
import Basket from '../components/Basket.vue'
import OneProduct from '../components/OneProduct.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  
  {
    path: '/control-panel/',
    name: 'ControlPanel',
    component: ControlPanel
  },
  
  {
    path:'/basket',
    name:'Basket',
    component: Basket
  },
  
  {
    path: '/control-panel/products/:id',
    name:'OneProduct',
    component: OneProduct
  },

  { 
    path: '/products/:category?', //question mark makes the parameter optional
    name: 'Products',
    component: () => import(/* webpackChunkName: "about" */ '../views/Products.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
