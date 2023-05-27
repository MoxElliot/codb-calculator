import uniqueId from 'lodash.uniqueid'
import startHereIcon from '../images/start-here-step-icon-inactive.png'
import fixedCostIcon from '../images/fixed-cost-step-icon-inactive.png'
import variableCostIcon from '../images/variable-cost-step-icon-inactive.png'
import bookingIncomeIcon from '../images/booking-income-step-icon-inactive.png'
import ownersDrawIcon from '../images/owners-draw-step-icon-inactive.png'
import finalReportIcon from '../images/final-report-step-icon-inactive.png'

// const stepsArray: {name: string; path:string}[] = [
//   {name: 'Home', path: '/'},
//   {name: 'Company Name', path:  '/company-name-step'},
//   {name: 'Fixed Cost', path:  '/fixed-cost-step'},
//   {name: 'Variable Cost', path: '/variable-cost-step'},
//   {name: 'Booking Income', path: '/booking-income-step'},
//   {name: 'Owner Draw', path: '/owner-draw-step'},
//   {name: 'User Email', path: '/user-email-step'},
//   {name: 'Final Report', path: '/final-report-step'},
// ]

const stepsArray: { id: string; path: string; name: string; next: string; previous: string; icon: string }[] = [
  {
    name: 'Home',
    id: uniqueId('steps-'),
    path: '/',
    next: '/company-name-step',
    previous: '/',
    icon: 'none'
  },
  {
    name: 'Company Name',
    id: uniqueId('steps-'),
    path: '/company-name-step',
    next: '/fixed-cost-step',
    previous: '/',
    icon: startHereIcon
  },
  {
    name: 'Fixed Cost',
    id: uniqueId('steps-'),
    path: '/fixed-cost-step',
    next: '/variable-cost-step',
    previous: '/company-name-step',
    icon: fixedCostIcon
  },
  {
    name: 'Variable Cost',
    id: uniqueId('steps-'),
    path: '/variable-cost-step',
    next: '/booking-income-step',
    previous: '/fixed-cost-step',
    icon: variableCostIcon
  },
  {
    name: 'Booking Income',
    id: uniqueId('steps-'),
    path: '/booking-income-step',
    next: '/owner-draw-step',
    previous: '/variable-cost-step',
    icon: bookingIncomeIcon
  },
  {
    name: 'Owner Draw',
    id: uniqueId('steps-'),
    path: '/owner-draw-step',
    next: '/user-email-step',
    previous: '/booking-income-step',
    icon: ownersDrawIcon
  },
  {
    name: 'User Email',
    id: uniqueId('steps-'),
    path: '/user-email-step',
    next: '/final-report-step',
    previous: '/owner-draw-step',
    icon: 'none'
  },
  {
    name: 'Final Report',
    id: uniqueId('steps-'),
    path: '/final-report-step',
    next: '/final-report-step',
    previous: '/user-email-step',
    icon: finalReportIcon
  }
]

export default stepsArray
