<script setup lang="ts">
import { onMounted } from 'vue'
import FixedCostDataInput from '../FixedCostsComponents/FixedCostDataInput.vue'
import FixedCostTable from '../FixedCostsComponents/FixedCostTable.vue'
import { useReportStore } from '@/stores/reportStore'
import { storeToRefs } from 'pinia'

const reportStore = useReportStore()
const { updateInputValidAction } = reportStore
const { companyName } = storeToRefs(reportStore)

onMounted(() => {
    updateInputValidAction(true)
})

</script>

<template>
  <div class="flex flex-col text-center basis-full items-center justify-center">
    <div class="flex flex-row justify-center items-center text-heading text-grey-300 font-serif basis-1/6 w-6/10 mb-8 ">
      <p class="">
        Fixed Costs for <span >{{ companyName }}</span>
      </p>
      <div class="bg-fixedCostCalendar bg-no-repeat h-10 w-10 bg-contain ml-3"> </div>
    </div>
    <div class="text-body text-grey-300 basis-1/6 w-6/10">
      <p>
        A Fixed Cost is any Yearly or Monthly fee that you expect to pay in a regular year! Add the
        name of the cost, the category, the amount, and whether or not the cost is Monthly or
        Yearly.
      </p>
    </div>
    <div class="basis-full flex flex-col items-center justify-center w-7/10">
      <fixed-cost-data-input />
      <fixed-cost-table />
    </div>
  </div>
</template>
