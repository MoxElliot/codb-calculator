import uniqueId from 'lodash.uniqueid'

const stepsArray: { id: string; current: string; name: string; next?: string; previous?: string }[] = [
  { 
    name: 'Home', 
    id: uniqueId('steps-'), 
    current: '/', 
    next: '/company-name-step' 
  },
  {
    name: 'Company Name',
    id: uniqueId('steps-'),
    current: '/company-name-step',
    next: '/fixed-cost-step',
    previous: '/'
  },
  {
    name: 'Fixed Cost',
    id: uniqueId('steps-'),
    current: '/fixed-cost-step',
    next: '/variable-cost-step',
    previous: '/company-name-step'
  },
  {
    name: 'Variable Cost',
    id: uniqueId('steps-'),
    current: '/variable-cost-step',
    next: '/booking-income-step',
    previous: '/fixed-cost-step'
  },
  {
    name: 'Booking Income',
    id: uniqueId('steps-'),
    current: '/booking-income-step',
    next: '/owner-draw-step',
    previous: '/variable-cost-step'
  },
  {
    name: 'Owner Draw',
    id: uniqueId('steps-'),
    current: '/owner-draw-step',
    next: '/user-email-step',
    previous: '/booking-income-step'
  },
  {
    name: 'User Email',
    id: uniqueId('steps-'),
    current: '/user-email-step',
    next: '/final-report-step',
    previous: '/owner-draw-step'
  },
  {
    name: 'Final Report',
    id: uniqueId('steps-'),
    current: '/final-report-step',
    previous: '/user-email-step'
  }
]

export default stepsArray
