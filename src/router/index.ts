import { createRouter, createWebHashHistory } from 'vue-router'

// What each map item looks like
//     path: '/company-name-step',
//     name: 'Company Name Step',
//     component: () =>
//       import(/* webpackChunkName: "about" */ '../components/views/CompanyNameStep.vue')
//   },

const steps = [
  { path: '/', name: 'Home' },
  { path: '/company-name-step', name: 'Company Name Step' },
  { path: '/fixed-cost-step', name: 'Fixed Cost Step' },
  { path: '/variable-cost-step', name: 'Variable Cost Step' },
  { path: '/booking-income-step', name: 'Booking Income Step' },
  { path: '/owner-draw-step', name: 'Owner Draw Step' },
  { path: '/final-report-step', name: 'Final Report Step' }
]

const routes = steps.map((step) =>
  step.path === '/'
    ? {
        path: <string>`${step.path}`,
        name: <string>`${step.name}`,
        component: <any>`${step.name.replace(/\s/g, '')}`
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
