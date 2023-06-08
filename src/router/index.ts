import { createRouter, createWebHistory } from 'vue-router'
import Cobd from '../components/views/Cobd.vue'
import Home from '../components/StepComponents/Home.vue'
import CompanyNameStep from '../components/StepComponents/CompanyNameStep.vue'
import FixedCostStep from '../components/StepComponents/FixedCostStep.vue'
import VariableCostStep from '../components/StepComponents/VariableCostStep.vue'
import BookingIncomeStep from '../components/StepComponents/BookingIncomeStep.vue'
import OwnerDrawStep from '../components/StepComponents/OwnerDrawStep.vue'
import UserEmailStep from '../components/StepComponents/UserEmailStep.vue'
import FinalReportStep from '../components/StepComponents/FinalReportStep.vue'
import steps from '../assets/stepsObject'

declare module 'vue-router' {
  interface RouteMeta {
    // is optional
    next: string
    // must be declared by every route
    previous: string
  }
}

const routes = [
  /// add name property
  {
    path: '/',
    component: Cobd,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { next: '/company-name-step', previous: '/' }
      },
      {
        path: '/company-name-step',
        name: 'CompanyName',
        component: CompanyNameStep,
        meta: { next: '/fixed-cost-step', previous: '/' }
      },
      {
        path: '/fixed-cost-step',
        name: 'FixedCost',
        component: FixedCostStep,
        meta: { next: '/variable-cost-step', previous: '/company-name-step' }
      },
      {
        path: '/variable-cost-step',
        name: 'VariableCost',
        component: VariableCostStep,
        meta: { next: '/booking-income-step', previous: '/fixed-cost-step' }
      },
      {
        path: '/booking-income-step',
        name: 'BookingIncome',
        component: BookingIncomeStep,
        meta: { next: '/owner-draw-step', previous: '/variable-cost-step' }
      },
      {
        path: '/owner-draw-step',
        name: 'OwnerDraw',
        component: OwnerDrawStep,
        meta: { next: '/user-email-step', previous: '/booking-income-step' }
      },
      {
        path: '/user-email-step',
        name: 'UserEmail',
        component: UserEmailStep,
        meta: { next: '/final-report-step', previous: '/owner-draw-step' }
      },
      {
        path: '/final-report-step',
        name: 'FinalReport',
        component: FinalReportStep,
        meta: { next: '/final-report-step', previous: '/user-email-step' }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
