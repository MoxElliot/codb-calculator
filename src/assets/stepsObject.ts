import companyNameIcon from '../images/company-name-step-icon-inactive.svg'
import fixedCostIcon from '../images/fixed-cost-step-icon-inactive.svg'
import variableCostIcon from '../images/variable-cost-step-icon-inactive.svg'
import bookingIncomeIcon from '../images/booking-income-step-icon-inactive.svg'
import ownersDrawIcon from '../images/owners-draw-step-icon-inactive.svg'
import finalReportIcon from '../images/final-report-step-icon-inactive.svg'

let steps: {[index: string]: {name?: string, number?:string, next: string, current:string, previous:string, icon:string}}

steps = {
  'Home': {
    next: '/company-name-step',
    current: '/',
    previous: 'none',
    icon: 'none'
  },
  'CompanyName': {
    name: 'Start Here',
    number: 'Step 1/6',
    next: '/fixed-cost-step',
    current: '/company-name-step',
    previous: '/',
    icon: companyNameIcon
  },
  'FixedCost': {
    name: 'Fixed Costs',
    number: 'Step 2/6',
    next: '/variable-cost-step',
    current: '/fixed-cost-step',
    previous: '/company-name-step',
    icon: fixedCostIcon
  },
  'VariableCost': {
    name: 'Variable Cost',
    number: 'Step 3/6',
    next: '/booking-income-step',
    current: '/variable-cost-step',
    previous: '/fixed-cost-step',
    icon: variableCostIcon
  },
  'BookingIncome': {
    name: 'Booking Income',
    number: 'Step 4/6',
    next: '/owner-draw-step',
    current: '/booking-income-step',
    previous: '/variable-cost-step',
    icon: bookingIncomeIcon
  },
  'OwnerDraw': {
    name: 'Owner\'s Draw',
    number: 'Step 5/6',
    next: '/user-email-step',
    current: '/owner-draw-step',
    previous: '/booking-income-step',
    icon: ownersDrawIcon
  },
  'UserEmail': {
    next: '/final-report-step',
    number: 'Step 6/6',
    current: '/user-email-step',
    previous: '/owner-draw-step',
    icon: 'none'
  },
  'FinalReport': {
    name: 'Final Report',
    next: 'none',
    current: '/final-report-step',
    previous: '/owner-draw-step',
    icon: finalReportIcon
  }
}

export default steps
