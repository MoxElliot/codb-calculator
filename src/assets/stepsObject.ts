import CompanyName from '../components/IconComponents/StepIcons/CompanyName.vue'
import FixedCost from '../components/IconComponents/StepIcons/FixedCost.vue'
import VariableCost from '../components/IconComponents/StepIcons/VariableCost.vue'
import BookingIncome from '../components/IconComponents/StepIcons/BookingIncome.vue'
import OwnersDraw from '../components/IconComponents/StepIcons/OwnersDraw.vue'
import FinalReport from '../components/IconComponents/StepIcons/FinalReport.vue'

let steps: {[index: string]: {name?: string, number?:string, next: string, current:string, previous:string, icon:any}}

steps = {
  'Home': {
    next: '/company-name-step',
    current: '/',
    previous: 'none',
    icon: ''
  },
  'CompanyName': {
    name: 'Start Here',
    number: 'Step 1/6',
    next: '/fixed-cost-step',
    current: '/company-name-step',
    previous: '/',
    icon: CompanyName
  },
  'FixedCost': {
    name: 'Fixed Costs',
    number: 'Step 2/6',
    next: '/variable-cost-step',
    current: '/fixed-cost-step',
    previous: '/company-name-step',
    icon: FixedCost
  },
  'VariableCost': {
    name: 'Variable Cost',
    number: 'Step 3/6',
    next: '/booking-income-step',
    current: '/variable-cost-step',
    previous: '/fixed-cost-step',
    icon: VariableCost
  },
  'BookingIncome': {
    name: 'Booking Income',
    number: 'Step 4/6',
    next: '/owner-draw-step',
    current: '/booking-income-step',
    previous: '/variable-cost-step',
    icon: BookingIncome
  },
  'OwnerDraw': {
    name: 'Owner\'s Draw',
    number: 'Step 5/6',
    next: '/user-email-step',
    current: '/owner-draw-step',
    previous: '/booking-income-step',
    icon: OwnersDraw
  },
  'UserEmail': {
    next: '/final-report-step',
    number: 'Step 6/6',
    current: '/user-email-step',
    previous: '/owner-draw-step',
    icon: ''
  },
  'FinalReport': {
    name: 'Final Report',
    next: 'none',
    current: '/final-report-step',
    previous: '/owner-draw-step',
    icon: FinalReport
  }
}

export default steps
