import companyNameIcon from '../images/company-name-step-icon-inactive.svg'
import fixedCostIcon from '../images/fixed-cost-step-icon-inactive.svg'
import variableCostIcon from '../images/variable-cost-step-icon-inactive.svg'
import bookingIncomeIcon from '../images/booking-income-step-icon-inactive.svg'
import ownersDrawIcon from '../images/owners-draw-step-icon-inactive.svg'
import finalReportIcon from '../images/final-report-step-icon-inactive.svg'

let steps: {[index: string]: {next: string, current:string, previous:string, icon:string}}

steps = {
  'Home': {
    next: '/company-name-step',
    current: '/',
    previous: 'none',
    icon: 'none'
  },
  'CompanyName': {
    next: '/fixed-cost-step',
    current: '/company-name-step',
    previous: '/',
    icon: companyNameIcon
  },
  'FixedCost': {
    next: '/variable-cost-step',
    current: '/fixed-cost-step',
    previous: '/company-name-step',
    icon: fixedCostIcon
  },
  'VariableCost': {
    next: '/booking-income-step',
    current: '/variable-cost-step',
    previous: '/fixed-cost-step',
    icon: variableCostIcon
  },
  'BookingIncome': {
    next: '/owner-draw-step',
    current: '/booking-income-step',
    previous: '/variable-cost-step',
    icon: bookingIncomeIcon
  },
  'OwnerDraw': {
    next: '/user-email-step',
    current: '/owner-draw-step',
    previous: '/booking-income-step',
    icon: ownersDrawIcon
  },
  'UserEmail': {
    next: '/final-report-step',
    current: '/user-email-step',
    previous: '/owner-draw-step',
    icon: 'none'
  },
  'FinalReport': {
    next: 'none',
    current: '/final-report-step',
    previous: '/owner-draw-step',
    icon: finalReportIcon
  }
}

export default steps
