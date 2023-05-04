<script setup lang="ts">
import { useReportStore } from '@/stores/reportStore'

const reportStore = useReportStore()
</script>
<template>
  <div class="m-3">
    <h4>Final Report Step</h4>
  </div>
  <div class="m-3">
    <p>Company Name: {{ reportStore.companyName }}</p>
  </div>
  <div class="m-3">
    <p>Your Yearly Variable Costs</p>
    <p>${{ reportStore.averageYearlyVariableCosts }}</p>
    <p>Your Yearly Fixed Costs</p>
    <p>${{ reportStore.averageYearlyFixedCosts }}</p>
  </div>
  <div class="m-3">
    <div>
      <p>Your Yearly Savings</p>
      <p>${{ reportStore.averageYearlySavings }}</p>
    </div>
    <div>
      <p>Owners Draw (Yearly Salary)</p>
      <p>${{ reportStore.averageYearlyPay }}</p>
    </div>
    <div>
      <p>{{ reportStore.companyName }}'s Cost of Doing Business'</p>
      <p>${{ reportStore.costOfDoingBusiness }}</p>
    </div>
  </div>
  <div class="m-3">
    <div>
      <p>Number of Bookings to Break Even</p>
      <p>{{ reportStore.bookingsToBreakEven }}</p>
    </div>
    <div>
      <p>Average Yearly Bookings</p>
      <p>{{ reportStore.averageYearlyBookings }}</p>
    </div>
    <div>
      <p>Average Hours Worked Per Year</p>
      <p>{{ reportStore.hoursWorkedYearly }}</p>
    </div>
    <div>
      <p>Your Hourly Rate</p>
      <p>${{ reportStore.averageHourlyRate }}</p>
    </div>
    <div>
      <p>Your Average Yearly Income</p>
      <p>${{ reportStore.averageYearlyIncome }}</p>
    </div>
  </div>
</template>
