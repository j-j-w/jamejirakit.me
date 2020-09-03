import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/*',
    name: 'notfound',
    redirect: { name: 'index' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
