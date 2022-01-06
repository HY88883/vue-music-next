import { createRouter, createWebHashHistory } from 'vue-router'
import Recommend from '../views/Recommend.vue'

const routes = [
  {
    path: '/recommend',
    component: Recommend
  },
  {

  },
  {
    path: '/about'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
