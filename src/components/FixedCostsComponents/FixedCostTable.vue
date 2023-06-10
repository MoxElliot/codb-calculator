<script setup lang="ts">
import { useReportStore } from '@/stores/reportStore'
import { storeToRefs } from 'pinia'
import { onUpdated, ref } from 'vue'

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

// const cost = ref<null | any>(9)

onUpdated(()=>{
  console.log("inUpdated", fixedCosts)
   scrollToNewCost()
})


const scrollToNewCost = () => {
  let top = fixedCosts.value.length.toString()
  const cost = ref<null | HTMLElement>(document.getElementById(top))
  cost.value?.scrollIntoView({block: "start", inline: "nearest"})
  console.log("getelementbyID",cost.value)
  console.log('here whole thing, just 0', fixedCosts.value, fixedCosts.value[0].id, fixedCosts.value.length)
  
}

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
  <button class="btn-next" @click="scrollToNewCost">Hi</button>
  <div class="w-full mt-8" >
    <div class="flex flex-row h-16 items-center bg-grey-200 text-grey-100 mb-4">
      <div :class="heading[1]" v-for="heading in fixedCostHeadingArray">
        <p>{{ heading[0] }}</p>
      </div>
    </div>
    <div class="h-64 overflow-scroll">
      <div class="h-16" v-for="fixedCost in fixedCosts" :id="fixedCost.id" :key="fixedCost.id">
        <div class="flex flex-row">
          <div class="basis-6/22 pr-6">
            <p class="border-b border-grey-200">{{ fixedCost.name }}</p>
          </div>
          <div class="basis-6/22 pr-6">
            <p class="border-b border-grey-200">{{ fixedCost.category }}</p>
          </div>
          <div class="basis-3/22 pr-6">
            <p class=" border-b border-grey-200">${{ fixedCost.amount }}</p>
          </div>
          <div class="basis-3/22 pr-6">
            <p class="border-b border-grey-200">{{ fixedCost.payPeriod }}</p>
          </div >
          <div class="basis-3/22 pr-6">
            <p class="border-b border-grey-200">${{ fixedCost.individualTotal }}</p>
          </div>
          <button class="basis-1/22 bg-costDelete bg-contain bg-no-repeat" @click="deleteCost(fixedCost)"></button>
        </div>
        
      </div>
      
    </div>
    
  </div>
</template>
