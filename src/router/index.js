import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'eths',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/esh',
    name: 'esh',
    component: () => import('@/views/esh.vue'),
  },
  {
    path: '/eth',
    name: 'eth',
    component: () => import('@/views/eth.vue'),
  },
]

const router = new VueRouter({
//   mode: 'history',
  routes,
})

export default router
