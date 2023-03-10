// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/github',
        name: 'Github',
        component: () => import('@/views/Github.vue'),
      },
      {
        path: '/github/repo/:id',
        name: 'RepoDetail',
        component: () => import('@/views/RepoDetail.vue'),
      },
      {
        path: '/github/:username',
        name: 'GithubUser',
        component: () => import('@/views/GithubUser.vue'),
      },
      {
        path: '/counter',
        name: 'Counter',
        component: () => import('@/views/Counter.vue'),
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login.vue'),
      },
      {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: () => import('@/views/404.vue'),
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
