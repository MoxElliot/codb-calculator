import uniqueId from 'lodash.uniqueid'

const stepsArray: { id: string; path: string; name: string }[] = [
  { id: uniqueId('steps-'), path: '/', name: 'Home' },
  { id: uniqueId('steps-'), path: '/company-name-step', name: 'Company Name Step' },
  { id: uniqueId('steps-'), path: '/fixed-cost-step', name: 'Fixed Cost Step' },
  { id: uniqueId('steps-'), path: '/variable-cost-step', name: 'Variable Cost Step' },
  { id: uniqueId('steps-'), path: '/booking-income-step', name: 'Booking Income Step' },
  { id: uniqueId('steps-'), path: '/owner-draw-step', name: 'Owner Draw Step' },
  { id: uniqueId('steps-'), path: '/final-report-step', name: 'Final Report Step' }
]

export default stepsArray
