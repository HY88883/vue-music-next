import { createRouter, createWebHashHistory } from 'vue-router'
const Recommend = () => import(/* webpackChunkName: "recommend" */'../views/Recommend.vue')
const Search = () => import(/* webpackChunkName: "search" */'../views/Search.vue')
const Singer = () => import(/* webpackChunkName: "singer" */'../views/Singer.vue')
const TopList = () => import(/* webpackChunkName: "top-list" */'../views/TopList.vue')
const SingerDetail = () => import(/* webpackChunkName: "singer-detail" */'../views/singer-detail.vue')
const Album = () => import(/* webpackChunkName: "album" */'../views/album.vue')
const TopDetail = () => import(/* webpackChunkName: "top-detail" */'../views/top-detail.vue')
const UserCenter = () => import(/* webpackChunkName: "user-center" */'../views/user-center.vue')

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: Recommend,
    children: [
      {
        path: ':id',
        component: Album
      }
    ]
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/singer',
    component: Singer,
    children: [{
      path: ':id',
      component: SingerDetail
    }]
  },
  {
    path: '/top-list',
    component: TopList,
    children: [
      {
        path: ':id',
        component: TopDetail
      }
    ]
  },
  {
    path: '/user',
    components: {
      user: UserCenter
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
