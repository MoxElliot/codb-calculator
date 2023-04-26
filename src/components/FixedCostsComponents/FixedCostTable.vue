<script setup lang="ts">
import { useReportStore } from '@/stores/reportStore'
import { storeToRefs } from 'pinia'

defineProps(['fixedCost'])

const { fixedCosts } = storeToRefs(useReportStore())
</script>

<template>
  <div class="fixed-cost-table" v-for="fixedCost in fixedCosts" :key="fixedCost.id">
    <div class="fixed-cost-row">
      <p>Expense Name: {{ fixedCost.name }}</p>
      <p>Category: {{ fixedCost.category }}</p>
      <p>Amount: {{ fixedCost.amount }}</p>
      <p>Pay Period: {{ fixedCost.payPeriod }}</p>
      <p>Yearly Total: {{ fixedCost.total }}</p>
    </div>
  </div>
</template>

<style scoped>
.fixed-cost-table {
  border: 1px solid black;
}
</style>
