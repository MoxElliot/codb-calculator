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

//Cannot move array to seperate file because the state values from report store used as variables here need to be imported in

const reportOutputsArray: { id: string; class: string; label: string; variable: any }[] = [
  {
    id: 'companyName', 
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
  <div class="flex flex-col basis-full justify-center items-center text-center">
    <div
      class="flex flex-row justify-center items-center text-heading2_xs md:text-heading text-grey-300 font-serif md:basis-1/6 md:w-6/10 md:mb-8"
    >
      <p class="">
        Final CoBD Report For <span>{{ companyName }}</span>
      </p>
      <img
        src="../../images/fixed-cost-calandar.svg"
        alt="Calandar"
        class="hidden sm:inline sm:px-3"
      />
    </div>
    <div class="text-grey-300 text-body2_xs md:text-body2 basis-1/6 w-8/10 md:w-6/10">
      <p>You did it! Your CobD Calculation is Complete!</p>
      <p>See the final report below!</p>
    </div>
    <div class="basis-full flex flex-col items-start justify-center w-6/10 sm:w-5/10">
      <div class="font-sans text-grey-300 text-body mt-2 md:mt-6 px-6">
        <div class="overflow-auto">
          <report-output
            v-for="output in reportOutputsArray"
            :class="output.class"
            :key="output.id"
          >
            <template #top> {{ output.label }}</template>
            <template #bottom> {{ output.variable }}</template>
          </report-output>
        </div>
      </div>
    </div>
  </div>
</template>
