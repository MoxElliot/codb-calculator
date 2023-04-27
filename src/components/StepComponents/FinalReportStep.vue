<script setup lang="ts">
import { useReportStore } from '@/stores/reportStore'
import { useBookingIncomeStore } from '@/stores/bookingIncomeStore'
import { storeToRefs } from 'pinia'
import FixedCostTable from '../FixedCostsComponents/FixedCostTable.vue'

const bookingIncomeStore = useBookingIncomeStore() //The below data is temporary code to test the pinia store data flow for each data item.
const { companyName } = storeToRefs(useReportStore())
</script>
<template>
  <div class="m-3">
    <h4>Final Report Step</h4>
  </div>
  <div class="m-3">
    <p>Company Name: {{ companyName }}</p>
  </div>
  <div class="m-3">
    <fixed-cost-table />
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
      <p>${{ bookingIncomeStore.hoursAveragePerBooking }}</p>
    </div>
  </div>
</template>
