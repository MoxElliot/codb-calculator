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

const routes = [
  {
    path: '/',
    component: Cobd,
    children: [
      { path: '/', component: Home },
      { path: '/company-name-step', component: CompanyNameStep },
      { path: '/fixed-cost-step', component: FixedCostStep },
      { path: '/variable-cost-step', component: VariableCostStep },
      { path: '/booking-income-step', component: BookingIncomeStep },
      { path: '/owner-draw-step', component: OwnerDrawStep },
      { path: '/user-email-step', component: UserEmailStep },
      { path: '/final-report-step', component: FinalReportStep }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
