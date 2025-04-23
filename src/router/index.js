import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'tool',
        component: () => import('@/views/tool.vue'),
        meta: {
            rank: 1,
        },
    },
    {
        path: '/sol',
        name: 'sol',
        component: () => import('@/views/sol.vue'),
        meta: {
            rank: 2,
        },
    },
]

const router = new VueRouter({
    routes,
    // mode: "history",
})

// router.beforeEach((to, from, next) => {
//   if (to.path == '/') {
//     next({ name: 'uni' })
//   }
//   next()
// })

export default router
