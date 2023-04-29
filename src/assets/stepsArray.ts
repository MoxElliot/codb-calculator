import uniqueId from 'lodash.uniqueid'

const stepsArray: { id: string; path: string; name: string }[] = [
  { id: uniqueId('steps-'), path: '/', name: 'Home' },
  { id: uniqueId('steps-'), path: '/company-name-step', name: 'Company Name' },
  { id: uniqueId('steps-'), path: '/fixed-cost-step', name: 'Fixed Cost' },
  { id: uniqueId('steps-'), path: '/variable-cost-step', name: 'Variable Cost' },
  { id: uniqueId('steps-'), path: '/booking-income-step', name: 'Booking Income' },
  { id: uniqueId('steps-'), path: '/owner-draw-step', name: 'Owner Draw' },
  { id: uniqueId('steps-'), path: '/user-email-step', name: 'User Email' },
  { id: uniqueId('steps-'), path: '/final-report-step', name: 'Final Report' }
]

export default stepsArray
