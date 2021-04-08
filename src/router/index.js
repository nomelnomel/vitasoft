import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home'),
  },
  {
    path: '/add-new-post',
    name: 'NewArticle',
    component: () => import('../pages/AddPost'),
  },
  {
    path: '/post-:id',
    name: 'Article',
    component: () => import('../pages/Post'),
  },
  {
    path: '/*',
    name: '404',
    component: () => import('../pages/NotFound'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})


export default router