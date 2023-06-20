<script setup lang="ts">
import { useReportStore } from '@/stores/reportStore'
import { storeToRefs } from 'pinia'
import { onUpdated } from 'vue'
import scrollToNewCost from '../../assets/utility_functions/scrollToNewCost'

const reportStore = useReportStore()
const { fixedCosts } = storeToRefs(reportStore)
const { totalFixedCostAction } = reportStore
const fixedCostHeadingArray = [
  ['Name', 'basis-6/22 pr-6'],
  ['Category', 'text-center basis-6/22 pr-6'],
  ['Amount ($)', 'text-center basis-3/22 pr-6'],
  ['Frequency', 'text-center basis-3/22 pr-6'],
  ['Total', 'text-center basis-3/22 pr-6'],
  ['', 'basis-1/22']
]

onUpdated(() => {
  scrollToNewCost(fixedCosts)
})

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
  <div class="w-full mt-8 overflow-scroll">
    <div class="flex flex-row items-center h-16 bg-grey-200 text-grey-100 mb-4">
      <div :class="heading[1]" v-for="heading in fixedCostHeadingArray">
        <p>{{ heading[0] }}</p>
      </div>
    </div>
    <div class="h-64">
      <div class="h-16" v-for="fixedCost in fixedCosts" :key="fixedCost.id">
        <div class="flex flex-row">
          <div class="basis-6/22 pr-6">
            <p class="border-b border-grey-200">{{ fixedCost.name }}</p>
          </div>
          <div class="basis-6/22 pr-6">
            <p class="border-b border-grey-200">{{ fixedCost.category }}</p>
          </div>
          <div class="basis-3/22 pr-6">
            <p class="border-b border-grey-200">${{ fixedCost.amount }}</p>
          </div>
          <div class="basis-3/22 pr-6">
            <p class="border-b border-grey-200">{{ fixedCost.payPeriod }}</p>
          </div>
          <div class="basis-3/22 pr-6">
            <p class="border-b border-grey-200">${{ fixedCost.individualTotal }}</p>
          </div>
          <button
            class="basis-1/22 bg-costDelete bg-no-repeat"
            @click="deleteCost(fixedCost)"
          ></button>
        </div>
      </div>
    </div>
  </div>
</template>
