<script setup lang="ts">
import uniqueId from 'lodash.uniqueid'
import ReportOutput from '../FormComponents/ReportOutput.vue'
import { useReportStore } from '@/stores/reportStore'
import { storeToRefs } from 'pinia'
// import reportOutputsArray from '../../assets/reportOutputsArray'

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
  }]
</script>

<template>
  <report-output v-for="output in reportOutputsArray" :class="output.class" :key=output.id>
    <template #top> {{ output.label }}</template>
    <template #bottom> {{ output.variable }}</template>
  </report-output>
</template>
