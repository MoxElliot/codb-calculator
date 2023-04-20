import { createRouter, createWebHistory } from 'vue-router'
import CobdForm from '../components/CodbForm.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: CobdForm
  },
  {
    path: '/company-name-step',
    name: 'Company Name Step',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../components/views/CompanyNameStep.vue')
  },
  {
    path: '/fixed-cost-step',
    name: 'Fixed Cost Step',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/views/FixedCostStep.vue')
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
