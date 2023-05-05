<script setup lang="ts">
import { useReportStore } from '@/stores/reportStore'
import { storeToRefs } from 'pinia'

//should fixed costs be multiplied by 12 as they are not reoccuring??

const reportStore = useReportStore()

const {
  companyName,
  bookingsPerMonth,
  hoursAveragePerBooking,
  totalVariableCosts,
  totalFixedCosts,
  payPerMonth,
  savingsPerMonth,
} = storeToRefs(reportStore)

const {
  averageYearly,
  costOfDoingBusiness,
  bookingsToBreakEven,
  averageMonthlyHourlyRate,
  averageMonthlyIncome
} = reportStore
</script>

<template>
  <div class="m-3">
    <h4>Final Report Step</h4>
  </div>
  <div class="m-3">
    <p>Company Name: {{ companyName }}</p>
  </div>
  <div class="m-3">
    <p>Your Yearly Variable Costs</p>
    <p>{{ averageYearly(totalVariableCosts) }}</p>
    <p>Your Yearly Fixed Costs</p>
    <p>{{ totalFixedCosts }}</p>
  </div>
  <div class="m-3">
    <div>
      <p>Your Yearly Savings</p>
      <p>{{ averageYearly(savingsPerMonth) }}</p>
    </div>
    <div>
      <p>Owners Draw (Yearly Salary)</p>
      <p>{{ averageYearly(payPerMonth) }}</p>
    </div>
    <div>
      <p>{{ companyName }}'s Cost of Doing Business'</p>
      <p>${{ costOfDoingBusiness }}</p>
    </div>
  </div>
  <div class="m-3">
    <div>
      <p>Number of Yearly Bookings to Break Even</p>
      <p>{{ averageYearly(bookingsToBreakEven) }}</p>
    </div>
    <div>
      <p>Average Yearly Bookings</p>
      <p>{{ averageYearly(bookingsPerMonth) }}</p>
    </div>
    <div>
      <p>Average Hours Worked Per Year</p>
      <p>
        {{ averageYearly(hoursAveragePerBooking * bookingsPerMonth) }}
      </p>
    </div>
    <div>
      <p>Your Hourly Rate</p>
      <p>${{ averageYearly(averageMonthlyHourlyRate) }}</p>
    </div>
    <div>
      <p>Your Average Yearly Income</p>
      <p>${{ averageYearly(averageMonthlyIncome) }}</p>
    </div>
  </div>
</template>
