import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Intro',
    component: () => import('@/design/view/index.vue')
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
