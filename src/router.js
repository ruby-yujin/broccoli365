import { createWebHistory, createRouter } from 'vue-router'
import NonVerifyStep01 from '@/design/view/nonVerify/step01.vue'
import NonVerifyStep02 from '@/design/view/nonVerify/step02.vue'

const routes = [
  {
    path: '/',
    name: 'Intro',
    component: () => import('@/design/view/index.vue')
  },
  {
    path: '/nonVerify',
    component: () => import('@/design/layout/ContentLayout.vue'),
    children: [
      {
        path: 'step01',
        component: NonVerifyStep01
      },
      {
        path: 'step02',
        component: NonVerifyStep02
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/design/view/login/index.vue')
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
