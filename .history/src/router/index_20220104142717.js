import { createRouter, createWebHashHistory } from 'vue-router'
import Recommend from '../views/Recommend.vue'
import Search from '../views/Search.vue'
import Singer from '../views/Singer.vue'

const routes = [
  {
    path: '/recommend',
    component: Recommend
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/singer',
    component:Singer
  },
  {
    path: '/singer',
    component:Singer
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
