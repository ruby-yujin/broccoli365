import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Intro',
    component: () => import('@/design/view/index.vue')
  },
  {
    path: '/nonVerify',
    component: () => import('@/design/view/nonVerify/step01.vue'),
    children: [
      {
        path: 'step01'
        // component: UserProfile,
      },
      {
        // UserPosts will be rendered inside User's <router-view>
        // when /user/:id/posts is matched
        path: 'posts'
        // component: UserPosts,
      }
    ]
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
