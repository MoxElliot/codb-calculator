<script setup lang="ts">
import { useReportStore } from '@/stores/reportStore'
import { storeToRefs } from 'pinia'

const reportStore = useReportStore()
const { companyName } = storeToRefs(reportStore)
</script>

<template>
  <div
    class="flex flex-row justify-center items-center text-heading2_xs md:text-heading text-grey-300 font-serif md:basis-1/6 w-8/10 md:mb-8 lg:w-6/10"
  >
    <p class="">
      Fixed Costs for <span>{{ companyName }}</span>
    </p>
    <img
      src="../../images/fixed-cost-calandar.svg"
      alt="Calandar"
      class="hidden sm:inline sm:px-3"
    />
  </div>
  <div class="text-body2_xs md:text-body2 text-grey-300 basis-1/6 w-9/10 sm:w-8/10 lg:w-6/10">
    <p>
      A Fixed Cost is any Yearly or Monthly fee that you expect to pay in a regular year! Add the
      name of the cost, the category, the amount, and whether or not the cost is Monthly or Yearly.
    </p>
  </div>
</template>
