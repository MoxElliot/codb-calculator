import { createRouter, createWebHashHistory } from 'vue-router'
import steps from '../assets/stepsArray'

// What each map item looks like
//  {
//     path: '/company-name-step',
//     name: 'Company Name Step',
//     component: () =>
//       import('../components/views/CompanyNameStep.vue')
//   },

const routes = steps.map((step) =>
  step.path === '/'
    ? {
        path: <string>`${step.path}`,
        name: <string>`${step.name}`,
        component: <any>`${step.name}`
      }
    : {
        path: <string>`${step.path}`,
        name: <string>`${step.name}`,
        component: () => import(`../components/views/${step.name.replace(/\s/g, '')}.vue`)
      }
)

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router
