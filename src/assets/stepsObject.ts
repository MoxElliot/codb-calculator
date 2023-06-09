import startHereIcon from '../images/start-here-step-icon-inactive.png'
import fixedCostIcon from '../images/fixed-cost-step-icon-inactive.png'
import variableCostIcon from '../images/variable-cost-step-icon-inactive.png'
import bookingIncomeIcon from '../images/booking-income-step-icon-inactive.png'
import ownersDrawIcon from '../images/owners-draw-step-icon-inactive.png'
import finalReportIcon from '../images/final-report-step-icon-inactive.png'

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
    icon: startHereIcon
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
