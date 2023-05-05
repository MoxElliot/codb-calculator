<script setup lang="ts">
import { useReportStore } from '@/stores/reportStore'
import { storeToRefs } from 'pinia'

defineProps(['fixedCost'])

const reportStore = useReportStore()
const { fixedCosts } = storeToRefs(reportStore)
</script>

<template>
  <div
    class="fixed-cost-table border border-black"
    v-for="fixedCost in fixedCosts"
    :key="fixedCost.id"
  >
    <div class="fixed-cost-row flex flex-row flex-1">
      <p class="flex-1">{{ fixedCost.name }}</p>
      <p class="flex-1">{{ fixedCost.category }}</p>
      <p class="flex-1">${{ fixedCost.amount }}</p>
      <p class="flex-1">{{ fixedCost.payPeriod }}</p>
      <p class="flex-1">${{ fixedCost.individualTotal }}</p>
    </div>
  </div>
  <p>Total Monthly Fixed Costs ${{ reportStore.totalFixedCosts }}</p>
</template>

<style scoped></style>
