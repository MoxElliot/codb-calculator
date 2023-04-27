<script setup lang="ts">
import { useCompanyStore } from '@/stores/companyStore'
import { useBookingIncomeStore } from '@/stores/bookingIncomeStore'
import { useOwnersDrawStore } from '@/stores/ownersDrawStore'
import FixedCostTable from '../FixedCostsComponents/FixedCostTable.vue'
import VariableCostTable from '../VariableCostsComponents/VariableCostTable.vue'

//The below data is temporary code to test the pinia store data flow for each data item.
const bookingIncomeStore = useBookingIncomeStore()
const ownersDrawStore = useOwnersDrawStore()
const companyStore = useCompanyStore()
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
      <p>Bookings per Month</p>
      <p>{{ bookingIncomeStore.bookingsPerMonth }}</p>
    </div>
    <div>
      <p>Average Price Per Booking</p>
      <p>${{ bookingIncomeStore.priceAveragePerBooking }}</p>
    </div>
    <div>
      <p>Average Hours Worked Per Booking</p>
      <p>{{ bookingIncomeStore.hoursAveragePerBooking }}</p>
    </div>
    <div>
      <p>Personal Income Per Month</p>
      <p>${{ ownersDrawStore.incomePerMonth }}</p>
    </div>
    <div>
      <p>Personal Savings Per Month</p>
      <p>${{ ownersDrawStore.savingsPerMonth }}</p>
    </div>
  </div>
</template>
