import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Intro',
    component: () => import('@/design/view/index.vue'),
    children: [
      {
        path: '/non_verify',
        name: 'NonVerify',
        children: [
          {
            path: '/non_verify',
            component: () => import('@/design/view/non-verify/step01.vue'),
          },
        ],
      },
    ]
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
