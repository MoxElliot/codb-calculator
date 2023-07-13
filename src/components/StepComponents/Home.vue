<script setup lang="ts">
import { useReportStore } from '@/stores/reportStore'
import { onMounted } from 'vue'
import HomeInfoQuestionMark from '../IconComponents/HomeInfoQuestionMark.vue'
import HomeWavingHand from '../IconComponents/HomeWavingHand.vue'
import HomeBackground from '../IconComponents/HomBackground.vue'

const reportStore = useReportStore()
const { updateInputValidAction } = reportStore

onMounted(() => {
  updateInputValidAction(true)
})
</script>

<template>
  <home-background
    class="absolute bottom-0 left-0 right-0 top-0 z-10 hidden h-100 w-100 lg:block"
  />
  <div class="z-20 flex h-full basis-full items-center justify-center">
    <div
      class="flex basis-full flex-col items-center justify-center px-8 md:basis-3/4 lg:basis-2/3"
    >
      <div class="mb-2 flex md:mb-10">
        <p class="font-serif text-heading2_xs text-grey-300 md:text-heading2">Hey there!</p>
        <home-waving-hand class="icon-sizing ml-1 self-center" />
      </div>

      <div class="mb-2 text-center font-sans text-body2_xs text-grey-300 md:mb-10 md:text-body2">
        <p class="">
          Welcome to the Cost of Doing Business (CoDB) tool. With this spreadsheet, you'll be able
          to easily calculate how much it costs for you to run your business!
        </p>
      </div>
      <div
        class="info-blue my-2 flex p-3 font-sans text-body_xs text-blue-300 md:mb-10 md:py-6 md:pl-16 md:pr-24 md:text-body"
      >
        <home-info-question-mark class="icon-sizing mr-2 self-start" />
        <div>
          <p>This is a self-guided excercise, so don't feel rushed!</p>
          <p>Using the NEXT STEP button, navigate through each section until the end!</p>
        </div>
      </div>
    </div>
  </div>
</template>
