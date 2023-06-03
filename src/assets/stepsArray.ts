import uniqueId from 'lodash.uniqueid'
import startHereIcon from '../images/start-here-step-icon-inactive.png'
import fixedCostIcon from '../images/fixed-cost-step-icon-inactive.png'
import variableCostIcon from '../images/variable-cost-step-icon-inactive.png'
import bookingIncomeIcon from '../images/booking-income-step-icon-inactive.png'
import ownersDrawIcon from '../images/owners-draw-step-icon-inactive.png'
import finalReportIcon from '../images/final-report-step-icon-inactive.png'

// steps: {
//   stepOne: {
//     next: 'nextTwo',
//     prev: null,
//   },
//   stepTwo: {
//    next: 'nextThree',
//    prev: 'nextOne',
//   }
//  }

const steps = {
  Home: {
    next: '/company-name-step',
    current: '/',
    previous: 'none',
    icon: 'none'
  },
  CompanyName: {
    next: '/fixed-cost-step',
    current: '/company-name-step',
    previous: '/',
    icon: startHereIcon
  },
  FixedCost: {
    next: '/variable-cost-step',
    current: '/fixed-cost-step',
    previous: '/company-name-step',
    icon: fixedCostIcon
  },
  VariableCost: {
    next: '/booking-income-step',
    current: '/variable-cost-step',
    previous: '/fixed-cost-step',
    icon: variableCostIcon
  },
  BookingIncome: {
    next: '/owner-draw-step',
    current: '/booking-income-step',
    previous: '/variable-cost-step',
    icon: bookingIncomeIcon
  },
  OwnerDraw: {
    next: '/user-email-step',
    current: '/owner-draw-step',
    previous: '/booking-income-step',
    icon: ownersDrawIcon
  },
  UserEmail: {
    next: '/final-report-step',
    current: '/user-email-step',
    previous: '/owner-draw-step',
    icon: 'none'
  },
  FinalReport: {
    next: 'none',
    current: '/final-report-step',
    previous: '/owner-draw-step',
    icon: finalReportIcon
  }
}
// }
// const stepsArray: { id: string; path: string; name: string; next: string; previous: string; icon: string }[] = [
//   {
//     name: 'Home',
//     id: uniqueId('steps-'),
//     path: '/',
//     next: '/company-name-step',
//     previous: '/',
//     icon: 'none'
//   },
//   {
//     name: 'Company Name',
//     id: uniqueId('steps-'),
//     path: '/company-name-step',
//     next: '/fixed-cost-step',
//     previous: '/',
//     icon: startHereIcon
//   },
//   {
//     name: 'Fixed Cost',
//     id: uniqueId('steps-'),
//     path: '/fixed-cost-step',
//     next: '/variable-cost-step',
//     previous: '/company-name-step',
//     icon: fixedCostIcon
//   },
//   {
//     name: 'Variable Cost',
//     id: uniqueId('steps-'),
//     path: '/variable-cost-step',
//     next: '/booking-income-step',
//     previous: '/fixed-cost-step',
//     icon: variableCostIcon
//   },
//   {
//     name: 'Booking Income',
//     id: uniqueId('steps-'),
//     path: '/booking-income-step',
//     next: '/owner-draw-step',
//     previous: '/variable-cost-step',
//     icon: bookingIncomeIcon
//   },
//   {
//     name: 'Owner Draw',
//     id: uniqueId('steps-'),
//     path: '/owner-draw-step',
//     next: '/user-email-step',
//     previous: '/booking-income-step',
//     icon: ownersDrawIcon
//   },
//   {
//     name: 'User Email',
//     id: uniqueId('steps-'),
//     path: '/user-email-step',
//     next: '/final-report-step',
//     previous: '/owner-draw-step',
//     icon: 'none'
//   },
//   {
//     name: 'Final Report',
//     id: uniqueId('steps-'),
//     path: '/final-report-step',
//     next: '/final-report-step',
//     previous: '/user-email-step',
//     icon: finalReportIcon
//   }
// ]

export default steps
