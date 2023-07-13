<script setup lang="ts">
import { useReportStore } from '@/stores/reportStore'
import { storeToRefs } from 'pinia'
import VariableCostCamera from '../IconComponents/VariableCostCamera.vue'

const reportStore = useReportStore()
const { companyName } = storeToRefs(reportStore)
</script>

<template>
 <div
      class="flex flex-row justify-center items-center text-heading2_xs md:text-heading text-grey-300 font-serif md:basis-1/6 w-8/10 md:mb-8 lg:w-6/10"
    >
      <p class="">
        Variable Costs for <span>{{ companyName }}</span>
      </p>
      <variable-cost-camera 
        class="hidden sm:inline mx-2"/>
     
    </div>
    <div class="text-body2_xs md:text-body2 text-grey-300 basis-1/6 w-9/10 sm:w-8/10 lg:w-6/10">
      <p>
        A Variable Cost is any expense category that your are expecting to pay on an irregular
        basis!Add the name of the cost, the category, the amount below.
      </p>
    </div>
</template>
