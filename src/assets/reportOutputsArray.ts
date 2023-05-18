import uniqueId from 'lodash.uniqueid'

const reportOutputsArray: {id: string; class: string; slot:string; label: string; variable: string; body:string}[] = [
  {
    id: uniqueId('output-'),
    class: 'text-xl',
    slot: '{text}',
    label: 'Final Report',
    variable: '',
    body: '{{text}}'
  },
  {
    id: uniqueId('output-'),
    class: 'flex',
    slot: '{text, text2}',
    label: 'Company Name:',
    variable: 'companyName',
    body: '{{text}}, {{text2}}'
  },
  {
    id: uniqueId('output-'),
    class: '',
    slot: '{text, text2}',
    label: 'Your Yearly Fixed Costs',
    variable: 'averageYearlyAction(totalFixedCosts)',
    body: '{{text}}, {{text2}}'
  },
  {
    id: uniqueId('output-'),
    class: '',
    slot: '{text, text2}',
    label: 'Your Yearly Variable Costs',
    variable: 'averageYearlyAction(totalVariableCosts)',
    body: '{{text}}, {{text2}}'
  },
  {
    id: uniqueId('output-'),
    class: '',
    slot: '{text, text2}',
    label: 'Owners Draw (Yearly Salary)',
    variable: 'averageYearlyAction(payPerMonth)',
    body: '{{text}}, {{text2}}'
  },
  {
    id: uniqueId('output-'),
    class: '',
    slot: '{text, text2}',
    label: 'Your Yearly Savings',
    variable: 'averageYearlyAction(savingsPerMonth)',
    body: '{{text}}, {{text2}}'
  },
  {
    id: uniqueId('output-'),
    class: '',
    slot: '{text, text2}',
    label: 'Cost of Doing Business',
    variable: 'costOfDoingBusiness',
    body: '{{text}}, {{text2}}'
  },
  {
    id: uniqueId('output-'),
    class: '',
    slot: '{text, text2}',
    label: 'Number of Yearly Bookings to Break Even',
    variable: 'bookingsToBreakEven',
    body: '{{text}}, {{text2}}'
  },
  {
    id: uniqueId('output-'),
    class: '',
    slot: '{text, text2}',
    label: 'Average Yearly Bookings',
    variable: 'averageYearlyAction(bookingsPerMonth)',
    body: '{{text}}, {{text2}}'
  },
  {
    id: uniqueId('output-'),
    class: '',
    slot: '{text, text2}',
    label: 'Average Hours Worked Per Year',
    variable: 'averageYearlyAction(hoursAveragePerBooking * bookingsPerMonth)',
    body: '{{text}}, {{text2}}'
  },
  {
    id: uniqueId('output-'),
    class: '',
    slot: '{text, text2}',
    label: 'Your Hourly Rate',
    variable: 'averageYearlyAction(averageMonthlyHourlyRate)',
    body: '{{text}}, {{text2}}'
  },
  {
    id: uniqueId('output-'),
    class: '',
    slot: '{text, text2}',
    label: 'Your Average Yearly Income',
    variable: 'averageYearlyIncome',
    body: '{{text}}, {{text2}}'
  }
]
export default reportOutputsArray