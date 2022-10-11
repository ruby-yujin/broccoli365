import { createWebHistory, createRouter } from 'vue-router'
//인증 전 steps
import NonVerifyStep01 from '@/design/view/nonVerify/step01.vue'
import NonVerifyStep02 from '@/design/view/nonVerify/step02.vue'
import NonVerifyStep03 from '@/design/view/nonVerify/step03.vue'
import NonVerifyStep04 from '@/design/view/nonVerify/step04.vue'
import NonVerifyStep05 from '@/design/view/nonVerify/step05.vue'
import NonVerifyStep06 from '@/design/view/nonVerify/step06.vue'
import NonVerifyStep07 from '@/design/view/nonVerify/step07.vue'
import NonVerifyStep08 from '@/design/view/nonVerify/step08.vue'

//인증 후 steps
import VerifyStep01 from '@/design/view/verify/step01.vue'
import VerifyStep02 from '@/design/view/verify/step02.vue'
import VerifyStep03 from '@/design/view/verify/step03.vue'
import VerifyStep04 from '@/design/view/verify/step04.vue'
import VerifyStep05 from '@/design/view/verify/step05.vue'
import VerifyStep06 from '@/design/view/verify/step06.vue'
import VerifyStep07 from '@/design/view/verify/step07.vue'

//오늘은?, Focus Task
import Today from '@/design/view/today/index.vue'
import TodayTask from '@/design/view/today/task.vue'

//CarePlan
import CarePlanIntro from '@/design/view/carePlan/intro.vue'
import CarePlan from '@/design/view/carePlan/carePlan.vue'
import CarePlanDetail from '@/design/view/carePlan/carePlanDetail.vue'

//Guide
import guideDetail from '@/design/view/guide/guideDetail.vue'

//Management
import Management from '@/design/view/management/index.vue'
import ManagementBloodPressure from '@/design/view/management/bloodPressure.vue'
import ManagementWeight from '@/design/view/management/weight.vue'
import ManagementNutrition from '@/design/view/management/nutrition.vue'
import ManagementNutritionPopup from '@/design/view/management/nutritionPopup.vue'

//Account
import Account from '@/design/view/account/index.vue'
import Profile from '@/design/view/account/profile.vue'

//Setting
import Setting from '@/design/view/settings/index.vue'
import SettingAlarm from '@/design/view/settings/alarm.vue'
import SettingFont from '@/design/view/settings/font.vue'
import SettingLanguage from '@/design/view/settings/language.vue'
import SettingTerm from '@/design/view/settings/term.vue'
import SettingTermText from '@/design/view/settings/termText.vue'
import SettingPrivacyText from '@/design/view/settings/privacyText.vue'

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
      },
      {
        path: 'step05',
        component: NonVerifyStep05
      },
      {
        path: 'step06',
        component: NonVerifyStep06
      },
      {
        path: 'step07',
        component: NonVerifyStep07
      },
      {
        path: 'step08',
        component: NonVerifyStep08
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
    ]
  },
  {
    //오늘은?
    path: '/today',
    component: () => import('@/design/layout/ContentLayout.vue'),
    children: [
      {
        path: 'index',
        component: Today
      },
      {
        path: 'task',
        component: TodayTask
      }
    ]
  },
  {
    //care plan
    path: '/carePlan',
    component: () => import('@/design/layout/ContentLayout.vue'),
    children: [
      {
        path: 'intro',
        component: CarePlanIntro
      },
      {
        path: 'carePlan',
        component: CarePlan
      },
      {
        path: 'carePlanDetail',
        component: CarePlanDetail
      }
    ]
  },
  {
    //guide
    path: '/guide',
    component: () => import('@/design/layout/ContentLayout.vue'),
    children: [
      // {
      //   path: 'intro',
      //   component: CarePlanIntro
      // },
      // {
      //   path: 'carePlan',
      //   component: CarePlan
      // },
      {
        path: 'guideDetail',
        component: guideDetail
      }
    ]
  },
  {
    //Management
    path: '/management',
    component: () => import('@/design/layout/ContentLayout.vue'),
    children: [
      {
        path: 'index',
        component: Management
      },
      {
        path: 'bloodPressure',
        component: ManagementBloodPressure
      },
      {
        path: 'weight',
        component: ManagementWeight
      },
      {
        path: 'nutrition',
        component: ManagementNutrition
      },
      {
        path: 'nutritionPopup',
        component: ManagementNutritionPopup
      }
    ]
  },
  {
    //Account
    path: '/account',
    component: () => import('@/design/layout/ContentLayout.vue'),
    children: [
      {
        path: 'index',
        component: Account
      },
      {
        path: 'profile',
        component: Profile
      }
    ]
  },
  {
    //Setting
    path: '/setting',
    component: () => import('@/design/layout/ContentLayout.vue'),
    children: [
      {
        path: 'index',
        component: Setting
      },
      {
        path: 'alarm',
        component: SettingAlarm
      },
      {
        path: 'font',
        component: SettingFont
      },
      {
        path: 'language',
        component: SettingLanguage
      },
      {
        path: 'term',
        component: SettingTerm
      },
      {
        path: 'termText',
        component: SettingTermText
      },
      {
        path: 'privacyText',
        component: SettingPrivacyText
      }
    ]
  },
  {
    //검색
    path: '/search',
    component: () => import('@/design/view/search/index.vue')
  },
  {
    //로그인
    path: '/login',
    component: () => import('@/design/view/login/index.vue')
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
