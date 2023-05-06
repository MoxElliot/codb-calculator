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
  averageYearlyAction,
  costOfDoingBusiness,
  bookingsToBreakEven,
  averageMonthlyHourlyRate,
  averageYearlyIncome
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
    <p>{{ totalVariableCosts }}</p>
    <p>Your Yearly Fixed Costs</p>
    <p>{{ averageYearlyAction(totalFixedCosts) }}</p>
  </div>
  <div class="m-3">
    <div>
      <p>Your Yearly Savings</p>
      <p>{{ averageYearlyAction(savingsPerMonth) }}</p>
    </div>
    <div>
      <p>Owners Draw (Yearly Salary)</p>
      <p>{{ averageYearlyAction(payPerMonth) }}</p>
    </div>
    <div>
      <p>{{ companyName }}'s Cost of Doing Business'</p>
      <p>${{ costOfDoingBusiness }}</p>
    </div>
  </div>
  <div class="m-3">
    <div>
      <p>Number of Yearly Bookings to Break Even</p>
      <p>{{ bookingsToBreakEven }}</p>
    </div>
    <div>
      <p>Average Yearly Bookings</p>
      <p>{{ averageYearlyAction(bookingsPerMonth) }}</p>
    </div>
    <div>
      <p>Average Hours Worked Per Year</p>
      <p>
        {{ averageYearlyAction(hoursAveragePerBooking * bookingsPerMonth) }}
      </p>
    </div>
    <div>
      <p>Your Hourly Rate</p>
      <p>${{ averageYearlyAction(averageMonthlyHourlyRate) }}</p>
    </div>
    <div>
      <p>Your Average Yearly Income</p>
      <p>${{ averageYearlyIncome }}</p>
    </div>
  </div>
</template>
