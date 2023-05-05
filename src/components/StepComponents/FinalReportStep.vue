<script setup lang="ts">
import { useReportStore } from '@/stores/reportStore'

//should fixed costs be multiplied by 12 as they are not reoccuring??

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
    <p>{{ reportStore.averageYearly(reportStore.totalVariableCosts) }}</p>
    <p>Your Yearly Fixed Costs</p>
    <p>{{ reportStore.totalFixedCosts }}</p>
  </div>
  <div class="m-3">
    <div>
      <p>Your Yearly Savings</p>
      <p>{{ reportStore.averageYearly(reportStore.savingsPerMonth) }}</p>
    </div>
    <div>
      <p>Owners Draw (Yearly Salary)</p>
      <p>{{ reportStore.averageYearly(reportStore.payPerMonth) }}</p>
    </div>
    <div>
      <p>{{ reportStore.companyName }}'s Cost of Doing Business'</p>
      <p>${{ reportStore.costOfDoingBusiness }}</p>
    </div>
  </div>
  <div class="m-3">
    <div>
      <p>Number of Yearly Bookings to Break Even</p>
      <p>{{ reportStore.averageYearly(reportStore.bookingsToBreakEven) }}</p>
    </div>
    <div>
      <p>Average Yearly Bookings</p>
      <p>{{ reportStore.averageYearly(reportStore.bookingsPerMonth) }}</p>
    </div>
    <div>
      <p>Average Hours Worked Per Year</p>
      <p>
        {{
          reportStore.averageYearly(
            reportStore.hoursAveragePerBooking * reportStore.bookingsPerMonth
          )
        }}
      </p>
    </div>
    <div>
      <p>Your Hourly Rate</p>
      <p>${{ reportStore.averageYearly(reportStore.averageMonthlyHourlyRate) }}</p>
    </div>
    <div>
      <p>Your Average Yearly Income</p>
      <p>${{ reportStore.averageYearly(reportStore.averageMonthlyIncome) }}</p>
    </div>
  </div>
</template>
