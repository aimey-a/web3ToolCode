import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    //   {
    //     path: '/esh',
    //     name: 'esh',
    //     component: () => import('@/views/esh.vue'),
    //     meta: {
    //       rank: 3,
    //     },
    //   },
    {
        path: '/',
        name: 'tool',
        component: () => import('@/views/tool.vue'),
        meta: {
            rank: 1,
        },
    },
]

const router = new VueRouter({
    routes,
    mode: "history",
})

// router.beforeEach((to, from, next) => {
//   if (to.path == '/') {
//     next({ name: 'uni' })
//   }
//   next()
// })

export default router
