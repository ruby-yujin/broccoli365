import { createWebHistory, createRouter } from 'vue-router'
//인증 전
import NonVerifyStep01 from '@/design/view/nonVerify/step01.vue'
import NonVerifyStep02 from '@/design/view/nonVerify/step02.vue'
import NonVerifyStep03 from '@/design/view/nonVerify/step03.vue'
import NonVerifyStep04 from '@/design/view/nonVerify/step04.vue'

//인증 후
import VerifyStep01 from '@/design/view/verify/step01.vue'
import VerifyStep02 from '@/design/view/verify/step02.vue'
import VerifyStep03 from '@/design/view/verify/step03.vue'
import VerifyStep04 from '@/design/view/verify/step04.vue'
import VerifyStep05 from '@/design/view/verify/step05.vue'
import VerifyStep06 from '@/design/view/verify/step06.vue'
import VerifyStep07 from '@/design/view/verify/step07.vue'

const routes = [
  {
    //인트로
    path: '/',
    name: 'Intro',
    component: () => import('@/design/view/index.vue')
  },

  {
    // 인증 전
    path: '/nonVerify',
    component: () => import('@/design/layout/ContentLayout.vue'),
    children: [
      {
        path: 'step01',
        component: NonVerifyStep01
      },
      {
        // [TODO] carousel
        path: 'step02',
        component: NonVerifyStep02
      },
      {
        path: 'step03',
        component: NonVerifyStep03
      },
      {
        path: 'step04',
        component: NonVerifyStep04
      }
    ]
  },
  {
    // 인증
    path: '/verify',
    component: () => import('@/design/layout/ContentLayout.vue'),
    children: [
      {
        path: 'step01',
        component: VerifyStep01
      },
      {
        path: 'step02',
        component: VerifyStep02
      },
      {
        //[TODO] 팝업 modal
        path: 'step03',
        component: VerifyStep03
      },
      {
        path: 'step04',
        component: VerifyStep04
      },
      {
        path: 'step05',
        component: VerifyStep05
      },
      {
        path: 'step06',
        component: VerifyStep06
      },
      {
        path: 'step07',
        component: VerifyStep07
      }
      // {
      //   path: 'step08',
      //   component: VerifyStep08
      // }
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
