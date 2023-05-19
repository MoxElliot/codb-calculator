import uniqueId from 'lodash.uniqueid'
import { createPinia, storeToRefs } from 'pinia'
import { useReportStore } from '@/stores/reportStore'
import { createApp } from 'vue'
import App from '../App.vue'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)

const reportStore = useReportStore()

const {
  companyName,
} = storeToRefs(reportStore)

const {
  costOfDoingBusiness,
  bookingsToBreakEven,
  averageYearlyIncome,
  fixedCostYearly,
  variableCostYearly,
  payYearly,
  savingsYearly,
  bookingsYearly,
  hoursWorkedYearly,
  hourlyRateYearly
} = reportStore

const reportOutputsArray: { id: string; class: string; label: string; variable: any }[] = [
  {
    id: uniqueId('output-'),
    class: 'text-xl',
    label: 'Final Report',
    variable: ''
  },
  {
    id: uniqueId('output-'),
    class: 'flex',
    label: 'Company Name:',
    variable: companyName
  },
  {
    id: uniqueId('output-'),
    class: '',
    label: 'Your Yearly Fixed Costs',
    variable: fixedCostYearly
  },
  {
    id: uniqueId('output-'),
    class: '',
    label: 'Your Yearly Variable Costs',
    variable: variableCostYearly
  },
  {
    id: uniqueId('output-'),
    class: '',
    label: 'Owners Draw (Yearly Salary)',
    variable: payYearly
  },
  {
    id: uniqueId('output-'),
    class: '',
    label: 'Your Yearly Savings',
    variable: savingsYearly
  },
  {
    id: uniqueId('output-'),
    class: '',
    label: 'Cost of Doing Business',
    variable: costOfDoingBusiness
  },
  {
    id: uniqueId('output-'),
    class: '',
    label: 'Number of Yearly Bookings to Break Even',
    variable: bookingsToBreakEven
  },
  {
    id: uniqueId('output-'),
    class: '',
    label: 'Average Yearly Bookings',
    variable:  bookingsYearly
  },
  {
    id: uniqueId('output-'),
    class: '',
    label: 'Average Hours Worked Per Year',
    variable:  hoursWorkedYearly
  },
  {
    id: uniqueId('output-'),
    class: '',
    label: 'Your Hourly Rate',
    variable: hourlyRateYearly
  },
  {
    id: uniqueId('output-'),
    class: '',
    label: 'Your Average Yearly Income',
    variable: averageYearlyIncome
  }
]
export default reportOutputsArray
