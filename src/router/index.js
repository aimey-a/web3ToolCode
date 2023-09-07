import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/eths',
    name: 'eths',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      rank: 2,
    },
  },
  {
    path: '/esh',
    name: 'esh',
    component: () => import('@/views/esh.vue'),
    meta: {
      rank: 3,
    },
  },
  {
    path: '/eth',
    name: 'eth',
    component: () => import('@/views/eth.vue'),
    meta: {
      rank: 4,
    },
  },
  {
    path: '/uni',
    name: 'uni',
    component: () => import('@/views/uni.vue'),
    meta: {
      rank: 1,
    },
  },
]

const router = new VueRouter({
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.path == '/') {
    next({ name: 'uni' })
  }
  next()
})

export default router
