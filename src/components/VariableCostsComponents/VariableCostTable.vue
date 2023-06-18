<script setup lang="ts">
import { useReportStore } from '@/stores/reportStore'
import { storeToRefs } from 'pinia'
import { onUpdated } from 'vue'
import scrollToNewCost from '../../assets/utility_functions/scrollToNewCost'

const reportStore = useReportStore()
const { variableCosts, totalVariableCosts } = storeToRefs(reportStore)
const { totalVariableCostAction } = reportStore
const variableCostHeadingArray = [
  ['Name', 'basis-6/22 pr-6'],
  ['Category', 'text-center basis-6/22 pr-6'],
  ['Amount ($)', 'text-center basis-3/22 pr-6'],
  ['', 'basis-1/22']
]

onUpdated(() => {
  scrollToNewCost(variableCosts)
})

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
  <div class="w-full mt-8 overflow-scroll">
    <div class="flex flex-row items-center h-16 bg-grey-200 text-grey-100 mb-4">
      <div :class="heading[1]" v-for="heading in variableCostHeadingArray">
        <p>{{ heading[0] }}</p>
      </div>
    </div>
    <div class="h-64">
      <div class="h-16" v-for="variableCost in variableCosts" :key="variableCost.id">
        <div class="flex flex-row">
          <div class="basis-6/22 pr-6">
            <p class="border-b border-grey-200">{{ variableCost.name }}</p>
          </div>
          <div class="basis-6/22 pr-6">
            <p class="border-b border-grey-200">{{ variableCost.category }}</p>
          </div>
          <div class="basis-6/22 pr-6">
            <p class="border-b border-grey-200">$ {{ variableCost.amount }}</p>
          </div>
          <button class="basis-1/22 bg-costDelete bg-no-repeat" @click="deleteCost(variableCost)"></button>
        </div>
      </div>
    </div>
  </div>
</template>
