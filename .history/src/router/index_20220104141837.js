import { createRouter, createWebHashHistory } from 'vue-router'
import Recommend from '@/view/Recommend'

const routes = [
  {
    path: '/recommend',
    component:
  },
  {

  },
  {
    path: '/about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
