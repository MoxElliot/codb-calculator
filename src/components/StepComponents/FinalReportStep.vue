<script setup lang="ts">
import { useReportStore } from '@/stores/reportStore'
import { storeToRefs } from 'pinia'
import ReportOutput from '../FormComponents/ReportOutput.vue'
import  reportOutputsArray from '../../assets/reportOutputsArray'
import { ref } from 'vue'

const reportStore = useReportStore()

const {
  companyName,
  userEmail,
  bookingsPerMonth,
  hoursAveragePerBooking,
  totalVariableCosts,
  totalFixedCosts,
  payPerMonth,
  savingsPerMonth
} = storeToRefs(reportStore)

const {
  averageYearlyAction,
  costOfDoingBusiness,
  bookingsToBreakEven, 
  averageMonthlyHourlyRate,
  averageYearlyIncome
} = reportStore

</script>

<template>
  <report-output 
    v-for="output in reportOutputsArray"
    :class=output.class
    #="{text1, text2}"
    :label=output.label
    :key=output.id
  >
    {{output.body[0]}} {{ output.body[1] }}
  </report-output>
  <report-output 
    class="text-xl" 
    #="{ text1 }" 
    label="Final Report"
  >
    {{ text1 }}
  </report-output>
  <report-output class="flex" 
    #="{ text1, text2 }" 
    label="Company Name:" 
    :variable="companyName"
  >
    {{ text1 }} {{ text2 }}
  </report-output>
  <report-output
    #="{ text1, text2 }"
    label="Your Yearly Variable Costs"
    :variable="averageYearlyAction(totalFixedCosts)"
  >
    {{ text1 }} {{ text2 }}
  </report-output>
  <report-output
    #="{ text1, text2 }"
    label="Your Yearly Fixed Costs"
    :variable="averageYearlyAction(totalVariableCosts)"
  >
    {{ text1 }} {{ text2 }}
  </report-output>
  <report-output
    #="{ text1, text2 }"
    label="Owners Draw (Yearly Salary)"
    :variable="averageYearlyAction(payPerMonth)"
  >
    {{ text1 }} {{ text2 }}
  </report-output>
  <report-output
    #="{ text1, text2 }"
    label="Your Yearly Savings"
    :variable="averageYearlyAction(savingsPerMonth)"
  >
    {{ text1 }} {{ text2 }}
  </report-output>
  <report-output #="{ text1, text2 }" label="Cost of Doing Business" :variable="costOfDoingBusiness">
    {{ text1 }} {{ text2 }}
  </report-output>
  <report-output
    #="{ text1, text2 }"
    label="Number of Yearly Bookings to Break Even"
    :variable="bookingsToBreakEven"
  >
    {{ text1 }} {{ text2 }}
  </report-output>
  <report-output
    #="{ text1, text2 }"
    label="Average Yearly Bookings"
    :variable="averageYearlyAction(bookingsPerMonth)"
  >
    {{ text1 }} {{ text2 }}
  </report-output>
  <report-output
    #="{ text1, text2 }"
    label="Average Hours Worked Per Year"
    :variable="averageYearlyAction(hoursAveragePerBooking * bookingsPerMonth)"
  >
    {{ text1 }} {{ text2 }}
  </report-output>
  <report-output
    #="{ text1, text2 }"
    label="Your Hourly Rate"
    :variable="averageYearlyAction(averageMonthlyHourlyRate)"
  >
    {{ text1 }} {{ text2 }}
  </report-output>
  <report-output
    #="{ text1, text2 }"
    label="Your Average Yearly Income"
    :variable="averageYearlyIncome"
  >
    {{ text1 }} {{ text2 }}
  </report-output>
</template>
