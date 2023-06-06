  <script setup lang="ts">
import { useReportStore } from '@/stores/reportStore'
import { storeToRefs } from 'pinia'

defineProps(['fixedCost'])

const reportStore = useReportStore()
const { fixedCosts, totalFixedCosts } = storeToRefs(reportStore)
const { totalFixedCostAction } = reportStore

const deleteCost = (fixedCost: {
  id: number
  name: string
  category: string
  amount: number | null 
  payPeriod: string
  individualTotal: number | undefined
}) => {
  const filtersList = reportStore.fixedCosts.filter((el) => el !== fixedCost)
  reportStore.fixedCosts = filtersList
  totalFixedCostAction()
}
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
      <button class="mx-2 border border-black" @click="deleteCost(fixedCost)">X</button>
    </div>
  </div>
  <!-- <p>Total Monthly Fixed Costs ${{ totalFixedCosts }}</p> -->
</template>
