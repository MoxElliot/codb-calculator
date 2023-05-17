<script setup lang="ts">
import { useReportStore } from '@/stores/reportStore'
import { storeToRefs } from 'pinia'
import ReportOutput from '../FormComponents/ReportOutput.vue'

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
    class="text-xl" 
    #="{ text }" 
    label="Final Report"
  >
    {{ text }}
  </report-output>
  <report-output class="flex" 
    #="{ text, text2 }" 
    label="Company Name:" 
    :variable="companyName"
  >
    {{ text }} {{ text2 }}
  </report-output>
  <report-output
    #="{ text, text2 }"
    label="Your Yearly Variable Costs"
    :variable="averageYearlyAction(totalFixedCosts)"
  >
    {{ text }} {{ text2 }}
  </report-output>
  <report-output
    #="{ text, text2 }"
    label="Your Yearly Fixed Costs"
    :variable="averageYearlyAction(totalVariableCosts)"
  >
    {{ text }} {{ text2 }}
  </report-output>
  <report-output
    #="{ text, text2 }"
    label="Owners Draw (Yearly Salary)"
    :variable="averageYearlyAction(payPerMonth)"
  >
    {{ text }} {{ text2 }}
  </report-output>
  <report-output
    #="{ text, text2 }"
    label="Your Yearly Savings"
    :variable="averageYearlyAction(savingsPerMonth)"
  >
    {{ text }} {{ text2 }}
  </report-output>
  <report-output #="{ text, text2 }" label="Cost of Doing Business" :variable="costOfDoingBusiness">
    {{ text }} {{ text2 }}
  </report-output>
  <report-output
    #="{ text, text2 }"
    label="Number of Yearly Bookings to Break Even"
    :variable="bookingsToBreakEven"
  >
    {{ text }} {{ text2 }}
  </report-output>
  <report-output
    #="{ text, text2 }"
    label="Average Yearly Bookings"
    :variable="averageYearlyAction(bookingsPerMonth)"
  >
    {{ text }} {{ text2 }}
  </report-output>
  <report-output
    #="{ text, text2 }"
    label="Average Hours Worked Per Year"
    :variable="averageYearlyAction(hoursAveragePerBooking * bookingsPerMonth)"
  >
    {{ text }} {{ text2 }}
  </report-output>
  <report-output
    #="{ text, text2 }"
    label="Your Hourly Rate"
    :variable="averageYearlyAction(averageMonthlyHourlyRate)"
  >
    {{ text }} {{ text2 }}
  </report-output>
  <report-output
    #="{ text, text2 }"
    label="Your Average Yearly Income"
    :variable="averageYearlyIncome"
  >
    {{ text }} {{ text2 }}
  </report-output>
</template>
