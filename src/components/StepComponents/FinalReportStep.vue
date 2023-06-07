<script setup lang="ts">
import ReportOutput from '../FormComponents/ReportOutput.vue'
import { useReportStore } from '@/stores/reportStore'
import { storeToRefs } from 'pinia'
// import reportOutputsArray from '../../assets/reportOutputsArray'

const reportStore = useReportStore()

const { companyName } = storeToRefs(reportStore)

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

//put this array in the store

const reportOutputsArray: { id: string; class: string; label: string; variable: any }[] = [
  // {
  //   id: uniqueId('output-'),
  //   class: 'text-caption-bold',
  //   label: 'Final Report',
  //   variable: ''
  // },
  {
    id: 'companyName', //pull out this and use the index or stepname
    class: 'flex',
    label: 'Company Name:',
    variable: companyName
  },
  {
    id: 'fixedCostYearly',
    class: 'flex',
    label: 'Your Yearly Fixed Costs:',
    variable: fixedCostYearly
  },
  {
    id: 'variableCostYearly',
    class: 'flex',
    label: 'Your Yearly Variable Costs:',
    variable: variableCostYearly
  },
  {
    id: 'payYearly',
    class: 'flex',
    label: 'Owners Draw (Yearly Salary):',
    variable: payYearly
  },
  {
    id: 'savingsYearly',
    class: 'flex',
    label: 'Your Yearly Savings:',
    variable: savingsYearly
  },
  {
    id: 'costOfDoingBusiness',
    class: 'flex',
    label: 'Cost of Doing Business:',
    variable: costOfDoingBusiness
  },
  {
    id: 'bookingsToBreakEven',
    class: 'flex',
    label: 'Number of Yearly Bookings to Break Even:',
    variable: bookingsToBreakEven
  },
  {
    id: 'bookingsYearly',
    class: 'flex',
    label: 'Average Yearly Bookings:',
    variable: bookingsYearly
  },
  {
    id: 'hoursWorkedYearly',
    class: 'flex',
    label: 'Average Hours Worked Per Year:',
    variable: hoursWorkedYearly
  },
  {
    id: 'hourlyRateYearly',
    class: 'flex',
    label: 'Your Hourly Rate:',
    variable: hourlyRateYearly
  },
  {
    id: 'averageYearlyIncome',
    class: 'flex',
    label: 'Your Average Yearly Income:',
    variable: averageYearlyIncome
  }
]
</script>

<template>
  <div class="basis-full flex flex-col justify-center items-center">
    <div class="text-caption-bold">
      <p>Final Report</p>
    </div>
    <div class="overflow-auto">
      <report-output v-for="output in reportOutputsArray" :class="output.class" :key="output.id">
        <template #top> {{ output.label }}</template>
        <template #bottom> {{ output.variable }}</template>
      </report-output>
    </div>
  </div>
</template>
