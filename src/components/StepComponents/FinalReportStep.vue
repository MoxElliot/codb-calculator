<script setup lang="ts">
import { useCompanyStore } from '@/stores/companyStore'
import { useOwnersDrawStore } from '@/stores/ownersDrawStore'
import { useReportStore } from '@/stores/reportStore'
import FixedCostTable from '../FixedCostsComponents/FixedCostTable.vue'
import VariableCostTable from '../VariableCostsComponents/VariableCostTable.vue'

const ownersDrawStore = useOwnersDrawStore()
const companyStore = useCompanyStore()
const reportStore = useReportStore()
</script>
<template>
  <div class="m-3">
    <h4>Final Report Step</h4>
  </div>
  <div class="m-3">
    <p>Company Name: {{ companyStore.companyName }}</p>
  </div>
  <div class="m-3">
    <fixed-cost-table />
  </div>
  <div class="m-3">
    <variable-cost-table />
  </div>
  <div class="m-3">
    <div>
      <p>Your Yearly Savings</p>
      <p>${{ ownersDrawStore.savingsYearly }}</p>
    </div>
    <div>
      <p>Owners Draw (Yearly Salary)</p>
      <p>${{ ownersDrawStore.incomeYearly }}</p>
    </div>
    <div>
      <p>{{ companyStore.companyName }}'s Cost of Doing Business'</p>
      <p>${{ reportStore.costOfDoingBusiness }}</p>
    </div>
  </div>
  <div>
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
