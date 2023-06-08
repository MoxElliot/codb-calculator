<script setup lang="ts">
import { useReportStore } from '@/stores/reportStore'
import { storeToRefs } from 'pinia'

defineProps(['variableCost'])

const reportStore = useReportStore()
const { variableCosts, totalVariableCosts } = storeToRefs(reportStore)
const { totalVariableCostAction } = reportStore

const deleteCost = (variableCost: {
  id: number
  name: string
  category: string
  amount: number | null | undefined
}) => {
  const filtersList = reportStore.variableCosts.filter((el) => el !== variableCost)
  reportStore.variableCosts = filtersList
  totalVariableCostAction()
}
</script>

<template>
  <div
    class="variable-cost-table border border-black"
    v-for="variableCost in variableCosts"
    :key="variableCost.id"
  >
    <div class="variable-cost-row flex flex-row">
      <p class="flex-1">{{ variableCost.name }}</p>
      <p class="flex-1">{{ variableCost.category }}</p>
      <p class="flex-1">$ {{ variableCost.amount }}</p>
      <button class="mx-2 border border-black" @click="deleteCost(variableCost)">X</button>
    </div>
  </div>
  <p>Total Monthly Variable Costs ${{ totalVariableCosts }}</p>
</template>

<style scoped></style>
