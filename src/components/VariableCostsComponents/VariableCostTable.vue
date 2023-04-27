<script setup lang="ts">
import { useVariableCostStore } from '@/stores/variableCostStore'
import { storeToRefs } from 'pinia'

defineProps(['variableCost'])

const { variableCosts } = storeToRefs(useVariableCostStore())
</script>

<template>
  <div class="variable-cost-table" v-for="variableCost in variableCosts" :key="variableCost.id">
    <div class="variable-cost-row">
      <p>Expense Name: {{ variableCost.name }}</p>
      <p>Category: {{ variableCost.category }}</p>
      <p>Yearly Total: {{ variableCost.total }}</p>
    </div>
  </div>
</template>

<style scoped>
.variable-cost-table {
  border: 1px solid black;
}
</style>
