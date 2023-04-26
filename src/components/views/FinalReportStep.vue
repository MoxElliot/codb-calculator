<script setup lang="ts">
import { useReportStore } from '@/stores/reportStore'
import { useBookingIncomeStore } from '@/stores/bookingIncomeStore'
import { storeToRefs } from 'pinia'
import FixedCostTable from '../FixedCostsComponents/FixedCostTable.vue'

const bookingIncomeStore = useBookingIncomeStore()
const { companyName } = storeToRefs(useReportStore())
</script>
<template>
  <div>
    <h4>Final Report Step</h4>
  </div>
  <div class="companyName">
    <p>Company Name: {{ companyName }}</p>
  </div>
  <fixed-cost-table />
  <div>
    <p>Bookings per Month</p>
    <p>{{ bookingIncomeStore.bookingsPerMonth }}</p>
  </div>
</template>
