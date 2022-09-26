import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Intro',
    component: () => import('@/design/view/index.vue'),
    children: [
      {
        path: '/non_verify',
        // name: 'Patient',
        children: [
          {
            path: '/non_verify',
            component: () => import('@/design/view/non_verify/step01.vue'),
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
